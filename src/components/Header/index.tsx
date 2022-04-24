import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={logo} alt="logo circular e verde com um cifrão no meio" />
                <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>

    )
}