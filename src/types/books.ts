export interface Books {
  kind: string;
  totalItems: string;
  items: any[];
}

export interface BooksState {
  books: Books;
  isLoading: boolean;
  error: string;
  startIndex: number;
}
