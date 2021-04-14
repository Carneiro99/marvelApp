import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ChatacterContainer = styled(RectButton)`
  background: #d3d3d3;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ChatacterAvatar = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 40px;
`;

export const ChatacterInfo = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const ChatacterName = styled.Text`
  font-size: 18px;
  color: #1c1c1c;
`;

export const ChatacterDescription = styled.Text`
  color: #1c1c1c;
  width: 200px;
  height: 60px;
  margin-top: 10px;
  margin-right: 10px;
`;
