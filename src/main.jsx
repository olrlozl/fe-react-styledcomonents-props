import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import Card from "./components/card";

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor='red' boxText='text1'/>
      <Box boxColor='blue' boxText='text2'/>
      <Box boxColor='green' boxText='text3'/>
      <Box boxColor='pink' boxText='text4'/>

      <div>
        <Circle circleColor='pink'/>
        <Circle circleColor='red'/>
        <Circle circleColor='black'/>
        <Circle circleColor='gray'/>
        <Circle circleColor='green'/>
        <Circle circleColor='blue'/>
        <Circle circleColor='orange'/>
      </div>
      
      <Card backgroundColor="#d9e6ff" url="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221227_2%2F1672125940585UtKX0_JPEG%2FZNCc1_141316_1.jpg&type=sc960_832" title="RYAN" content="kakao friends little ryan" action='라이언'/>
      <Card backgroundColor="#ffd9d9" url="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20221227_58%2F1672125943820Xpr7g_JPEG%2F97F1d_141317_7.jpg&type=sc960_832" title="APEACH" content="kakao friends little apeach" action='어피치'/>
      <Card backgroundColor="#fff2d9" url="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.yes24.com%2Fgoods%2F98832296%2FXL&type=sc960_832" title="MUZI" content="kakao friends little muzi" action='무지'/>
      <Card backgroundColor="#d2ffdd" url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDhfMTMy%2FMDAxNTk0MTcyOTIyNzI0.vpWJ8SM4hzAU4D1usZK9qTpcTg0cz8T9nhQ4LRa41Wgg.FBXa9ho-sxJX9Vjec_bXjfpdbt7pxwwLvfvDmRXqhj0g.JPEG.dk3581112%2F2.jpg&type=sc960_832" title="CON" content="kakao friends little con" action='콘'/>
      <Card backgroundColor="#ffe3cb" url="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210901_234%2F1630483622183kQuUd_JPEG%2F124473_1.jpg&type=sc960_832" title="TUBE" content="kakao friends little tube" action='튜브'/>

    </>
  );
};

export default Main;
