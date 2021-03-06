import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';
import { animated } from 'react-spring';
import LeftCloudSvg from '../../assets/left_cloud.svg';
import RightCloudSvg from '../../assets/right_cloud.svg';
import LighteningSvg from '../../assets/GameAssets/lightening.svg';
import SuccessLightsSvg from '../../assets/GameAssets/success_lights.svg';
import { Link } from 'gatsby';

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Header = styled(animated.section)`
  position: absolute;
  top: 0;
  height: 10%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StorylineHeader = styled(Header)`
  height: -10%;
  z-index: 200;
`;

export const Footer = styled(animated.section)`
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
  background-color: black;
  z-index: 200;
`;

export const GameContainer = styled(animated.section)`
  width: 100%;
  height: 80%;
  position: absolute;
  overflow-x: hidden;
  top: 10%;
  left: 0;
  background: radial-gradient(
    198.67% 198.67% at 53.06% -50.22%,
    #01181d 53.32%,
    #20657b 100%
  );
  z-index: 1;
  overflow-y: hidden;
`;

export const StoryLineContainer = styled(GameContainer)`
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
`;

export const Instructions = styled.div`
  display: none;
  position: absolute;
  left: 40%;
  top: 30px;
  width: 20%;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  text-align: center;
  padding: 1rem;
  color: #ffffff;
`;

export const PlantContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 225px;
  z-index: 7;
`;

export const Zombie = styled.div`
  position: absolute;
  left: 100%;
  z-index: 5;
  opacity: 1;
  width: 143px;
  height: 223px;
  background: url('images/zombiewalking.svg');
  transition: opacity 0.5s ease-out;
`;

export const deadZombie = styled.div`
  position: absolute;
  background: url('images/zombiewalking.svg');
  opacity: 0;
  z-index: 5;
`;

export const moveLeft = keyframes`
  0% { transform: translateX(-20%); opacity: 0.9; }
  100% { transform: translateX(-100vw); opacity: 0.9; }
`;
export const moveRight = keyframes`
  0% { transform: translateX(10%); opacity: 0.9; }
  100% { transform: translateX(100vw); opacity: 0.9; }
`;

const thunder = keyframes`

  0% { opacity: 1; } 
    2% { opacity: 0; }
    3% { opacity: 0.6; }
    4% { opacity: 0.2; }
    6% { opacity: .9; } 
    100% { opacity: 1; }
`;

const slideInFromTop = keyframes`
0% { transform: translateY(-50vh); }
100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const LeftCloud = styled(LeftCloudSvg)`
  animation-name: ${moveRight};
  animation-duration: 400s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  z-index: -1;
  left: 10px;
  right: 10;
  top: 5rem;
`;

export const RightCloud = styled(RightCloudSvg)`
  animation-name: ${moveLeft};
  animation-duration: 300s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  z-index: -1;
  right: 10px;
  right: 10;
  top: 10rem;
`;

// animation-name: ${thunder};
// animation-duration: 10s;
// animation-iteration-count: 1;
// animation-timing-function: ease-out;
// animation-delay: 2s;

export const Lightening = styled(LighteningSvg)`
  position: absolute;
  z-index: 7;
  left: calc(50% - 220px);
  top: -10%;
  animation: ${thunder} 10s ease-out 1 1s,
    ${slideInFromTop} 0.25s ease 1 alternate;
`;

export const StartSymbolContainer = styled.div`
  position: absolute;
  z-index: 7;
  left: 37.5%;
  opacity: 0;
  top: 30%;
  width: 20%;
  cursor: pointer;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin: 0 10px;

  > span {
    margin-left: 6px;
    display: inline-block;
  }

  :hover {
    color: #fff;
  }

  ${'' /* > svg {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
  } */}
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.43, 0.13, 0.15, 0.99);
  z-index: 14;
  opacity: 0;
`;

export const ModalMask = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 15;
  position: absolute;
  opacity: 0.5;
`;

export const Modal = styled.div`
  opacity: 1;
  width: 50%;
  height: 90%;
  background-color: #080e0e;
  z-index: 16;
  position: absolute;
  left: 25%;
  top: 5%;
  text-align: center;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const WelcomeModalContainer = styled(Modal)`
  height: 60%;
  top: 20%;

  @media only screen and (max-height: 700px) {
    height: 70%;
    top: 15%;
  }
`;

export const GameModal = styled(Modal)`
  height: 75%;
  top: 12.5%;

  @media only screen and (max-height: 700px) {
    height: 79%;
    top: 10.5%;
  }
`;

export const GameEndModal = styled(Modal)`
  @media only screen and (max-height: 700px) {
    height: 100%;
    top: 1%;
  }
`;

export const ModalBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 45%;
  left: 0;
  bottom: 0;
  background-color: #060707;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow-y: auto;
`;

export const Heading = styled.h1`
  font-family: Sigmar One;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 77px;
  text-align: center;
  letter-spacing: -0.1em;
  color: #2897ff;
  margin: 0;
`;

export const SubHeading = styled.p`
  text-align: center;
  color: #ffffff;
`;

export const SuccessLights = styled(SuccessLightsSvg)`
  height: 100%;
  width: 100%;
`;

export const ProceedLink = styled.button`
  padding: 18px 30px;
  background: #2897ff;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  letter-spacing: 2px;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.43, 0.13, 0.15, 0.99);
  width: inherit;

  :before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    height: 100%;
    width: 100%;
    background: #2897ff;
    transform: scale(0.9);
    filter: blur(15px);
    opacity: 0.5;
    z-index: -1;
    transition: all 0.4s cubic-bezier(0.43, 0.13, 0.15, 0.99);
  }

  :hover {
    box-shadow: 0 0 0 0.4rem rgba(40, 151, 255, 0.25);
  }

  :hover:before {
    top: 20px;
  }

  :active {
    transform: scale(0.8);
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  background: #1b2121;
  margin: 20px;
  color: #fff;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 0 0.25rem rgb(59, 66, 66);
    cursor: pointer;
  }

  @media only screen and (max-height: 700px) {
    margin: 20px 0 0 0;
  }
`;
