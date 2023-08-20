import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Searchinput";

interface Props {
  onSerch: (searchText: string) => void;
}
export const NavBar = ({ onSerch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSerch={onSerch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
// fed14fccc67d4c669e6a91ed11e52ec5
