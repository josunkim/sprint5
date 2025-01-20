"use client";
import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { CustomInput } from "./components/CustomInput";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Registration: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [desctiption, setDesctiption] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [tags, setTags] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [btnDisable, setBtnDisable] = useState<boolean>(true);

  const titleValidate = (
    state: string,
    setCheck: Dispatch<SetStateAction<boolean>>
  ) => {
    if (state.length < 1) {
      setCheck(false);
      return;
    }
    if (state.length >= 10) {
      setCheck(false);
      return;
    }
    setCheck(true);
  };
  const descriptionValidate = (
    state: string,
    setCheck: Dispatch<SetStateAction<boolean>>
  ) => {
    if (state.length < 10) {
      setCheck(false);
      return;
    }
    if (state.length > 100) {
      setCheck(false);
      return;
    }
    setCheck(true);
  };
  const priceValidate = (
    state: number,
    setCheck: Dispatch<SetStateAction<boolean>>
  ) => {
    if (typeof state !== "number") {
      setCheck(false);
      return;
    }
    setCheck(true);
  };
  const tagValidate = (
    state: string,
    setCheck: Dispatch<SetStateAction<boolean>>
  ) => {
    if (state.length > 5) {
      setCheck(false);
      return;
    }
    setCheck(true);
  };
  const addTagList = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (tags.trim() !== "") {
        setTagList((prevTagList) => [...prevTagList, tags]); // 이전 배열 유지하며 새 태그 추가
        setTags(""); // 입력값 초기화
      }
    }
  };
  const btnValide = () => {
    if (title.length < 1 || title.length > 10) {
      return setBtnDisable(true);
    }
    if (desctiption.length < 10 || title.length > 100) {
      return setBtnDisable(true);
    }
    if (typeof price !== "number" || isNaN(price)) {
      return setBtnDisable(true);
    }
    setBtnDisable(false);
  };
  useEffect(() => {
    btnValide();
  }, [title, desctiption, price]);
  return (
    <VStack maxW={1200} w={"full"} p={26} gap={6}>
      <HStack w={"full"} justifyContent={"space-between"}>
        <Text fontSize={"20px"} fontWeight={700}>
          상품 등록하기
        </Text>
        <Button
          px={23}
          py={3}
          backgroundColor={"#3692FF"}
          disabled={btnDisable}
          borderRadius={8}
          _disabled={{
            bg: "#9CA3AF", // 비활성화 배경색
            color: "#FFFFFF", // 비활성화 텍스트 색상
            cursor: "not-allowed", // 비활성화 상태의 커서
          }}
        >
          등록
        </Button>
      </HStack>
      <VStack w={"full"} h={"full"} gap={8}>
        <CustomInput
          title="상품명"
          placeholder="상품명을 입력해주세요"
          state={title}
          setState={setTitle}
          errorMsg={"10자 이내로 입력해주세요"}
          validate={titleValidate}
        />
        <CustomInput
          title="상품 소개"
          placeholder="상품 소개를 입력해주세요"
          state={desctiption}
          setState={setDesctiption}
          errorMsg={"10자 이상 입력해주세요"}
          validate={descriptionValidate}
        />
        <CustomInput
          title="판매가격"
          placeholder="판매 가격을 입력해주세요"
          state={price}
          setState={setPrice}
          errorMsg={"숫자로 입력해주세요"}
          validate={priceValidate}
        />
        <CustomInput
          title="태그"
          placeholder="태그를 입력해주세요"
          state={tags}
          setState={setTags}
          errorMsg={"5글자 이내로 입력해주세요"}
          validate={tagValidate}
          hotkeyEvent={addTagList}
        />
        <HStack w={"full"} h={"full"}>
          {tagList.map((data, index) => {
            return (
              <HStack
                key={index}
                py={2}
                px={4}
                fontWeight={400}
                fontSize={"16px"}
                backgroundColor={"#F3F4F6"}
              >
                #{data}
                <Image src="/assets/ic_X.png" alt="" cursor={"pointer"} />
              </HStack>
            );
          })}
        </HStack>
      </VStack>
    </VStack>
  );
};
export default Registration;
