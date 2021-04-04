import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
      // return state.books.filter((book) => );
    default:
      return state;
  }
};

export default filterReducer;
