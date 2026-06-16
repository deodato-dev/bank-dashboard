import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/register.css';
import logoMosh from '../assets/mosh.png'; // Importe a logo aqui


export const Cadastro: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const fazerRegistro = () => {
        // 1. Verifica se os campos estão vazios (o .trim() tira os espaços em branco)
        if (email.trim() === '' || usuario.trim() === '' || senha.trim() === '') {
            alert('Por favor, preencha o E-mail, Usuário e a Senha antes de entrar!');
            return; // O return funciona como um muro: bloqueia a execução e não deixa chegar no navigate
        }

        // 2. Se o código passou do if, significa que tem dados. Pode redirecionar!
        console.log("Dados do login:", { email, usuario,senha });
        navigate('/home'); 
    };

    return (
        /* Nova div envolvendo a página inteira */
        <div className="cadastro-container">
            <img src={logoMosh} alt="Logo" className="logo" />
            <br />
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="cad">
                    <h3 className="titulo">Cadastro</h3>
                    <br />

                    <label>Insira seu E-mail:</label>
                    <input
                        className="email"
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <label>Crie um usuário:</label>
                    <input
                        id="usuario"
                        className="usuario"
                        type="text"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <br />

                    <label>Crie uma senha:</label>
                    <input
                        id="senha"
                        className="senha"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <br />

                    <div className="botao">
                        <input
                            onClick={() => navigate(-1)}
                            className="vol"
                            type="button"
                            value="Voltar"
                        />
                        <input
                            onClick={fazerRegistro}
                            className="criar"
                            type="button"
                            value="Criar conta"
                        />
                    </div>
                    <br /> <br />

                    <Link className="link" to="/login">Já possui uma conta?</Link>
                </div>
            </form>


        </div>
    );
};