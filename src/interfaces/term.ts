export interface TermResponse {
  item: Array<Term> | Term;
  message: string;
}

export interface Term {
  id: number;
  name: string;
  description: string;
}
