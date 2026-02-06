import React, { Fragment } from "react";
import CalendarBanner from "@/modulers/economic-calender/CalenderBanner";
import CalenderData from "@/modulers/economic-calender/CalenderData";

export const metadata = {
  title: "Economic Calendar - Track Real-Time Market Events | Golden Bulls",
  description: "Stay ahead with our comprehensive economic calendar. Track global economic releases, central bank decisions, and key indicators that impact your forex trading strategy in real-time.",
};

const EconomicCalender = () => {
  return (
    <Fragment>
      <CalendarBanner />
      <CalenderData />
    </Fragment>
  );
};

export default EconomicCalender;
