import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Trello by React</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background: rgb(32, 109, 109);
  text-align: center;
  height: 55px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  line-height: 50px;
  color: #fff;
  font-style: bold;
`;

