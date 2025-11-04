import { useState } from "react";
import { coffees } from "../data/coffeeData";

function CoffeeSuggester() {
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
    if (val == 1) return 'Mild';
    if (val == 2) return 'Light';
    if (val == 3) return 'Medium';
    if (val == 4) return 'Strong';
    if (val == 5) return 'Intense';
    return '';
  }

  const getCreaminessLabel = (val) => {
    if(val == 1) return 'Black';
    if(val == 2) return 'Barely There';
    if(val == 3) return 'Balanced';
    if(val == 4) return 'Creamy';
    if(val == 5) return 'Extra Creamy';
    return '';
  }

  

  return (
    <div>
    </div>
  )
}

export default CoffeeSuggester;
