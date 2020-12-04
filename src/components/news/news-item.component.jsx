import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ReactHtmlParser from "react-html-parser";

import { selectNewsItem, NewsItemTitle } from "../../redux/news/news.selector";

import { NewsItemContainer } from "./news-item.styles";

const NewsItem = ({ children, currentNewsItem, ...props }) => {
  /** This should be put in a shared utility or even in the reducer */
  function calcDuration({
    yearFrom,
    monthFrom,
    dayFrom,
    yearTo,
    monthTo,
    dayTo,
    daysTxt,
    monthsTxt,
    yearsTxt
  }) {
    let res = "";

    /** same year */
    if (yearFrom > 0 && yearFrom === yearTo) {
      /** same month, returns the difference in days */
      if (monthFrom > 0 && monthFrom === monthTo) {
        res += `${parseInt(dayTo) - parseInt(dayFrom)} ${daysTxt}`;
        return res;
      }

      /** one or more months before, returns the difference in months */
      if (monthFrom > 0 && monthFrom < monthTo) {
        res += `${parseInt(monthTo) - parseInt(monthFrom)} ${monthsTxt}`;
        return res;
      }
    }

    /** 
   * one or more years before, return the difference in years 
   ... and also the months */
    const yearDiff = parseInt(yearTo) - parseInt(yearFrom);
    const monthDiff = parseInt(monthTo) - parseInt(monthFrom);

    const realMonthDiff = monthDiff > 0 ? monthDiff : 12 - Math.abs(monthDiff);
    const realYearDiff = monthDiff > 0 ? yearDiff : yearDiff - 1;

    res += `${realYearDiff} ${yearsTxt}`;
    res += monthDiff !== 0 ? `, ${realMonthDiff} ${monthsTxt}` : "";

    return res;
  }

  const calcPeriod = dateString => {
    if (!dateString || !typeof dateString === "string") {
      return "";
    }

    const curYear = new Date().getFullYear();
    const curMonth = new Date().getMonth() + 1;
    const curDay = new Date().getDate();

    const dateNews = Date.parse(dateString);

    const yearFrom = new Date(dateNews).getFullYear();
    const monthFrom = new Date(dateNews).getMonth() + 1;
    const dayFrom = new Date(dateNews).getDate();

    return calcDuration({
      yearFrom,
      monthFrom,
      dayFrom,
      yearTo: curYear,
      monthTo: curMonth,
      dayTo: curDay,
      daysTxt: "Days",
      monthsTxt: "Months",
      yearsTxt: "Years"
    });
  };

  return (
    <NewsItemContainer className="padding-md">
      <h1 className="padding-bottom-xs border-bottom-xs border-grey">
        {currentNewsItem?.title}
      </h1>
      <div className="text-weight-medium">{currentNewsItem?.lastUpdatedBy}</div>
      <div className="text-weight-light">
        Last updates: {calcPeriod(currentNewsItem?.lastUpdated)} Ago
      </div>
      <div className="margin-top-md">
        {ReactHtmlParser(currentNewsItem?.body)}
      </div>
    </NewsItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentNewsItem: selectNewsItem
});

export default connect(mapStateToProps)(NewsItem);
