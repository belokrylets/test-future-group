export interface CurrentBook {
  imageLinks: string;
  description: string;
  title: string;
  authors: string[];
}

export interface CurrentBookSliceState {
  currentBook: CurrentBook;
  error: string;
  isLoading: boolean;
}
