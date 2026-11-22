## November 17, 2026 — Initial Setup

- Initialized Expo SDK 58 with React Native and TypeScript.
- Configured GitHub repository and project documentation.
- Set up ESLint and resolved initial static analysis errors.
- Verified TypeScript and ESLint checks pass.
- Successfully launched the application on a physical iPhone.

Next: Replace Expo starter UI with the SideBySide home screen.

## November 21, 2026 — Session Data Models and Unit Testing

### Completed
- Designed `SessionParticipant` and `RunningStats` TypeScript interfaces.
- Implemented `calculateElapsedTime()` to calculate individual running duration.
- Configured Jest with Expo.
- Implemented five unit tests covering running states and edge cases.
- Verified TypeScript, ESLint, and Jest checks.

### Technical Decisions
- Participant lifecycle state is separate from running statistics.
- Elapsed running time is calculated rather than stored redundantly.
- Running duration is designed to continue independently of backend connectivity.
- Time calculations use millisecond timestamps and return seconds.

### What I Learned
- TypeScript interfaces, union types, and nullable values.
- Interface composition.
- Pure functions and separation of business logic from UI.
- Automated unit testing using Jest.
- Testing edge cases and interpreting development-tool warnings.

### Next Steps
- Design the shared `RunningSession` model.
- Define session lifecycle rules and transitions.
- Begin implementing session creation logic.