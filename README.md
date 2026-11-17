# SideBySide

A real-time virtual running companionship app.

## Overview
SideBySide is a mobile application designed to help runners feel connected while running in different locations. Unlike traditional group runs, participants can maintain independent routes, paces, and start times while sharing live progress and encouragement.

## MVP Features
The initial MVP will support private running sessions between two participants. One runner can invite another to join, including after the session has already started. Participants will be able to share live running statistics and send preset encouragement messages while maintaining independent routes, paces, and start times.

## Tech Stack
- React Native
- Expo
- TypeScript
- Supabase (planned)

## Development Status
Early development.
Expo starter app runs successfully in browser.
Running sessions and GPS tracking are not
yet implemented.

## Getting Started
```bash
npm install
npx expo start
```

## Architecture
See docs/architecture.md

## Roadmap
- **Milestone 0 — Project Setup:** Initialize the Expo application, configure GitHub, and document the architecture.
- **Milestone 1 — Authentication & Database:** Implement user authentication, design the PostgreSQL schema, and configure Supabase security policies.
- **Milestone 2 — Session Management:** Enable users to create, join, start, and finish private running sessions independently.
- **Milestone 3 — Real-Time Communication:** Synchronize participant status, running statistics, and preset encouragement messages.
- **Milestone 4 — GPS Tracking:** Implement on-device distance and pace calculations while protecting users' location privacy.
- **Milestone 5 — Testing & Reliability:** Handle disconnections, background tracking, and edge cases. Add automated tests and validate the application on physical devices.
- **Milestone 6 — Portfolio Release:** Polish the UI, finalize documentation, and prepare a working demonstration.