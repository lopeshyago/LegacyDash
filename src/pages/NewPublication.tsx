import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link2, Send } from 'lucide-react';

function NewPublication() {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement publication creation with Supabase
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Nova Publicação</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              URL da Publicação
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Link2 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://twitter.com/user/status/123456789"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Cole o link da sua publicação e nós coletaremos as métricas automaticamente.
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Send className="h-5 w-5" />
            <span>Cadastrar Publicação</span>
          </button>
        </form>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Dicas</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Certifique-se de que a URL seja pública e acessível</li>
            <li>Você só pode cadastrar publicações de redes sociais que estão no seu perfil</li>
            <li>As métricas são atualizadas automaticamente a cada hora</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewPublication;