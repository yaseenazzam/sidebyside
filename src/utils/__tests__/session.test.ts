
import type { SessionParticipant } from '../../types/session';
import { calculateElapsedTime } from '../session';

// Base participant used across multiple tests
const runningParticipant: SessionParticipant = {
  runnerId: 'runnerA',
  sessionId: 'sessionA',
  status: 'running',
  joinedAt: 0,
  startedAt: 60_000,
  finishedAt: null,
  stats: {
    distanceKm: 2.5,
    paceSecondsPerKm: 330,
  },
};

describe('calculateElapsedTime', () => {
  // Test 1: Runner is actively running
  test('returns 600 seconds after 10 minutes of running', () => {
    // Arrange
    const nowMs = 660_000;

    // Act
    const result = calculateElapsedTime(runningParticipant, nowMs);

    // Assert
    expect(result).toBe(600);
  });

  // Test 2: Runner has not started
  test('returns 0 when runner has not started', () => {
    const notStartedParticipant: SessionParticipant = {
      ...runningParticipant,
      status: 'not_started',
      startedAt: null,
    };

    const result = calculateElapsedTime(notStartedParticipant, 660_000);

    expect(result).toBe(0);
  });

  // Test 3: Runner has finished
  test('returns 1500 seconds when runner has finished', () => {
    const finishedParticipant: SessionParticipant = {
      ...runningParticipant,
      status: 'finished',
      finishedAt: 1_560_000,
    };

    const result = calculateElapsedTime(finishedParticipant, 2_000_000);

    expect(result).toBe(1500);
  });

  // Test 4: Missing start timestamp
  test('returns 0 when the start timestamp is missing', () => {
    const participant: SessionParticipant = {
      ...runningParticipant,
      startedAt: null,
    };

    const result = calculateElapsedTime(participant, 660_000);

    expect(result).toBe(0);
  });

  // Test 5: Negative elapsed duration
  test('returns 0 when current time is before start time', () => {
    const nowMs = 0;

    const result = calculateElapsedTime(runningParticipant, nowMs);

    expect(result).toBe(0);
  });
});
