import { Link } from 'react-router-dom';
import bannerImage from '../../assets/imagem_fundo.png';
import { Button } from '../../components/Button';
import { Header} from "../../components/Header";
import { Container,Column,Title,TitleHightLight} from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
        <Header  autenticado={true}/>
        <Container>
            
            <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            </Column>

            <Column flex={1}>
            <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
            <UserInfo percentual={86} nome="Ronaldo" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s'/>

            <UserInfo percentual={79} nome="Bruno" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s'/>

            <UserInfo percentual={75} nome="Samantha" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s'/>

            <UserInfo percentual={62} nome="Marcia" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s'/>

            <UserInfo percentual={58} nome="Cleiton" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s'/>
            </Column >
        </Container>
        </>
    )
}
export {Feed};