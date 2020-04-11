import React from 'react';
import { getPlantId } from './utils';
import styled from '@emotion/styled';
import plantsList from '../Plants/index';

const generatedPlantId = getPlantId();
const randomPlant = plantsList[generatedPlantId.plantId];

export const Body = styled(randomPlant.body[generatedPlantId.bodyId])`
  position: absolute;
  top: 45%;
  width: 96%;
  height: 35%;
  left: 0;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
export const Eye = styled(randomPlant.eyes[generatedPlantId.eyesId])`
  position: absolute;
  height: 50%;
  z-index: 2;
  width: 45%;
  left: 35.5%;
  top: -11%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
export const Hair = styled(randomPlant.hair[generatedPlantId.hairId])`
  position: absolute;
  top: -18px;
  height: 45%;
  width: 54%;
  z-index: -1;
  left: -18%;
  transform: translate(14px, 10px);
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
export const Head = styled(randomPlant.head[generatedPlantId.headId])`
  height: 100%;
  position: absolute;
  left: 24.5%;
  top: -22%;
  width: 80%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
export const BackLeaves = styled(
  randomPlant.backLeaves[generatedPlantId.backLeavesId],
)`
  position: absolute;
  top: 60%;
  width: 96%;
  height: 30%;
  z-index: -1;
  left: 1px;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;
export const FrontLeaves = styled(
  randomPlant.frontLeaves[generatedPlantId.frontLeavesId],
)`
      position: absolute;
    top: 69%;
    width: 86%;
    height: 30%;
    left: 6px;
    transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
}
`;
export const Pattern = styled(
  randomPlant.patterns[generatedPlantId.patternsId],
)`
  position: absolute;
  height: 15%;
  z-index: 2;
  width: 40%;
  left: 20.5%;
  top: 20%;
  transition: all 1s cubic-bezier(0.43, 0.13, 0.15, 0.99);
`;

export const Plant = styled.div`
  position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-55%, -70%);
  ${'' /* width: 150px; */}
  ${'' /* height: 210px; */}
  width: 16vw;
  height: 20vw;
  max-width: 150px;
  max-height: 210px;

  @media only screen and (max-width: 425px) {
    width: 25vw;
    height: 30vw;
  }
`;

function GrownPlant() {
  return (
    <Plant style={{ top: ' 51%', left: '53%' }}>
      <Body />
      <Eye />
      <Head />
      <Hair />
      <BackLeaves />
      <FrontLeaves />
      <Pattern />
    </Plant>
  );
}

export default GrownPlant;