import React from "react";
import styled from "styled-components";

export default function Tag(props) {
  return <TagContainer>{props.text}</TagContainer>;
}

const TagContainer = styled.span`
  display: inline-block;
  background-color: #000000;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding: 2px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;
