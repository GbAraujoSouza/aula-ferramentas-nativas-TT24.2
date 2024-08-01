import { styled } from "styled-components/native";

interface NavButtonProps {
  bgColor: string;
}

export const Container = styled.View`
  flex: 1;
  display: flex;
  backgroundColor: #303446;
  alignItems: center;
  justifyContent: center;
  gap: 100px;
  color: blue;
`
export const NavButton = styled.Pressable<NavButtonProps>`
  backgroundColor: ${props => props.bgColor};
  height: 50px;
  width: 150px;
  paddingHorizontal: 10px;
  borderRadius: 8px;
  alignItems: center;
  justifyContent: center;
`

export const NavButtonText = styled.Text`
  font-size: 24px;
  color: 
`

