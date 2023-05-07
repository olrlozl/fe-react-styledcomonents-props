import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.circleColor)};
  display: inline-block;
  border-radius: 50%;
  margin: 10px;
`

const Circle = (props) => {
  return (
    <>
      <CircleEach circleColor={props.circleColor}></CircleEach>
    </>
  )
}

export default Circle;