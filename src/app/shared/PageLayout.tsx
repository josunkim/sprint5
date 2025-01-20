import { VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

type PageLayoutProps = { children: ReactNode };

export const PageLayout: NextPage<PageLayoutProps> = ({ children }) => (
  <VStack w={"full"} h={"full"} gap={0} fontFamily={"Pretendard"}>
    <Header />
    {children}
    <Footer />
  </VStack>
);
