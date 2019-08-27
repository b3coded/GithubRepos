import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({theme}) => theme.lightBackground};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 32;
  font-weight: bold;
  color: ${({theme}) => theme.primary};
  margin-bottom: 20;
`;
