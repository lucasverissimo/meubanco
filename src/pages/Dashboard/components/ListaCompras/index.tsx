import './styles.scss'


const lista_compras = [
    {
        data: '03/jan',
        compras: [
            {local: 'Bazar Mizutu', tipo: 'Compra no crédito', valor: 300.10},
            {local: 'Lanchonete Dez', tipo: 'Compra no débito', valor: 125.00},
            {local: 'Loja Tatame Velho', tipo: 'Compra no débito', valor: 700.00},
        ]
    },
    {
        data: '02/jan',
        compras: [
            {local: 'Bazar Mizutu', tipo: 'Compra no débito', valor: 12.00},
            {local: 'Lanchonete Dez', tipo: 'Compra no débito', valor: 85.00},
            {local: 'Loja Tatame Velho', tipo: 'Compra no débito', valor: 200.00},
        ]
    },
    {
        data: '01/jan',
        compras: [
            {local: 'Restaurante Italiano', tipo: 'Compra no débito', valor: 300.00},
        ]
    },
];

export function ListaCompras(){

    function valor_monetario(valor: number){
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }
    

    return(
        <div className="lista-ultimas-compras">
            <h2>Últimas compras</h2>

            <div className="lista-compras">
                {lista_compras.map(({compras, data}, index) => (
                    <div className="bloco-data" key={index+data}>
                        <h3>{data}</h3>
                        <ul className="lista-detalhada">
                            {compras.map((info, index2) => (
                                <li key={index2+info.local}>
                                    <div className="info-compra">
                                        <h4>{info.local}</h4>
                                        <span>{info.tipo}</span>
                                    </div>
                                    <div className="valor-compra">
                                       {valor_monetario(info.valor)}
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                ))}
                
            </div>
            
            <a href="#" className="btn-ver-extrato">Ver Extrato</a>
        </div>
    )
}