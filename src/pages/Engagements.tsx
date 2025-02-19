import React from 'react';
import { Calendar, Users, Target } from 'lucide-react';

const mockEngagements = [
  {
    id: '1',
    title: 'Campanha de Verão',
    description: 'Participe da nossa campanha de verão compartilhando fotos dos seus momentos favoritos.',
    platform: 'instagram',
    requirements: 'Mínimo de 10k seguidores, foco em lifestyle',
    deadline: '2025-03-01',
  },
  {
    id: '2',
    title: 'Tech Week',
    description: 'Compartilhe suas dicas de tecnologia e participe da nossa semana tech.',
    platform: 'twitter',
    requirements: 'Perfil verificado, foco em tecnologia',
    deadline: '2025-02-28',
  },
];

function Engagements() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Oportunidades de Engajamento</h1>
      
      <div className="grid gap-6">
        {mockEngagements.map((engagement) => (
          <div key={engagement.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{engagement.title}</h2>
                <p className="text-gray-600 mt-2">{engagement.description}</p>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium capitalize">
                {engagement.platform}
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>Requisitos: {engagement.requirements}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Prazo: {new Date(engagement.deadline).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>20 criadores participando</span>
              </div>
            </div>
            
            <button className="mt-4 w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Participar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engagements;