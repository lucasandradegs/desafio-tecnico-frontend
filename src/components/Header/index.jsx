import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <a href="#">Shoppers</a>
        <Profile>
            <div>
                <h3>Bem vindo,</h3>
                <strong>Lucas Andrade</strong>
                <span>sair</span>
            </div>
            <img src="https://github.com/lucasandradegs.png" alt="user picute" />
        </Profile>
        </Container>
    )
}