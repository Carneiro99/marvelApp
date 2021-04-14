import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { HerosInterface } from './types';

export const Container = styled.SafeAreaView`
  background-color: #ffff;
  flex: 1;
`;

export const HerosProvider = styled(
  FlatList as new () => FlatList<HerosInterface>,
)`
  padding: 32px 24px 16px;
`;
