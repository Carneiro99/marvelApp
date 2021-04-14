import React, { useEffect, useState, useCallback } from 'react';
import Character from '../Character';
import { Container, HerosProvider } from './styles';
import CharacterDetails from '../CharacterDetails';
import api from '../../services';

interface ParamsData {
  limit: number;
  orderBy: string;
}

interface CharacterData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const HerosList: React.FC = () => {
  const [character, setCharacter] = useState<CharacterData>();
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const [modalCharacter, setModalCharacter] = useState(false);

  const loadCharacters = async (): Promise<void> => {
    const params: ParamsData = {
      limit: 10,

      orderBy: 'name',
    };
    const response = await api.get('characters', { params });

    setCharacters(response.data.data.results);
  };

  const showCharacteresDetails = useCallback((item) => {
    setCharacter(item);
    setModalCharacter(true);
  }, []);

  const closeModalCharacter = useCallback(() => {
    setModalCharacter(false);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <Container>
      <HerosProvider
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Character item={item} onPress={() => showCharacteresDetails(item)} />
        )}
      />
      <CharacterDetails
        item={character}
        isVisible={modalCharacter}
        closeModal={closeModalCharacter}
      />
    </Container>
  );
};

export default HerosList;
