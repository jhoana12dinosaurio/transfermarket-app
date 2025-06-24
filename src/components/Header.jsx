import React from 'react';
import { useState } from 'react';

const Header = ({ onSearch, onShowAllPlayers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleShowAll = () => {
    setSearchTerm('');
    onShowAllPlayers();
  };

  return (
    <header className="bg-gradient-to-r from-transfermarket-green to-transfermarket-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 
                className="text-white text-2xl font-bold font-football cursor-pointer hover:text-goal-yellow transition-colors"
                onClick={handleShowAll}
              >
                ⚽ TransferMarket Pro
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSubmit} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar jugadores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 text-white placeholder-white/70 px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-goal-yellow focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                >
                  🔍
                </button>
              </div>
            </form>
            
            <button
              onClick={handleShowAll}
              className="bg-goal-yellow text-referee-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            >
              Ver Todos
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;