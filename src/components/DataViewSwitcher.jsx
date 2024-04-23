import { useState } from "react";
import data from "../../data.json";
import Cards from "./Cards.jsx";
import { DEFAULT_VIEW } from "../constants.js";
const allViews = ["daily", "weekly", "monthly"];

export default function DataViewSwitcher() {
  const [selectedView, setSelectedView] = useState(DEFAULT_VIEW);

  return (
    <div>
      {allViews.map((view) => (
        <a
          onClick={(event) => {
            event.preventDefault();
            setSelectedView(view);
          }}
          href=""
          key={view}
        >
          {view}
        </a>
      ))}
      <Cards data={data} selectedView={selectedView} />
    </div>
  );
}
