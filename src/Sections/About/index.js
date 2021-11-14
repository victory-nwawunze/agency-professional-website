/** @format */

// This is About component, It will contain about us info.
import wave from "../../assets/waves.svg";
import hand from "../../assets/hand.svg";
import styled from "styled-components";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;
const Hands = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;
`;
const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
`;
const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding:bottom:5rem;
`;
const AboutText = styled.div`
  position: relative;
  width: 50%;
`;
const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
`;
const Text = styled.h4``;
const Circle = styled.span``;
const About = () => {
  return (
    <AboutSection>
      <Waves src={wave} alt="waves" width="400" height="400" />
      <Hands>
        <img src={hand} alt="Hand" width="400" height="400" />
      </Hands>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="Hand" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="Hand" width="400" height="400" />
            </Human>
            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
            <div>
              <Circle />
              <Circle />
              <Circle />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
