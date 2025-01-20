"use client";
import { Input, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CustomInputProps {
  title: string;
  placeholder: string;
  state: string | number;
  setState: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
  errorMsg: string;
  validate: (
    state: string | number,
    setCheck: Dispatch<SetStateAction<boolean>>
  ) => void;
  hotkeyEvent: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const CustomInput: React.FC<CustomInputProps> = ({
  title,
  placeholder,
  state,
  setState,
  errorMsg,
  validate,
  hotkeyEvent,
}) => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    validate(state, setCheck);
  }, [state]);

  const numbers = (e) => {
    const value = e.target.value;
    setState(Number(value));
  };
  return (
    <VStack w={"full"} h={"full"} gap={4}>
      <Text w={"full"} fontSize={"18px"} fontWeight={700}>
        {title}
      </Text>
      <Input
        type={title === "판매가격" ? "number" : "text"}
        h={title === "상품 소개" ? 282 : "full"}
        px={6}
        py={4}
        backgroundColor={"#F3F4F6"}
        borderColor={check ? "" : "#F74747"}
        value={state}
        placeholder={placeholder}
        onChange={(e) => {
          title === "판매가격" ? numbers(e) : setState(e.target.value);
        }}
        onKeyDown={title === "태그" ? hotkeyEvent : undefined}
      />
      {!check && (
        <Text
          w={"full"}
          fontSize={"14px"}
          fontWeight={600}
          pl={4}
          color={"#F74747"}
        >
          {errorMsg}
        </Text>
      )}
    </VStack>
  );
};
