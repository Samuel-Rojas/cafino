return (
<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
<div className="max-w-6xl mx-auto">
{/_ Header _/}
<div className="text-center mb-12">
<h1 className="text-5xl font-bold text-amber-900 mb-2">☕ cafino</h1>
<p className="text-amber-700">find your perfect coffee match</p>
</div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-amber-900">What are you in the mood for?</h2>
            <button
              onClick={resetFilters}
              className="text-sm text-amber-600 hover:text-amber-800 underline"
            >
              Reset filters
            </button>
          </div>

          <div className="space-y-8">
            {/* Strength Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-amber-900">
                  Strength
                </label>
                <span className="text-sm text-amber-600 font-medium">
                  {selectedStrength ? getStrengthLabel(selectedStrength) : 'Any'}
                </span>
              </div>
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
              <div className="flex justify-between text-xs text-amber-600 mt-1">
                <span>Any</span>
                <span>Mild</span>
                <span>Light</span>
                <span>Medium</span>
                <span>Strong</span>
                <span>Intense</span>
              </div>
            </div>

            {/* Creaminess Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-amber-900">
                  Creaminess
                </label>
                <span className="text-sm text-orange-600 font-medium">
                  {selectedCreaminess ? getCreamyLabel(selectedCreaminess) : 'Any'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={selectedCreaminess || 0}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setSelectedCreaminess(val === 0 ? null : val);
                }}
                className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-xs text-orange-600 mt-1">
                <span>Any</span>
                <span>Black</span>
                <span>Light</span>
                <span>Balanced</span>
                <span>Creamy</span>
                <span>Extra</span>
              </div>
            </div>

            {/* Vibe Buttons (keeping these since they're categorical) */}
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-3">
                Vibe
              </label>
              <div className="flex gap-2 flex-wrap">
                {['comforting', 'bold', 'smooth', 'adventurous'].map(vibe => (
                  <button
                    key={vibe}
                    onClick={() => setSelectedVibe(selectedVibe === vibe ? null : vibe)}
                    className={`px-6 py-2 rounded-full transition-all capitalize ${
                      selectedVibe === vibe
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                    }`}
                  >
                    {vibe === 'comforting' && '🤗 '}
                    {vibe === 'bold' && '⚡ '}
                    {vibe === 'smooth' && '✨ '}
                    {vibe === 'adventurous' && '🌟 '}
                    {vibe}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            {suggestions.length === coffees.length
              ? 'All Coffees'
              : `${suggestions.length} ${suggestions.length === 1 ? 'Match' : 'Matches'}`}
          </h2>

          {suggestions.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <p className="text-xl text-amber-700">No matches found. Try adjusting your filters!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map(coffee => (
                <div
                  key={coffee.id}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    {coffee.name}
                  </h3>
                  <p className="text-amber-700 mb-4">{coffee.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600 font-medium">Strength:</span>
                      <div className="flex">
                        {Array(coffee.strength).fill('☕').map((emoji, i) => (
                          <span key={i}>{emoji}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600 font-medium">Creaminess:</span>
                      <div className="flex">
                        {Array(coffee.creaminess).fill('🥛').map((emoji, i) => (
                          <span key={i}>{emoji}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600 font-medium">Vibe:</span>
                      <span className="capitalize text-amber-800">{coffee.vibe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

);
}

export default CoffeeSuggester;
