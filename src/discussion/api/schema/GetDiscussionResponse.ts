import { ApiAnswer, ApiQuestion } from '../../../shared';

export interface GetDiscussionResponse {
  id: string;
  question: ApiQuestion;
  answer: ApiAnswer[];
}
