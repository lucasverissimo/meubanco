import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Carteira(){
    return(
         <main className="main">
            <div className="columnLeft">
                <Sidebar />
            </div>
            
            <div className="columnRight">
                <Header />
                <div className="placeholder-navegacao">
                    <h2>Placeholder de navegação</h2>
                </div>
            </div>
        </main>
    )
}