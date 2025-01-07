import './styles.scss'

import CartaoExemplo from '../../../../assets/exemplo-cartao.svg'

export function Cartoes(){
    return(
        <div className="bloco-cartao">
            <h2>Cartões</h2>
            

            <div className="colunas-info-cartao">
                <div className="dados-cartao">               
                    <img src={CartaoExemplo} alt="Cartão exemplo" title="Cartão exemplo" />
                    <div className="limites">
                        <div className="barra-limite"></div>
                        <div className="info-limite">
                            <span>Limite mensal</span>
                            <span>R$ 300/3.000</span>
                        </div>
                    </div>
                </div>
                <div className="info-valores">
                    <h2>
                        <span>Limite disponível</span>
                        R$ 3.000,00
                    </h2>

                    <div className='ultima-compra'>
                        <h3>Última compra</h3>
                        <div className='valor-ultima-compra'>
                            <span>Bazar Mituzi</span>
                            <span>R$ 300,00</span>
                        </div>
                    </div>

                    <a href="#" className="btn-mais-detalhes">Mais detalhes</a>
                </div>
            </div>

        </div>
        
    )
}