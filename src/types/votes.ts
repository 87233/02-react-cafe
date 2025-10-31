export default interface VotesType {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = "good" | "neutral" | "bad";
