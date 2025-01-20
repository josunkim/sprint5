import { NextPage } from "next";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import { VStack } from "@chakra-ui/react";

const MainPage: NextPage = () => {
  const section2List = [
    {
      label: "Hot item",
      title: "인기 상품을 확인해 보세요",
      description: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요",
      image: "/assets/hot_item.png",
      sort: "row-reverse",
    },
    {
      label: "Search",
      title: "구매를 원하는 상품을 검색하세요",
      description: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
      image: "/assets/search_item.png",
      sort: "row",
    },
    {
      label: "Register",
      title: "판매를 원하는 상품을 등록하세요",
      description: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
      image: "/assets/create_item.png",
      sort: "row-reverse",
    },
  ];

  return (
    <VStack w={"full"} h={"full"} gap={"28px"}>
      <Section1 type={"type1"} />
      {section2List.map((d, index) => {
        return <Section2 key={index} data={d} />;
      })}
      <Section1 type={"type2"} />
    </VStack>
  );
};
export default MainPage;
