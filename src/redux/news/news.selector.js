import { createSelector } from "reselect";

const selectNews = state => state.news;

export const selectNewsItem = createSelector(
  [selectNews],
  news => news.newsItem
);
