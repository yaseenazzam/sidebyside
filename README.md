# SideBySide

**A real-time virtual running companionship app.**

## Overview

SideBySide is a mobile application designed to help runners feel connected while running in different locations.

Unlike traditional group runs, participants can maintain independent routes, paces, and start times while sharing live progress and encouragement.

The goal is to make running together possible without requiring runners to be physically together.

## MVP Features

The initial MVP will support private running sessions between two participants.

Planned capabilities include:

- **Private Sessions:** Create and join shared running sessions.
- **Independent Running:** Participants can start and finish at different times.
- **Live Statistics:** Share running distance, pace, and session status.
- **Encouragement:** Send preset encouragement messages.
- **Location Privacy:** Share running progress without exposing precise GPS coordinates to other participants.
- **Connection Reliability:** Continue local running activity during temporary network interruptions.

## Tech Stack

### Mobile Development
- React Native
- Expo
- Expo Router
- TypeScript

### Testing & Development
- Jest
- jest-expo
- ESLint
- Git & GitHub

### Backend (Planned)
- Supabase
- PostgreSQL
- Real-time synchronization

## Development Status

**Current Stage: Core Data Models and Application Logic**

### Implemented

- Initialized the React Native application using Expo and TypeScript.
- Developed a home screen with Create Run and Join Run buttons.
- Implemented stack-based navigation using Expo Router.
- Created placeholder screens for session creation and joining.
- Designed TypeScript interfaces for `SessionParticipant` and `RunningStats`.
- Implemented an elapsed-time calculation function supporting independent running start and finish times.
- Configured Jest for automated unit testing.
- Implemented five unit tests covering participant states and edge cases.
- Verified the application navigation on a physical iPhone.

### Planned

- Shared running session creation and joining.
- Session lifecycle management.
- Authentication and database integration.
- Real-time participant status and statistics synchronization.
- On-device running activity and GPS tracking.
- Preset encouragement messages.
- Network reconnection and synchronization handling.
- Session access controls and location privacy protections.

**Note:** Running sessions, live synchronization, and GPS tracking are not yet functional. The current implementation focuses on application structure, data modeling, and foundational business logic.

## Getting Started

### Prerequisites

- Node.js
- npm
- Expo Go or a supported mobile simulator

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yaseenazzam/sidebyside.git
cd sidebyside
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Follow the terminal instructions to launch the application on a supported device or simulator.

## Testing

SideBySide uses Jest for automated unit testing, TypeScript for static type checking, and ESLint for code quality.

### Run Unit Tests

```bash
npm test -- --runInBand
```

### Run TypeScript Checks

```bash
npx tsc --noEmit
```

### Run ESLint

```bash
npx expo lint
```

### Current Test Coverage

Five unit tests verify the `calculateElapsedTime()` function:

1. Calculates elapsed time for an actively running participant.
2. Returns zero when a participant has not started.
3. Calculates the correct duration for a finished participant.
4. Handles a missing start timestamp.
5. Prevents negative elapsed durations.

Additional tests will be added as session management and real-time features are developed.

## Architecture

SideBySide is being designed around a client-server architecture with independent participant state management.

The application separates:

- **Running Sessions:** Shared running experiences.
- **Session Participants:** Individual runner identity, lifecycle, and timestamps.
- **Running Statistics:** Distance and pace information.

Individual running activity is intended to operate independently of backend connectivity, allowing participants to continue running during temporary network interruptions.

For architecture decisions and design details, see [docs/architecture.md](docs/architecture.md).

## Roadmap

- **Milestone 0 — Project Setup:** Initialize the Expo application, configure GitHub, and document the architecture.
- **Milestone 1 — Authentication & Database:** Implement user authentication, design the PostgreSQL schema, and configure Supabase security policies.
- **Milestone 2 — Session Management:** Enable users to create, join, start, and finish private running sessions independently.
- **Milestone 3 — Real-Time Communication:** Synchronize participant status, running statistics, and preset encouragement messages.
- **Milestone 4 — GPS Tracking:** Implement on-device distance and pace calculations while protecting users' location privacy.
- **Milestone 5 — Testing & Reliability:** Handle disconnections, background tracking, and edge cases. Expand automated tests and validate the application on physical devices.
- **Milestone 6 — Portfolio Release:** Polish the UI, finalize documentation, and prepare a working demonstration.

## Development Documentation

The project includes technical documentation describing architectural decisions, development progress, and implementation details.

- [Architecture](docs/architecture.md)
- [Development Log](docs/development-log.md)

---

**Project Status:** Active Development

SideBySide is being developed as a software engineering portfolio project, with an emphasis on mobile development, real-time communication, reliable application logic, and maintainable software architecture.
