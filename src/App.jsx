import { useState } from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import ExhibitGrid from "./components/ExhibitGrid.jsx";
import ExhibitModal from "./components/ExhibitModal.jsx";
import { exhibit } from "./data/data.js";
import { useDarkMode } from "./hooks/darkMODE";

function App() {
  const [activeHall, setActiveHall] = useState("ancient");
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const { darkMode, toggleDarkMode } = useDarkMode(false);

  const currentExhibits = exhibit[activeHall] || [];

  const handleExhibitClick = (exhibit) => {
    setSelectedExhibit(exhibit);
  };

  const handleCloseModal = () => {
    setSelectedExhibit(null);
  };

  const handleHallChange = (hall) => {
    setActiveHall(hall);
    setSelectedExhibit(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header with dark mode toggle */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Navigation for hall switching */}
      <Navigation activeHall={activeHall} onHallChange={handleHallChange} />

      {/* Main content */}
      <main>
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {activeHall === "ancient" && "Ancient Civilizations"}
              {activeHall === "renaissance" && "Renaissance Art"}
              {activeHall === "modern" && "Modern Sculptures"}
              {activeHall === "nature" && "Natural History"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {activeHall === "ancient" &&
                "Explore artifacts from ancient civilizations that shaped human history."}
              {activeHall === "renaissance" &&
                "Discover masterpieces from the Renaissance period of artistic rebirth."}
              {activeHall === "modern" &&
                "Experience contemporary sculptures and installations that challenge perception."}
              {activeHall === "nature" &&
                "Journey through millions of years of natural history and evolution."}
            </p>
          </div>
        </div>

        {/* Exhibit Grid */}
        <ExhibitGrid
          exhibits={currentExhibits}
          onExhibitClick={handleExhibitClick}
        />
      </main>

      {/* Modal */}
      <ExhibitModal exhibits={selectedExhibit} onClose={handleCloseModal} />
    </div>
  );
}

export default App;