---
title: "Atul Prathap"
---

Hi, I'm **Atul Prathap**! I'm a Backend-focused Computer Engineering student (Go, Python, distributed systems) with production experience cutting backend latency 50% at a healthcare startup, open-source microservices contributions, and multiple national hackathon wins.

## Education
**Army Institute Of Technology** – Pune, Maharashtra  
*Bachelor of Engineering, Computer Engineering*  
GPA: 8.2/10 | Year of Passing: 2027-28

## Technical Skills
- **Languages:** Go, Python, Bash, Java, Javascript, C++, SQL
- **Backend & Frameworks:** FastAPI, Gin, REST APIs, Microservices Architecture
- **Infrastructure & Tools:** Docker, Git, Linux, Claude Code, CI/CD, Bubbletea
- **Core Concepts:** Distributed Systems, Concurrent Programming, Asynchronous I/O, Event-Driven Architecture, Data Pipelines, Test-Driven Development, System Design

## Experience
**Software Development Engineer @ Jilo Health** (Remote)  
*May 2026 – Jun 2026*
- Rewrote insurance reconciliation logic in Go, reducing processing latency by 50%.
- Engineered an AI-powered voice agent for customer care, automating routine support workflows and reducing manual call handling.

## Open Source Contributions
**Medic Org (cht-core):** Refactored cht-conf backend logic toward a microservices architecture, reducing latency by 20%.

**[Untrivial-ai/agent-orchestrator](https://github.com/Untrivial-ai/agent-orchestrator)** (platform for running and supervising teams of coding agents from planning to merge, across 25+ harnesses and desktop/web/mobile/cloud):
- Implemented the cloud-plane SCM (source control management) integration layer, enabling agents to plan, branch, and merge against remote repositories.
- Built the NodeOps provider onboarding flow, adding support for a new compute provider into the orchestrator's agent-execution backend.
- Shipped multiple reliability fixes to stabilize long-running multi-agent orchestration sessions.
- Designed and implemented the deeplink sharing system, allowing agent sessions and results to be shared via direct links.

## Leadership & Achievements
- **Hackathon Winner:** 1st place at a national-level hackathon hosted by IIT Patna and Jilo Health (Hackmatrix).
- **Hackathon Winner:** Placed at a national-level hackathon hosted by IISc Bangalore (Rhapsody), competing against 1,500+ participants.
- **Competitive Programming:** Solved 500+ problems across Codeforces, CSES, and LeetCode; rated Pupil on Codeforces.
- **Coding Cell AIT:** Organised a national-level coding competition "Codeft" attracting 300+ participants from 50+ colleges across India.

## Projects

### Distributed Inference Hoster – Multi-Node Distributed Model Hosting
*Go, gRPC, Distributed Systems, LLM Inference*
- Built a distributed inference system that pools compute across multiple networked machines to collaboratively serve a single large model too big to fit on any one node.
- Designed a tensor/layer-sharding scheme that partitions model weights across peer nodes and pipelines activations between them over gRPC, coordinating a shared inference graph with fault-tolerant node handoff.
- Implemented a lightweight scheduler and health-check layer to dynamically rebalance shards as nodes join, leave, or fail, keeping end-to-end latency stable under partial cluster failure.

### Normal-Iceee – Healthcare Claims Platform (Group Project)
*Python, FastAPI, React, Supabase*
- Engineered a backend system to process and validate unstructured clinical documents against FHIR compliance standards, reducing manual data entry time by 70%.
- Implemented cryptographically-linked audit trails recording every validation outcome, fallback event, and error for regulatory compliance.
- Designed a custom asynchronous document-splitter pipeline to handle heavy data ingestion without memory bottlenecks, achieving under 30s retrieval time.

### [Orpheus – AI Linux Package Analyzer](https://github.com/Hendrixx-RE)
*Go, LLM APIs, Linux*
- Built an AI-powered Linux package analyzer supporting 5 package managers (Pacman, Yay, APT, npm, and pip) through a unified analysis engine.
- Reduced package indexing latency by 60% using concurrent metadata collection with Go goroutines and channels.
- Integrated LLM APIs to generate package explanations, dependency summaries, and safe cleanup recommendations via natural-language queries.
