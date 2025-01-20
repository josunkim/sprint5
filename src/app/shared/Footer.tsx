"use client";
import {
  HStack,
  Image,
  Link,
  StackProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const images: { image: string; link: string }[] = [
  {
    image: "/assets/ic_facebook.png",
    link: "https://www.facebook.com/codeit.kr/",
  },
  { image: "/assets/ic_twitter.png", link: "https://x.com/codeitkr" },
  {
    image: "/assets/ic_youtube.png",
    link: "https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg",
  },
  {
    image: "/assets/ic_instagram.png",
    link: "https://www.instagram.com/codeit_kr/",
  },
];

export const Footer: React.FC = () => {
  const [mediumScreen] = useMediaQuery(["(max-width:744px)"], {
    ssr: true,
    fallback: [false],
  });

  const [smallScreen] = useMediaQuery(["(max-width:375px)"], {
    ssr: true,
    fallback: [false],
  });
  return (
    <HStack
      {...FooterStyled}
      px={mediumScreen ? 6 : smallScreen ? 4 : 200}
      whiteSpace={mediumScreen ? "auto" : "nowrap"}
    >
      <Text>©codeit - 2024</Text>
      <HStack>
        <Link color={"#E5E7EB"}>Privacy Policy</Link>
        <Link color={"#E5E7EB"}>FQA</Link>
      </HStack>
      <HStack gap={3}>
        {images.map((row, index) => {
          return (
            <Link w={5} h={5} key={index} target="_blank" href={row.link}>
              <Image w={5} h={5} src={row.image} alt={row.link} />
            </Link>
          );
        })}
      </HStack>
    </HStack>
  );
};
const FooterStyled: StackProps = {
  w: "full",
  h: "full",
  bg: "#111827",
  justifyContent: "space-between",
  color: "#9CA3AF",
  fontWeight: 400,
  textAlign: "center",
  py: 8,
  whiteSpace: "nowrap",
};
