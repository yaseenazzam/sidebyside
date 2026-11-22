import type { SessionParticipant } from '../types/session';

export function calculateElapsedTime(
  participant: SessionParticipant,
  nowMs: number
): number {
  // Return 0 if the runner hasn't started.
  if (participant.status === 'not_started' || participant.startedAt === null) {
    return 0;
  }

  let endTime: number;

  // Determine which timestamp to use.
  if (participant.status === 'finished') {
    if (participant.finishedAt === null) {
      return 0;
    }

    endTime = participant.finishedAt;
  } else {
    endTime = nowMs;
  }

  // Convert milliseconds to seconds.
  const elapsedSeconds = (endTime - participant.startedAt) / 1000;

  // Prevent negative elapsed times.
  return Math.max(0, elapsedSeconds);
}