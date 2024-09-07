import React from "react";
import logo from "../../assets/logo-dio 1.png";
import { Button } from "../Button";
import {
  Container,
  Row,
  Column,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>

            {autenticado ? (<UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s"/>) :(
                <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
                </>
            ) }
          
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
