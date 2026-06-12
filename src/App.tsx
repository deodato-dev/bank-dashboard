// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas das suas respectivas pastas
import { Selecao } from './pages/selection';
import { Login } from './pages/login';
import { Cadastro } from './pages/register';
import { Home } from './pages/home';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Página inicial (antigo index.html) */}
                <Route path="/" element={<Selecao />} />

                {/* Rota para o Login */}
                <Route path="/login" element={<Login />} />

                {/* Rota para o Cadastro */}
                <Route path="/cadastro" element={<Cadastro />} />

                {/* Rota para a Home/Dashboard */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}