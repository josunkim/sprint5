"use client";
import { NextPage } from "next";
import { Card } from "./components/Card";
import { useMediaQuery } from "@chakra-ui/react";

interface Section1Props {
  type: string;
}

const Section1: NextPage<Section1Props> = ({ type }) => {
  const [mediumScreen] = useMediaQuery(["(max-width:744px)"], {
    ssr: true,
    fallback: [false],
  });

  const [smallScreen] = useMediaQuery(["(max-width:375px)"], {
    ssr: true,
    fallback: [false],
  });
  const screen = { medium: mediumScreen, small: smallScreen };
  return type === "type1" ? (
    <Card.type1 screen={screen} />
  ) : (
    <Card.type2 screen={screen} />
  );
};
export default Section1;
