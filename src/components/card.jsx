import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  text-align: center;
  width: 300px;
  height: 380px;
  margin: 10px;
  border-radius: 20px;
  display: inline-block;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "gray"};
  box-shadow: 2px 2px 5px 0px gray;
`

const Url = styled.img`
  margin: 10px 0;
  width : 280px;
  height: 200px;
  border-radius: 20px;
  content:url(${(props) => props.url});
`

const Title = styled.h1`
  margin: 5px 20px;
  text-align: left;
  color: #171717;
`

const Content = styled.p`
  margin: 5px 20px;
  text-align: left;
  color: #3e3e3e;
`

const Button = styled.button`
  background : linear-gradient(to right, #6c6c6c, #9f9f9f);
  border: none;
  color: #fff;
  border-radius: 20px;
  width: 280px;
  height: 50px;
  font-size: 18px;
  margin: 10px auto;
`
const Card = (props) => {
  return (
    <>
      <BackGround backgroundColor={props.backgroundColor}>
        <Url url={props.url}/>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <Button>{props.action}</Button>
      </BackGround>
    </>
  )
}

export default Card;