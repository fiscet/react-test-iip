import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchNewsItemStartAsync } from "../redux/news/news.actions";

import NewsItem from "../components/news/news-item.component";

const NewsPage = ({ fetchNewsItemStartAsync }) => {
  useEffect(() => {
    fetchNewsItemStartAsync();
  });

  return <NewsItem />;
};

const mapDispatchToProps = dispatch => ({
  fetchNewsItemStartAsync: () => dispatch(fetchNewsItemStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(NewsPage);
