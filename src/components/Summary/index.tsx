import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="seta virada para cima, entradas" />
                </header>
                <strong>${}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outComeImg} alt="seta virada para baixo, saídas" />
                </header>
                <strong>${}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>${}</strong>
            </div>
        </Container>
    )
}
