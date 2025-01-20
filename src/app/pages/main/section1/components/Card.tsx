import {
  Button,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";
interface CardProps {
  screen: { medium: boolean; small: boolean };
}

const type1: React.FC<CardProps> = ({ screen }) => {
  return (
    <Flex
      {...FlexStyle}
      flexDirection={screen.medium ? "column" : "row"}
      align={screen.medium ? "center" : "end"}
      justifyContent={screen.medium ? "end" : "center"}
    >
      <VStack
        maxW={"357px"}
        w={"full"}
        h={"full"}
        alignSelf={"center"}
        pr={"7px"}
      >
        <Text {...TextStyle}>일상의 모든 물건을 거래해 보세요</Text>
        <Button w={"full"} backgroundColor={"#3692FF"} borderRadius={"40px"}>
          구경하러 가기
        </Button>
      </VStack>
      <Image {...ImageStyle} src={"/assets/Img_home_top.png"} alt="" />
    </Flex>
  );
};

const type2: React.FC<CardProps> = ({ screen }) => {
  return (
    <Flex
      {...FlexStyle}
      flexDirection={screen.medium ? "column" : "row"}
      align={screen.medium ? "center" : "end"}
      justifyContent={screen.medium ? "end" : "center"}
    >
      <VStack maxW={"364px"} w={"full"} h={"full"} alignSelf={"center"} pr={69}>
        <Text {...TextStyle}>믿을 수 있는 판다마켓 중고 거래</Text>
      </VStack>
      <Image {...ImageStyle} src={"/assets/Img_home_bottom.png"} alt="" />
    </Flex>
  );
};

export const Card = { type1, type2 };

const FlexStyle: FlexProps = {
  minH: "540px",
  w: "full",
  h: "full",
  backgroundColor: "#CFE5FF",
};
const ImageStyle: ImageProps = {
  maxWidth: "746px",
  maxH: "340px",
  w: "full",
  h: "full",
};
const TextStyle: TextProps = {
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "56px",
};
