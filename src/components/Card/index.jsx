import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import planoFundo from "../../assets/planoBackground.png";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={planoFundo} />
      <Content>
        <UserInfo>
          <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0ZVu4c6NMy0YA3EIINIpqyqWnp6QKoTI3Q&s" />
          <div>
            <h4>Ronaldo</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para cusro de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade... <strong>Ver Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
export { Card };
