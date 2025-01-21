import { ReactSVG } from 'react-svg'
import { useLocation, Link } from 'react-router'

import './styles.scss';


import LogoDefault from '../../assets/logo-default.png';

import HomeIcon from '../../assets/home-icon.svg';
import CarteiraIcon from '../../assets/carteira-icon.svg';
import TransferenciaIcon from '../../assets/transferencia-icon.svg';
import ServicosIcon from '../../assets/servicos-icon.svg';
import ConfiguracoesIcon from '../../assets/configuracoes-icon.svg';

const menu = [
    {
        name: 'Painel',
        icon: HomeIcon,
        path: '/dashboard',
    },
    {
        name: 'Carteira',
        icon: CarteiraIcon,
        path: '/carteira',
    },
    {
        name: 'Transferências',
        icon: TransferenciaIcon,
        path: '/transferencias',
    },
    {
        name: 'Serviços',
        icon: ServicosIcon,
        path: '/servicos',
    },
    {
        name: 'Configurações',
        icon: ConfiguracoesIcon,
        path: '/configuracoes',
    },
];


export function Sidebar(){
    const location = useLocation();

    return(
        <div className="sidebar">
            <div className="topo-sidebar">
                <img src={LogoDefault} alt="Meu Banco" title="Meu Banco" className="logo-sidebar"/>

                <ul className="menu">
                    {menu.map((m, index) => (
                        <li key={index+m.path}>
                            <Link to={m.path} className={location.pathname === m.path ? 'selected' : ''}>
                                <ReactSVG src={m.icon} className="icon" />
                                {m.name}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>

            <div className="card-rodape-sidebar">
                <h2>Precisa<br/>de ajuda?</h2>
                <p>Fale com um dos<br/>nossos especialistas</p>
                <a href="#">Contatar</a>
            </div>
        </div>
    )
}