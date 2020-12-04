import NewsActionTypes from "./news.types";

export const fetchNewsItemStart = () => ({
  type: NewsActionTypes.FETCH_NEWS_ITEM_START
});

export const fetchNewsItemSuccess = newsItemMap => ({
  type: NewsActionTypes.FETCH_NEWS_ITEM_SUCCESS,
  payload: newsItemMap
});

export const fetchNewsItemFailure = errorMessage => ({
  type: NewsActionTypes.FETCH_NEWS_ITEM_FAILURE,
  payload: errorMessage
});

export const fetchNewsItemStartAsync = () => {
  return dispatch => {
    dispatch(fetchNewsItemStart());

    fetch("https://my-json-server.typicode.com/joeiipay/iipayfrontendtest/item")
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        dispatch(fetchNewsItemSuccess(data));
      })
      .catch(error => dispatch(fetchNewsItemFailure(error.message)));
  };
};
