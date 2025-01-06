import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'

import './styles.scss'

import LogoWhite from '../../assets/logo-white.png'

import { AppContext } from '../../contexts/AppContext'

export function Login(){
    const [form, setForm] = useState({
        usuario: '',
        senha: ''
    });
    
    const[validForm, setValidForm] = useState(true);

    const navigate = useNavigate();

    const { handleLogin } = useContext(AppContext)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(form.usuario === ''){
            setValidForm(false);
        }else
        if (form.senha === '') {
            setValidForm(false);
        }else {
            setValidForm(true);
            const r = handleLogin(form.usuario, form.senha);
            navigate('/dashboard')
        }
    }
    return(
        <div className="bg-login">
            <div className="column-image">
                <img src={LogoWhite} alt="Meu Banco" title="Meu Banco" className="logo" />
            </div>
            <div className="column-form">

                <h1>Bem-vindo <span>:)</span></h1>
                <h2>Entre na sua conta</h2>

                <form name="login" method="post" onSubmit={handleSubmit}>
                    <label className="linha-input">
                        <span>Usuário</span>
                        <input type="text" name="usuario" value={form.usuario} onChange={(e) => setForm({...form, usuario: e.target.value})}/>
                    </label>
                    <label className="linha-input">
                        <span>Senha</span>
                        <input type="password" name="senha" value={form.senha} onChange={(e) => setForm({...form, senha: e.target.value})}/>
                    </label>
                    <div className="rodape-form-login">
                        <div className="lembrar">
                            <label>
                                <input type="checkbox" /> Lembrar dispositivo
                            </label>
                        </div>
                        <div className="recuperar-senha">
                            <a href="#">Esqueceu sua senha?</a>
                        </div>
                    </div>
                    <input type="submit" value="Entrar" className="btn-login" />
                    {validForm === false && (
                        <div className="form-invalido">Usuário ou senha incorretos!</div>
                    )}
                </form>

                <div className="cadastre">
                    <p>Não tem conta? <a href="#">Faça uma agora</a></p>
                </div>

            </div>
        </div>
    )
}