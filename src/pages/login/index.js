import "./Login.css"; // Importando arquivo CSS para estilização
import { useState } from "react";
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";

function Login() {
    const [email, setEmail] = useState("admin@admin.com");
    const [senha, setSenha] = useState("123456");

    const autenticar = () => {
        if (!email || !senha) {
            Swal.fire({
                icon: 'error',
                text: "Os campos de e-mail e senha são obrigatórios, verifique!"
            });
        }

        // Comunicação com o backend.
        usuarioService
        .autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            window.location = "/";
        })
        .catch(erro => {
            // Tratamento de erro
        });
    };

    return (
        <div className="login-container">

            <div className="login-form">
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text" 
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        id="senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        type="password" 
                        placeholder="Digite sua senha"
                    />
                </div>

                <div className="forgot-password">
                    <a href="#">Esqueci minha senha</a>
                </div>

                <button className="login-button" onClick={autenticar}>Entrar</button>
            </div>

        </div>
    );
}

export default Login;
