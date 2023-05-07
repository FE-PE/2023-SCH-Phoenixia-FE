import styled from "styled-components";

export function BoothListBox({ booth }) {
  return (
    <>
      <Container>
        <Content>
          <BoothImage src={booth.image}></BoothImage>
          <Info>
            <Title>{booth.name}</Title>
            <Theme>{booth.theme}</Theme>
          </Info>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 10px;
  height: 130px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  font-family: "Pretendard-Bold";
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const BoothImage = styled.img`
  width: 90px;
  margin-right: 20px;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  font-family: "Pretendard-Black";
`;

const Theme = styled.div`
  border: 1px solid black;
  padding: 5px;
  font-size: 13px;
  color: #777777;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  padding: 5px 10px 5px 10px;
`;
