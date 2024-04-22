import { useState } from "react";
import data from "../../data.json";
import Cards from "./Card";
import { DEFAULT_VIEW } from "../constants.js";

export default function DataViewSwitcher() {
  const [selectedView, setSelectedView] = useState(DEFAULT_VIEW);
  console.log(selectedView);
  return (
    <>
      {data.map(({ title, timeframes }) => {
        const { daily, weekly, monthly } = timeframes;
        return (
          <Cards key={title} daily={daily} monthly={monthly} weekly={weekly} />
        );
      })}
    </>
  );
}
