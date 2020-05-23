import React from "react";
import styled from "styled-components";

export default function Divider() {
  return <DividerContainer />;
}

const DividerContainer = styled.hr`
  background-color: rgba(9, 30, 66, 0.13);
  border: 0;
  height: 1px;
`;
