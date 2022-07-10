export interface ICurrentBook {
  imageLinks: string;
  description: string;
  title: string;
  authors: string[];
}

export interface CurrentBookSliceState {
  currentBook: ICurrentBook;
  error: string;
  isLoading: boolean;
}