(() => {
  'use strict';

  const photoToggle = document.querySelector('.photo-toggle');
  if (photoToggle) {
    photoToggle.addEventListener('click', () => {
      const enabled = photoToggle.getAttribute('aria-pressed') !== 'true';
      photoToggle.setAttribute('aria-pressed', String(enabled));
      photoToggle.setAttribute('aria-label', enabled ? 'Show profile photo in monochrome' : 'Show profile photo in color');
      document.querySelector('.profile-photo').classList.toggle('is-color', enabled);
    });
  }

  const container = document.getElementById('github-activity');
  if (!container) return;
  const namespace = 'http://www.w3.org/2000/svg';
  const element = (name, attributes = {}, content) => {
    const node = document.createElementNS(namespace, name);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
    if (content !== undefined) node.textContent = content;
    return node;
  };

  const render = data => {
    if (!Array.isArray(data.contributions) || !data.contributions.length) return;
    const days = data.contributions
      .filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day.date) && Number.isFinite(day.count) && Number.isFinite(day.level))
      .sort((a, b) => a.date.localeCompare(b.date)).slice(-365);
    if (!days.length) return;
    const startOffset = new Date(`${days[0].date}T12:00:00Z`).getUTCDay();
    const columns = Math.ceil((days.length + startOffset) / 7);
    const cell = 8;
    const step = 11;
    const left = 26;
    const top = 19;
    const width = left + columns * step;
    const chart = element('svg', {viewBox: `0 0 ${width} 96`, class: 'activity-chart', role: 'img', 'aria-labelledby': 'calendar-description'});
    const total = days.reduce((sum, day) => sum + day.count, 0);
    chart.append(element('title', {id: 'calendar-description'}, `${total.toLocaleString()} GitHub contributions from ${days[0].date} to ${days[days.length - 1].date}`));
    for (const [label, row] of [['Mon', 1], ['Wed', 3], ['Fri', 5]]) {
      chart.append(element('text', {x: 0, y: top + row * step + 7}, label));
    }
    let lastMonth = -1;
    let lastLabelColumn = -4;
    days.forEach((day, index) => {
      const position = index + startOffset;
      const column = Math.floor(position / 7);
      const row = position % 7;
      const date = new Date(`${day.date}T12:00:00Z`);
      const month = date.getUTCMonth();
      if (month !== lastMonth) {
        if (column - lastLabelColumn >= 3 && column < columns - 2) {
          chart.append(element('text', {x: left + column * step, y: 9}, date.toLocaleDateString('en', {month: 'short', timeZone: 'UTC'})));
          lastLabelColumn = column;
        }
        lastMonth = month;
      }
      const rect = element('rect', {x: left + column * step, y: top + row * step, width: cell, height: cell, 'data-level': Math.max(0, Math.min(4, day.level))});
      rect.append(element('title', {}, `${day.count} contribution${day.count === 1 ? '' : 's'} on ${date.toLocaleDateString('en', {month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}`));
      chart.append(rect);
    });
    container.replaceChildren(chart);
    const link = document.getElementById('activity-total');
    link.textContent = `${total.toLocaleString()} contributions in the last year`;
    link.title = `View on GitHub. Calendar through ${days[days.length - 1].date}.`;
  };

  try {
    render(JSON.parse(document.getElementById('activity-data').textContent));
  } catch (_) {
    // The profile link remains available if calendar data cannot be read.
  }

  fetch('https://github-contributions-api.jogruber.de/v4/Hendrixx-RE?y=last', {signal: AbortSignal.timeout(6000)})
    .then(response => {
      if (!response.ok) throw new Error('Activity unavailable');
      return response.json();
    })
    .then(render)
    .catch(() => {
      // Keep the bundled, real contribution snapshot when the service is offline.
    });
})();
