import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlayersList from './components/PlayersList';
import PlayerProfile from './components/PlayerProfile';
import LoadingSpinner from './components/LoadingSpinner';
import dataService from './services/dataService';

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadAllPlayers();
  }, []);

  const loadAllPlayers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await dataService.getAllPlayers();
      setPlayers(response.data);
      setSearchQuery('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError(null);
      setSearchQuery(query);
      const response = await dataService.searchPlayers(query);
      setPlayers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseProfile = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} onShowAllPlayers={loadAllPlayers} />
      
      <main>
        {searchQuery && (
          <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-gray-600">
                Resultados para: <span className="font-semibold text-transfermarket-green">"{searchQuery}"</span>
              </p>
            </div>
          </div>
        )}
        
        <PlayersList
          players={players}
          onPlayerClick={handlePlayerClick}
          loading={loading}
          error={error}
        />
      </main>

      {selectedPlayer && (
        <PlayerProfile
          player={selectedPlayer}
          onClose={handleCloseProfile}
        />
      )}
    </div>
  );
}

export default App;
