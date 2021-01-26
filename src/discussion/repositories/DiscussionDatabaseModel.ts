export interface DiscussionDatabaseModel {
  id: string;
  question: {
    id: string;
    title: string;
    description: string;
  };
  answer: Array<{
    id: string;
    description: string;
  }>;
}
