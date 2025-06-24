import React, { useState, useEffect } from 'react';
import dataService from '../services/dataService';

const PlayerProfile = ({ player, onClose }) => {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await dataService.getTeamById(player.teamId);
        setTeam(response.data);
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [player.teamId]);

  const getSkillColor = (skill) => {
    if (skill >= 90) return 'bg-transfermarket-red';
    if (skill >= 80) return 'bg-transfermarket-orange';
    if (skill >= 70) return 'bg-transfermarket-green';
    if (skill >= 60) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const marketValue = dataService.formatMarketValue(player.marketValue);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-transfermarket-green mx-auto"></div>
          <p className="mt-4 text-center text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          >
            ×
          </button>
          
          <div className="bg-gradient-to-r from-transfermarket-blue to-transfermarket-green p-8 text-white">
            <div className="flex items-center space-x-6">
              {player.photo ? (
                <img 
                  src={player.photo} 
                  alt={player.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-3xl ${player.photo ? 'hidden' : ''}`}>
                {player.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
                <div className="flex items-center space-x-4 text-lg">
                  <span>{player.position}</span>
                  <span>•</span>
                  <span>{player.age} años</span>
                  <span>•</span>
                  <span>🏳️ {player.nationality}</span>
                </div>
                {team && (
                  <div className="mt-2 flex items-center space-x-2">
                    {team.logo && (
                      <img 
                        src={team.logo} 
                        alt={team.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
                    <span className="text-goal-yellow font-semibold">
                      {team.name} - {team.league}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="text-right">
                <div className="text-goal-yellow text-3xl font-bold">{marketValue}</div>
                <div className="text-white/80">Valor de mercado</div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Estadísticas</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-transfermarket-green to-transfermarket-blue p-4 rounded-lg text-white text-center">
                    <div className="text-2xl font-bold">{player.goals}</div>
                    <div className="text-sm opacity-90">Goles</div>
                  </div>
                  <div className="bg-gradient-to-br from-transfermarket-orange to-transfermarket-red p-4 rounded-lg text-white text-center">
                    <div className="text-2xl font-bold">{player.assists}</div>
                    <div className="text-sm opacity-90">Asistencias</div>
                  </div>
                  <div className="bg-gradient-to-br from-transfermarket-blue to-club-navy p-4 rounded-lg text-white text-center">
                    <div className="text-2xl font-bold">{player.matches}</div>
                    <div className="text-sm opacity-90">Partidos</div>
                  </div>
                  <div className="bg-gradient-to-br from-goal-yellow to-transfermarket-orange p-4 rounded-lg text-white text-center">
                    <div className="text-lg font-bold">{player.contractUntil}</div>
                    <div className="text-sm opacity-90">Contrato</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Habilidades</h2>
                <div className="space-y-3">
                  {Object.entries(player.skills).map(([skill, value]) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-20 text-sm font-medium text-gray-700 capitalize">
                        {skill === 'pace' ? 'Velocidad' :
                         skill === 'shooting' ? 'Disparo' :
                         skill === 'passing' ? 'Pase' :
                         skill === 'dribbling' ? 'Regate' :
                         skill === 'defending' ? 'Defensa' :
                         skill === 'physical' ? 'Físico' : skill}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${getSkillColor(value)} transition-all duration-500`}
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <div className="w-8 text-sm font-bold text-gray-700">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trofeos</h2>
              <div className="flex flex-wrap gap-2">
                {player.trophies.map((trophy, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-goal-yellow to-transfermarket-orange text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    🏆 {trophy}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {player.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;