/** @format */

// This is HeroSection component, Main top section of website

import styled, { keyframes } from "styled-components";
import Pink from "../../assets/blobPink.png";
import White from "../../assets/blob white.png";
import Purple from "../../assets/blob purple.png";
import Arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";

const move = keyframes`

`;
const Herosection = styled.div`
  color: var(--white);
  width: 100vw;
  height: 45vw;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  position: relative;
`;
const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
`;
const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
`;
const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;
const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;
const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;
const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 28vw);
  z-index: 7;
  height: auto;
`;
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
`;
const CTA = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: calc(0.5rem + 0.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 1.5rem;
  }
`;

const HeroSection = () => {
  return (
    <Herosection>
      <Blobs>
        <PinkBlob>
          <img src={Pink} alt="Pink-blob" width="400" height="400" />
        </PinkBlob>
        <WhiteBlob>
          <img src={White} alt="White-blob" width="400" height="400" />{" "}
        </WhiteBlob>
        <PurpleBlob>
          <img src={Purple} alt="Purple-blob" width="400" height="400" />{" "}
        </PurpleBlob>
      </Blobs>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle /> <span>We Build Web</span>
          </Topic>
          <Title>Transforming your digital presence</Title>
          <SubText>
            we help fast growing companies build award winning website
          </SubText>
          <CTA>
            Get in touch &nbsp;{" "}
            <img src={Arrow} alt="CTA" width="400" height="400" />
          </CTA>
        </LeftBlock>
        <MobileSvg src={Mobile} alt="Mobile Svg" width="400" height="400" />
      </MainContent>
    </Herosection>
  );
};

export default HeroSection;
