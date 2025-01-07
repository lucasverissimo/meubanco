
import './styles.scss'

import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"

import { ResumoFinanceiro, ResumoProps } from "./components/ResumoFinanceiro"
import { ListaCompras } from './components/ListaCompras';
import { Cartoes } from './components/Cartoes';

const resumo_financeiro:Array<ResumoProps> = [
    {
        layout: 1,
        valor: 3547.67,
        texto: 'Gasto esse mês',
        info_adicional: '+23%',
    },
    {
        layout: 1,
        valor: 7648.48,
        texto: 'Recebidos esse mês',
        info_adicional: '+6%',
    },
    {
        layout: 2,
        valor: 9532.62,
        texto: 'Investimentos',
        info_adicional: '+R$ 242,13 (+2.54%)',
    },
    {
        layout: 3,
        valor: 9532.62,
        texto: 'Cartões',
        info_adicional: '',
    },
];

export function Dashboard(){
    return(
        <main className="main">
            <div className="columnLeft">
                <Sidebar />
            </div>
            
            <div className="columnRight">
                <Header />
                <div className="conteudo">
                    <div className="lista-resumo-financeiro">
                        {resumo_financeiro.map((resumo, index) => (
                            <ResumoFinanceiro {...resumo} key={index} />
                        ))}
                        <div className="card-extra">
                            <span>+</span>
                            <h3>configurar<br/>atalhos</h3>
                        </div>
                    </div>
                    
                    <div className="cartoes-lista-compras">
                        <Cartoes />
                        <ListaCompras />
                    </div>
                </div>                
            </div>
        </main>
    )
}