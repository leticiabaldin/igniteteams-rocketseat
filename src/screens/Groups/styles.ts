import styled from "styled-components/native"; 
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // dentro da lib de navigation

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 64px 24px 24px 24px;
`;
