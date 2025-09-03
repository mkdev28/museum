import React from "react";
import ExhibitCard from "./ExhibitCard.jsx";
import { exhibit } from "../data/data.js";

export default function ExhibitGrid({ exhibits, onExhibitClick }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {exhibits.map((exhibit) => (
          <ExhibitCard
            key={exhibit.id}
            exhibit={exhibit}
            onClick={() => onExhibitClick(exhibit)}
          />
        ))}
      </div>
    </div>
  );
}