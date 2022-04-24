import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pastel</td>
                        <td className="deposit">+R$5</td>
                        <td>Comida</td>
                        <td>20/04/2022</td>
                    </tr>
                    <tr>
                        <td>Pastel</td>
                        <td className="withdraw">-R$5</td>
                        <td>Comida</td>
                        <td>20/04/2022</td>
                    </tr>
                    <tr>
                        <td>Pastel</td>
                        <td className="deposit">+R$5</td>
                        <td>Comida</td>
                        <td>20/04/2022</td>
                    </tr>
                    <tr>
                        <td>Pastel</td>
                        <td className="withdraw">-R$5</td>
                        <td>Comida</td>
                        <td>20/04/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}