# SideBySide — Software Architecture

## 1. Overview

SideBySide is a mobile application that allows two runners in different locations to participate in a shared running session.

Unlike traditional group-running applications, SideBySide does not require participants to follow the same route, maintain the same pace, or start and finish simultaneously.

The application aims to create a sense of companionship through synchronized running statistics, session status updates, and preset encouragement messages.

This document describes the application's architecture, core data models, and important engineering decisions. It will evolve as the project develops.

## 2. Technology Stack

| Component | Technology | Status |
|---|---|---|
| Mobile application | React Native | Implemented |
| Development framework | Expo | Implemented |
| Programming language | TypeScript | Implemented |
| Navigation | Expo Router | Implemented |
| Backend | To be determined | Planned |
| Database | To be determined | Planned |
| Real-time communication | To be determined | Planned |
| Version control | Git and GitHub | Implemented |

The backend and database technologies will be selected based on the application's requirements for real-time communication, data persistence, and maintainability.

## 3. High-Level Architecture

SideBySide will use a client-server architecture.

### Mobile Application

The React Native application will be responsible for:

- Rendering the user interface.
- Creating and joining running sessions.
- Managing local running activity.
- Collecting running statistics.
- Displaying the partner's synchronized statistics.
- Sending and receiving preset encouragement messages.

### Backend (Planned)

The backend will be responsible for:

- Creating and managing shared sessions.
- Identifying session participants.
- Validating and processing session updates.
- Synchronizing participant status and statistics.
- Managing session completion.
- Enforcing access control.

### Database (Planned)

The database will persist relevant information about running sessions and participants.

The exact database schema will be designed during backend development.

## 4. Application Navigation

The application currently uses Expo Router with stack-based navigation.

### Current Screens

| Screen | Route | Purpose |
|---|---|---|
| Home | `/` | Entry point with Create Run and Join Run buttons |
| Create Run | `/create` | Placeholder for session creation |
| Join Run | `/join` | Placeholder for joining an existing session |

### Relevant Files

- `src/app/_layout.tsx` — Root navigation configuration.
- `src/app/index.tsx` — Home screen.
- `src/app/create.tsx` — Create Run screen.
- `src/app/join.tsx` — Join Run screen.

Session creation and joining functionality have not yet been implemented.

## 5. Core Data Model (In Design)

The application's core domain will initially consist of three models.

### RunningSession

Represents a shared running session involving up to two participants.

Responsibilities include:

- Identifying the session.
- Recording when the session was created.
- Tracking session membership.
- Managing the shared session lifecycle.

### SessionParticipant

Represents an individual runner's participation in a shared session.

Responsibilities include:

- Identifying the runner.
- Recording when the runner joined.
- Tracking individual running status.
- Recording individual start and finish times.
- Associating the runner with their running statistics.

**Key design principle:** Session membership and individual running activity are separate concepts.

A runner may join a session without immediately starting their run. Similarly, one runner may finish while the other continues running.

### RunningStats

Represents statistics associated with an individual runner's activity.

Potential fields include:

- Distance traveled.
- Elapsed running time.
- Current or average pace.

The initial data structures and exact field types will be finalized during Milestone 1.3.

## 6. Session Lifecycle (Proposed)

The application must support the following behavior:

1. Runner A creates a session.
2. Runner A may begin running.
3. Runner B joins the existing session.
4. Runner B begins running independently.
5. Both runners receive relevant session and activity updates.
6. Either runner may finish before the other.
7. The shared session eventually completes.

An important architectural requirement is that a shared session's lifecycle must not force both runners to start or finish simultaneously.

The exact session states and transition rules are still being designed.

## 7. Real-Time Synchronization (Planned)

The application will require real-time communication between participants.

The intended flow is:

1. The mobile application collects or updates local running statistics.
2. Relevant updates are sent to the backend.
3. The backend validates and processes the updates.
4. The partner's application receives synchronized information.
5. The user interface displays the updated data.

Future design decisions will include update frequency, reconnect behavior, and handling temporary network failures.

## 8. Privacy and Security

Location privacy is a central requirement.

The initial application should allow runners to share progress without exposing their exact running locations to their partners.

Design principles include:

- Do not expose precise GPS coordinates to session partners.
- Share only the information required for the companionship experience.
- Validate access to shared sessions.
- Avoid exposing private session data to unauthorized users.
- Test shared sessions with consenting participants before introducing public matching.

The specific authentication and authorization mechanisms will be designed during backend implementation.

## 9. Architecture Decisions

### Decision 001 — React Native and TypeScript

**Decision:** Use React Native with TypeScript for mobile development.

**Rationale:**
- Supports cross-platform mobile development.
- Encourages explicit data types and interfaces.
- Provides experience with modern mobile application architecture.

### Decision 002 — Expo Router

**Decision:** Use Expo Router for navigation.

**Rationale:**
- Provides file-based routing.
- Integrates with the existing Expo project.
- Supports typed navigation paths.

### Decision 003 — Independent Participant State (Proposed)

**Decision:** Model individual participant activity separately from the shared session.

**Rationale:**
- Participants can start at different times.
- Participants can finish independently.
- Each runner maintains their own statistics.
- Shared session state does not need to represent every runner's activity.

This decision will be finalized during implementation of the session data model.

### Decision 004 — Local Running Activity Tracking

**Decision:** Running activity will be tracked locally on the runner's device, independently of backend connectivity.

**Rationale:**
- Runners should be able to continue their activity without an internet connection.
- Elapsed running time should continue increasing during temporary network interruptions.
- The backend is responsible for synchronizing statistics between participants, not controlling the local running timer.

**Future considerations:**
- Synchronization after reconnection.
- Indicating stale statistics to the partner.
- Handling application suspension or termination.
- Supporting paused runs in a future version.

## 10. Current Implementation Status

### Completed

- Initial Expo and TypeScript project setup.
- Git and GitHub repository configuration.
- Home screen with Create Run and Join Run buttons.
- Stack navigation between the three screens.
- Initial navigation testing on a physical iPhone.

### In Progress

- Running session data model.
- Participant state design.

### Planned

- Session creation and joining logic.
- Backend and database integration.
- Real-time participant synchronization.
- Running statistics collection.
- Preset encouragement messages.
- Error handling and reconnect behavior.
- Automated testing of core session logic.

## 11. Open Design Questions

The following questions will be addressed during development:

- How should sessions and participants be uniquely identified?
- Which participant states are necessary?
- When should a shared session be considered complete?
- How should disconnected participants be handled?
- Which running statistics should be synchronized?
- How frequently should statistics be updated?
- Which backend and database technologies best fit the MVP?

---

*This document will be updated as architectural decisions are implemented, tested, and reviewed.*