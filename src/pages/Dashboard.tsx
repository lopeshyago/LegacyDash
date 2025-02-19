import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ThumbsUp, Share2, MessageCircle } from 'lucide-react';

const mockData = [
  { name: 'Jan', engajamento: 4000 },
  { name: 'Fev', engajamento: 3000 },
  { name: 'Mar', engajamento: 2000 },
  { name: 'Abr', engajamento: 2780 },
  { name: 'Mai', engajamento: 1890 },
  { name: 'Jun', engajamento: 2390 },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total de Likes</p>
              <p className="text-2xl font-semibold">24.5K</p>
            </div>
            <ThumbsUp className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Compartilhamentos</p>
              <p className="text-2xl font-semibold">8.2K</p>
            </div>
            <Share2 className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Comentários</p>
              <p className="text-2xl font-semibold">12.3K</p>
            </div>
            <MessageCircle className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Crescimento</p>
              <p className="text-2xl font-semibold">+15%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Engajamento Mensal</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="engajamento" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Últimas Publicações</h2>
        <div className="space-y-4">
          {/* Placeholder for publications list */}
          <div className="border-b pb-4">
            <p className="text-sm text-gray-500">Twitter • 2h atrás</p>
            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="mt-2 flex space-x-4 text-sm text-gray-500">
              <span>1.2K Likes</span>
              <span>234 Retweets</span>
              <span>56 Comentários</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;