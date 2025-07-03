import React from 'react';
import { FaCat } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com a listra branca */}
      <div className="bg-white h-16 shadow-md w-full z-10">
        <div className="h-full flex justify-center items-center">
          <div className="flex items-center gap-x-3">
            <FaCat className="text-3xl text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">
              DudaSys
            </span>
            <FaCat className="text-3xl text-purple-600" />
          </div>
        </div>
      </div>

      {/* Conteúdo principal com o formulário */}
      <div className="bg-pink-300 flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Entrar na sua conta</h2>

          {/* Formulário simplificado para login */}
          <form action="https://getform.io/f/bnlxplwb" method="POST">

            {/* Campo de Email */}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="text-lg shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Campo de Senha */}
            <div className="mb-3">
              <input
                type="password"
                name="Senha"
                id="password"
                placeholder="Digite sua senha"
                className="text-lg shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Botão de Envio */}
            <button
              className="text-lg bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;