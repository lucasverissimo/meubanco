import { ReactSVG } from 'react-svg'

import './styles.scss'

import BuscaIcon from '../../assets/busca-icon.svg'
import AlertaIcon from '../../assets/alerta-icon.svg'
import UsuarioIcon from '../../assets/usuario-icon.svg'


export function Header(){

    function handleSubmitBusca(e: any){ // eslint-disable-line
        e.preventDefault();
        return false;
    }

    return(
        <header className="header">
            <div className="form-busca">
                <form name="busca" method="post" onSubmit={handleSubmitBusca}>
                    <input type="search" name="buscar" placeholder="Buscar" />
                    <button type="submit">
                        <ReactSVG src={BuscaIcon} className="busca-icon" />
                    </button>
                </form>
            </div>

            <div className="topo-usuario">
                <a href="#">
                    <ReactSVG src={AlertaIcon} className="icon" />
                </a>
                
                <a href="#">
                    <ReactSVG src={UsuarioIcon} className="icon" />
                    Bem-vindo, <strong>Tide Cardoso</strong>
                </a>
            </div>
        </header>
    )
}