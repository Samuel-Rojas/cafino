import { useState } from "react";
import { coffees } from "../data/coffeeData";

function CoffeeSuggester() {

  const vibes = ['comforting', 'bold', 'smooth', 'adventourous'];

  const [selectedStrength, setSelectedStrength] = useState(null);
  const [selectedCreaminess, setSelectedCreaminess] = useState(null);
  const [selectedVibe, setSelectedVibe] = useState(null);

  // Filter coffees based on selected criteria
  const getSuggestions = () => {
    let filtered = coffees;

    // Filter by strength (allow +/- 1 tolerance) determined for the strength sliders
    if (selectedStrength !== null) {
      filtered = filtered.filter(
        (coffee) => Math.abs(coffee.strength - selectedStrength) <= 1
      );
    }

    // Filter by creaminess (allow +/- 1 tolerance)
    if (selectedCreaminess !== null) {
      filtered = filtered.filter(
        (coffee) => Math.abs(coffee.creaminess - selectedCreaminess) <= 1
      );
    }

    // Filter by vibe (exact match)
    if (selectedVibe !== null) {
      filtered = filtered.filter((coffee) => coffee.vibe === selectedVibe);
    }

    return filtered;
  };

  const suggestions = getSuggestions();

  // Reset all filters
  const resetFilters = () => {
    setSelectedStrength(null);
    setSelectedCreaminess(null);
    setSelectedVibe(null);
  };
  //Mild, light, Medium, strong, intense
  const getStrengthLabel = (val) => {
    if (val == 1) return "Mild";
    if (val == 2) return "Light";
    if (val == 3) return "Medium";
    if (val == 4) return "Strong";
    if (val == 5) return "Intense";
    return "";
  };

  const getCreaminessLabel = (val) => {
    if (val == 1) return "Black";
    if (val == 2) return "Barely There";
    if (val == 3) return "Balanced";
    if (val == 4) return "Creamy";
    if (val == 5) return "Extra Creamy";
    return "";
  };

  const handleVibeButton = (vibe) => {
    setSelectedVibe(selectedVibe === vibe ? null : vibe)
  }

  return (
    <div className="flex-col items-center p-20">
      {/* Filters (strength)*/}
      <div className="space-y-8">
        <input
          type="range"
          min="0"
          max="5"
          value={selectedStrength || 0}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            setSelectedStrength(val === 0 ? null : val);
          }}
          className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
        <div className="flex justify-between text-sm">
          <span>Any</span>
          <span>Mild</span>
          <span>Light</span>
          <span>Medium</span>
          <span>Strong</span>
          <span>Intense</span>
        </div>
      </div>
      {/* Filters (Creaminess) */}
      <div className="space-y-8 mt-8">
          <input
            type="range"
            min="0"
            max="5"
            value={selectedCreaminess || 0}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setSelectedCreaminess(val === 0 ? null : val);
            }}
            className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
          <div className="flex justify-between items-center text-sm">
            <span>Black</span>
            <span>Barely There</span>
            <span>Balanced</span>
            <span>Creamy</span>
            <span>Extra Creamy</span>
          </div>
      </div>
      {/* Vibe Buttons */}
      <div>
        {vibes.map((vibe, index) => (
          <button 
            key={index}
            onClick={handleVibeButton}
            className={`px-6 py-2 rounded-full tansition-all capitalize ${selectedVibe === vibe ? 'bg-rose-500 text-white shadow-md': 'bg-rose-100 text-rose-800 hover:bg-rose-200'}`}>
            {vibe === 'comforting' && '🤗 '}
            {vibe === 'bold' && '⚡ '}
            {vibe === 'smooth' && '✨ '}
            {vibe === 'adventurous' && '🌟 '}
            {vibe}
            </button>
        ))}
      </div>
    </div>
  );
}

export default CoffeeSuggester;
