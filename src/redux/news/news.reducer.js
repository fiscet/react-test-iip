import NewsActionTypes from "./news.types";

const INITIAL_STATE = {
  newsItem: {}
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS_ITEM_START:
      return {
        ...state,
        isFetching: true
      };
    case NewsActionTypes.FETCH_NEWS_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newsItem: action.payload
      };
    case NewsActionTypes.FETCH_NEWS_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
