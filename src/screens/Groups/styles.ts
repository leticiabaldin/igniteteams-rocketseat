import styled from "styled-components/native"; // Use 'styled-components/native' para React Native
import { View, Text } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px
`;
