---
title: "Concurrency in Golang"
date: 2026-07-22T12:59:00+05:30 
draft: false
tags:
  - "blog"
  - "journal"
---

As interesting as this sounds,Concurrency seems like the logical next step to programming for me because I simply cant wrap my head around executing programs in random order ie not in the order they were written.

The whole point of learning this was because of my P2P messaging app in Golang (yes the Concurrency king).

So in my endeavors I knew about-

-Race Conditions:Multiple programs concurrently means same data gets mangled by them 

-Critical Section:The section of code where the mangling is happening

-Memory Access Synchronization:Basically controlling who access the memory at a point in time thereby avoiding race conditions.

-Naturally controlling data leads to Starvation ie processes not getting the data they need due to poor structuring or poor code but hey atleast they are not in a race condition.

-Deadlock:Processes waiting on one other to release data thereby stopping themselves

-Livelock:Processes allowing one other to go on thereby running endlessly allowing each other to go on without the whole program progressing.



