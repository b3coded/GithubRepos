import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  border-width: 1px;
  width: 100%;
  background: ${({theme}) => theme.primary};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.text};
  font-weight: bold;
  font-size: 18px;
`;
