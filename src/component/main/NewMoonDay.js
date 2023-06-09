import React from "react";
import styled from "styled-components";
import artistImage from "../../img/common/day1_artist.png";
import newmoon from "../../img/common/new_moon.png";

export default function NewMoonDay() {
  return (
    <>
      <DayInfoBox>
        <Moon>
          <div>
            <img src={newmoon} width={40} />
          </div>
        </Moon>
        <Text>New Moon Day</Text>
        <Artist src={artistImage} />
      </DayInfoBox>
    </>
  );
}

const DayInfoBox = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  width: 267px;
  border-radius: 10px;
  margin: 0 0 auto;
`;

const Moon = styled.div`
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-family: "S-CoreDream-3Light";
  color: white;
`;

const Artist = styled.img`
  margin-top: 15px;
  border-radius: 10px;
  font-family: "S-CoreDream-3Light";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 267px;
  height: 400px;
`;
