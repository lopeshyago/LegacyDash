import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Plus, Users, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart2 className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">ContentMetrics</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <BarChart2 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            
            <Link to="/publications/new" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Plus className="w-5 h-5" />
              <span>Nova Publicação</span>
            </Link>
            
            <Link to="/engagements" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Users className="w-5 h-5" />
              <span>Engajamentos</span>
            </Link>
            
            <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar