
import './styles.scss'

export interface ResumoProps {
    layout: number
    valor: number
    texto: string
    info_adicional: string
}

export function ResumoFinanceiro({info_adicional, layout, texto, valor}: ResumoProps){

    const valor_formatado = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);

    return (
        <div className="bloco-resumo-financeiro">
            {layout === 1 && (
                <span className="valor-porcentagem">{info_adicional}</span>
            )}

            {layout === 2 && (
                <span className="valor-mix">{info_adicional}</span>
            )}

            {layout === 3 && (
                <span className="">{info_adicional}&nbsp;</span>
            )}            

            <div className="info-resumo">
                <p>{texto}</p>
                <h3>{valor_formatado}</h3>
            </div>
        </div>
    );
}