import React from "react";
import { Circle, Text, VStack } from "@chakra-ui/react";

export default function EconomyTextCircle({title,subTitle,textColor, bgColor, radius, marginHori, marginVer }) {
  return (
    <Circle bg={bgColor} w={radius} h={radius} marginX={marginHori} marginY = {marginVer}>
      <VStack>
        <Text color={textColor} fontSize="xl">
          {title}
        </Text>
        <Text color={textColor} fontSize="sm" align="center">
          {subTitle}
        </Text>
      </VStack>
    </Circle>
  );
}
