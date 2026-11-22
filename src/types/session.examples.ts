import type { SessionParticipant } from './session';

export const runnerA: SessionParticipant = {
  runnerId: 'runnerA',
  sessionId: 'sessionId',
  status: 'running',
  joinedAt: new Date('2026-11-21T08:00:00-7:00').getTime(),
  startedAt: new Date('2026-11-21T08:05:00-7:00').getTime(),
  finishedAt: null,
  stats: {
    distanceKm: 2.5,
    paceSecondsPerKm: 330
  }
};