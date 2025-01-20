"use client";
import { Flex, VStack } from "@chakra-ui/react";
import { BestGoodsGrid } from "./components/BestGoodsGrid";
import { useEffect, useState } from "react";
import { PageNation } from "./components/PageNation";
import { GoodsGrid } from "./components/GoodsGrid";
import { GoodsItem } from "./components/GoodsItem";
import { BestGoodsItem } from "./components/BestGoodsItem";

import useProductStore from "./api/api";
import { debounce } from "@/app/shared/util";

const StorePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [bestPageSize, setBestPageSize] = useState<number>(4);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageCount, setPageCount] = useState<number>(1);
  const [serch, setSerch] = useState<{ order: string; keyWord: string }>({
    order: "recent",
    keyWord: " ",
  });

  const {
    Products,
    bestProducts,
    totalPage,
    fetchBestProducts,
    fetchProducts,
  } = useProductStore();

  useEffect(() => {
    const handleResize = debounce(() => {
      setBestPageSize(Math.min(4, Math.floor(window.innerWidth / 300)));
      setPageSize(Math.min(10, Math.floor(window.innerWidth / 240) * 2));
    }, 300);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchBestProducts(1, bestPageSize);
  }, [bestPageSize]);

  useEffect(() => {
    fetchProducts(page, pageSize, serch.order, serch.keyWord);
    setPageCount(Math.ceil(totalPage / pageSize));
  }, [page, pageSize, serch, pageCount]);
  return (
    <VStack maxW={"1200px"} w={"full"} h={"full"}>
      <BestGoodsGrid title="베스트 상품" girdWidth={bestPageSize}>
        {bestProducts.map((row, index: number) => {
          return <BestGoodsItem key={index} {...row} />;
        })}
      </BestGoodsGrid>
      <GoodsGrid
        title="판매 중인 상품"
        girdWidth={pageSize}
        serch={serch}
        setSerch={setSerch}
      >
        {Products.map((row, index: number) => {
          return <GoodsItem key={index} {...row} />;
        })}
      </GoodsGrid>
      <PageNation page={page} setPage={setPage} count={pageCount} />
    </VStack>
  );
};

export default StorePage;
