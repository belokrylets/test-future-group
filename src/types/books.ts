export interface IBooks {
    kind: string;
    totalItems: string;
    items: any[];
}

export interface BooksState {
    books: IBooks;
    isLoading: boolean;
    error: string;
    startIndex: number;
}