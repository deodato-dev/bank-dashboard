import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/selection.css'; 

// Importe a logo aqui (ajuste o caminho se necessário)
import logoMosh from '../assets/mosh.png'; 

export const Selecao: React.FC = () => {
    const navigate = useNavigate();

    return (
        /* Substituímos as tags vazias <> pela nossa nova div container */
        <div className="selecao-container">
            
            <img src={logoMosh} alt="Logo" className="logo" />
            
            <div className="sel">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h3 className="titulo">Selecione uma ação:</h3>

                    <div className="botao">
                        <input  
                            className="cadastro" 
                            onClick={() => navigate('/cadastro')}  
                            type="button" 
                            value="Cadastro" 
                        />
                        <input 
                            className="login" 
                            onClick={() => navigate('/login')} 
                            type="button" 
                            value="Login" 
                        />
                    </div>
                </form>
            </div>

        </div>
    );
};