export default function booksReducer(state = {books: []}, action) {

  switch (action.type) {
    case 'FETCH_BOOKS':
      return {books: action.payload}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action.payload]}
    case 'ADD_REVIEW':
      // debugger;
      let books = state.books.map(book => {
        if (book.id === action.payload.data.id) {

          return action.payload.data
        } else {
          return book
        }
      })
      return {...state, books: books }
    default:
      return state;
  }
}