import { View } from "react-native";
import styled from "styled-components";
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 16px 24px;
`;

export const Content = styled(View)`
    flex: 1;
    justify-content: center;
  
`;

export const Icon = styled(UsersThree)`
    color: ${({ theme }) => theme.COLORS.GREEN_500};
    align-self: center
`;

