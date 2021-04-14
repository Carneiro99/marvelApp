import React, { useCallback, useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import { useDispatch, useStore, useSelector } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  setFavoriteCharacter,
  deleteFavoriteCharacter,
} from '../../store/ducks/characters/actions';
import {
  Container,
  ModalView,
  ChatacterDescription,
  ChatacterName,
  CloseModal,
  ChatacterAvatar,
  InforContainer,
  IconsView,
  FavoriteIcon,
  FavIcon,
} from './styles';

interface ChatacterDescription {
  item: {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  isVisible: boolean;
  closeModal(): void;
  favoriteCharacter(): void;
}

const CharacterDetails: React.FC<ChatacterDescription> = ({
  item,
  isVisible,
  closeModal,
}) => {
  const [isAFavChar, setFavChar] = useState(false);

  const dispatch = useDispatch();

  const favCharacters = useSelector((state) => state.characters.favorites);

  const hideModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const isAFavCharacter =
      favCharacters.filter((favItem: any) => item.id === favItem.id).length > 0;

    if (isAFavCharacter) {
      setFavChar(true);
    } else {
      setFavChar(false);
    }
  }, []);

  const toggleFavoriteCharactere = () => {
    setFavChar(true);
    dispatch(setFavoriteCharacter(item.id));
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <Container>
        <ModalView
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          {item && (
            <>
              <IconsView>
                <CloseModal onPress={hideModal}>
                  <Icon name="arrow-back" color="red" size={26} />
                </CloseModal>
                <FavoriteIcon onPress={toggleFavoriteCharactere}>
                  <FavIcon isAFavChar={isAFavChar} />
                </FavoriteIcon>
              </IconsView>
              <InforContainer>
                <ChatacterAvatar
                  source={{
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }}
                  resizeMode="cover"
                />
                <ChatacterName>{item.name}</ChatacterName>
                <ChatacterName>
                  {item.description || 'hero without description'}
                </ChatacterName>
              </InforContainer>
            </>
          )}
        </ModalView>
      </Container>
    </Modal>
  );
};

export default CharacterDetails;
