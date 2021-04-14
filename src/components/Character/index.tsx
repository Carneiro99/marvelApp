import React from 'react';
import {
  ChatacterContainer,
  ChatacterAvatar,
  ChatacterDescription,
  ChatacterInfo,
  ChatacterName,
} from './styles';

interface ChatacterItem {
  item: {
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  onPress(): void;
}

const Character: React.FC<ChatacterItem> = ({ item, onPress }) => {
  return (
    <ChatacterContainer onPress={onPress}>
      <ChatacterAvatar
        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
        resizeMode="cover"
      />

      <ChatacterInfo>
        <ChatacterName>{item.name}</ChatacterName>
        <ChatacterDescription numberOfLines={3}>
          {item.description ||
            'Fictional character that appears in American comics published by Marvel'}
        </ChatacterDescription>
      </ChatacterInfo>
    </ChatacterContainer>
  );
};

export default Character;
