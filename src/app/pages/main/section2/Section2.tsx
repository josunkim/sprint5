"use client";
import {
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";

interface Section2Props {
  data: {
    label: string;
    title: string;
    description: string;
    image: string;
    sort: string;
  };
}

const Section2: NextPage<Section2Props> = ({ data }) => {
  const [mediumScreen] = useMediaQuery(["(max-width:744px)"], {
    ssr: true,
    fallback: [false],
  });

  const [smallScreen] = useMediaQuery(["(max-width:375px)"], {
    ssr: true,
    fallback: [false],
  });
  return (
    <Flex
      w={"full"}
      maxH={"720px"}
      h={"full"}
      justify={"center"}
      p={mediumScreen ? 6 : 0}
      py={mediumScreen ? 0 : 110}
    >
      <HStack
        w={"988px"}
        h={"full"}
        flexDir={mediumScreen ? "column-reverse" : data.sort}
        flexDirection={
          mediumScreen && data.sort === "row-reverse" ? "column" : ""
        }
        gap={16}
        backgroundColor={"#FCFCFC"}
      >
        <VStack
          w={"full"}
          textAlign={data.sort === "row-reverse" ? "left" : "right"}
          gap={4}
        >
          <Text w={"full"} fontWeight={700} color={"#3692FF"}>
            {data.label}
          </Text>
          <Text fontSize={"40px"} fontWeight={700}>
            {data.title}
          </Text>
          <Text fontSize={"24px"} fontWeight={500}>
            {data.description}
          </Text>
        </VStack>
        <Image w={"full"} h={"full"} src={data.image} alt="" />
      </HStack>
    </Flex>
  );
};
export default Section2;
