import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(52, 52, 52, 0.8);
`;

export const ModalView = styled.View`
  width: 85%;
  background-color: white;
  width: 90%;
  height: 80%;
  padding: 15px;
`;

export const IconsView = styled.View`
  flex-direction: row;
`;
export const InforContainer = styled.View`
  align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
  justify-content: flex-start;
  color: #000;
`;
export const FavoriteIcon = styled.TouchableOpacity`
  justify-content: flex-end;
  padding-left: 80%;
  color: #000;
`;

export const ChatacterName = styled.Text`
  font-size: 18px;
  color: #1c1c1c;
`;

export const ChatacterDescription = styled.Text`
  color: #1c1c1c;
`;

export const ChatacterAvatar = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

export const FavIcon = styled(Icon).attrs((props) => ({
  name: props.isAFavChar ? 'star-rate' : 'star-border',
  color: '#ff4040',
  size: 26,
}))``;
