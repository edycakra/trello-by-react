import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Container>&copy; Edycakra Sinaga - 2020</Container>;
}

const Container = styled.div`
  padding: 18px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(32, 109, 109);
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
`;
