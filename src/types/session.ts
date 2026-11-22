export interface RunningStats {
  distanceKm: number;
  paceSecondsPerKm: number | null;
}

export interface SessionParticipant {
  runnerId: string;
  sessionId: string;
  status: 'not_started' | 'running' | 'finished';

  joinedAt: number;
  startedAt: number | null; 
  finishedAt: number | null;

  stats: RunningStats;
}