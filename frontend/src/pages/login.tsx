import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css';
import logoMosh from '../assets/mosh.png'; // Importe a logo aqui

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = () => {
        // 1. Verifica se os campos estão vazios (o .trim() tira os espaços em branco)
        if (email.trim() === '' || senha.trim() === '') {
            alert('Por favor, preencha o E-mail e a Senha antes de entrar!');
            return; // O return funciona como um muro: bloqueia a execução e não deixa chegar no navigate
        }

        // 2. Se o código passou do if, significa que tem dados. Pode redirecionar!
        console.log("Dados do login:", { email, senha });
        navigate('/home'); 
    };

    return (
        /* Nova div envolvendo a página inteira */
        <div className="login-container">
            <img src={logoMosh} alt="Logo" className="logo" />
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="log">
                    <h3 className="titulo">Login</h3>
                    <br />
                    
                    <input 
                        id="email" 
                        className="email" 
                        type="text" 
                        placeholder="E-mail/Usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />            
                    <br /> <br />
                    <input 
                        id="senha" 
                        className="senha" 
                        type="password" 
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <br /> <br />
                    
                    <div className="botao">
                        <input 
                            onClick={() => navigate(-1)}  
                            id="vol"  
                            className="vol" 
                            type="button" 
                            value="Voltar" 
                        /> 
                        <input 
                            onClick={fazerLogin} 
                            id="entrar" 
                            className="entrar" 
                            type="button" 
                            value="Entrar" 
                        />
                    </div>
                    
                    <br /> <br />
                    <Link className="link" to="/cadastro">Não possui uma conta?</Link>
                </div>
            </form>
        </div>
    );
};