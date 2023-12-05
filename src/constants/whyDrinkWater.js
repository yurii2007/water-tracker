import React from "react";

import { ReactComponent as CalendarIcon } from "../images/svg/calendar.svg";
import { ReactComponent as GraphicIcon } from "../images/svg/statistic_icon.svg";
import { ReactComponent as ToolsIcon } from "../images/svg/instruments_icon.svg";

export const whyDrinkWater = [
  "Supply of nutrients to all organs",
  "Providing oxygen to the lungs",
  "Maintaining the work of the heart",
  "Release of processed substances",
  "Ensuring the stability of the internal environment",
  "Maintaining within the normal temperature",
  "Maintaining an immune system capable of resisting disease",
];

const primaryBlue = "var(--primary-blue)";

const iconProps = {
  width: "100%",
  height: "100%",
  stroke: primaryBlue,
};

export const waterTrackerInfo = [
  {
    descriptions: "Habit drive",
    icon: React.createElement(CalendarIcon, { ...iconProps }),
  },
  {
    descriptions: "View statistics",
    icon: React.createElement(GraphicIcon, { ...iconProps }),
  },
  {
    descriptions: "Personal rate setting",
    icon: React.createElement(ToolsIcon, { ...iconProps }),
  },
];
