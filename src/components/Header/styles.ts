import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';

const baseWidth = scale(350);
const baseHeight = verticalScale(200);

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  width: ${baseWidth};
  height: ${baseHeight};
`;

export const LogoImage = styled.Image`
  width: 190px;
  height: 140px;
  margin-top: 10px;
`;

export const Underline = styled.View`
  width: 100%;
  margin: 10px;
  height: 1px;
  background-color: #ed2400;
`;
