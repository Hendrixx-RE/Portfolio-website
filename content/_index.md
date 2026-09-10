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

## Leadership & Achievements
- **Hackathon Winner:** 1st place at a national-level hackathon hosted by IIT Patna and Jilo Health (Hackmatrix).
- **Hackathon Winner:** Placed at a national-level hackathon hosted by IISc Bangalore (Rhapsody), competing against 1,500+ participants.
- **Competitive Programming:** Solved 500+ problems across Codeforces, CSES, and LeetCode; rated Pupil on Codeforces.
- **Coding Cell AIT:** Organised a national-level coding competition "Codeft" attracting 300+ participants from 50+ colleges across India.

## Projects

### [Vektix – Local Natural-Language File Locator](https://github.com/Hendrixx-RE/Vektix)
*Go, Ollama/LLM, Hybrid Search (BM25+Vector), Bubble Tea*
- Built a privacy-first CLI/TUI tool in Go (16.7K LOC, 31% test coverage) that locates and retrieves exact file passages from natural-language queries, running entirely on-device via Ollama with zero cloud calls.
- Designed a hybrid retrieval engine fusing fuzzy path/trie, BM25, and vector (nomic-embed-text) search arms via Reciprocal Rank Fusion, and a 2-tier intent router pairing a guarded regex fast-path with a schema-constrained 0.5B LLM fallback to avoid model inference on common queries.
- Engineered safety-critical infrastructure including manifest-based index invalidation, a secrets denylist and path confinement enforced at read time, sandboxed PDF parsing, and background index reconciliation with LRU-based ephemeral scope indexing.

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
