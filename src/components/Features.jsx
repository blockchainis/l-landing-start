import {
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import walking from "@assets/image/walking.png"
import location from "@assets/image/location.png"
import route_1 from "@assets/image/route_1.png"

const Feature = ({ text }) => {
  return (
    <Stack direction={"row"} align={"center"}>
     
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Flex maxW={"5xl"} py={12} align={"center"} justify={"center"}>
      <Box spacing={10} align={"center"} justify={"center"}>
        <Stack spacing={4}>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={"gray.300"}
              />
            }
          >
            <Flex justify={"center"}>
              <Image
                src={location}
                w={"80px"}
                h={"80px"}
                mr={8}
                rounded={"md"}
                alt={"feature image"}
              />
              <Feature text={"원하는 루트를 선택하고,"} />
            </Flex>
            <Flex justify={"center"}>
              <Feature text={"루트를 따라 포인트에 도착합니다."} />
              <Image
                src={walking}
                w={"80px"}
                h={"80px"}
                ml={8}
                rounded={"md"}
                alt={"feature image"}
              />
            </Flex>
            <Flex justify={"center"}>
              <Image
                src={route_1}
                w={"80px"}
                h={"80px"}
                mr={8}
                rounded={"md"}
                alt={"feature image"}
              />
              <Feature
                text={"모든 포인트의 GPS 인증을 완료하고 보상을 획득합니다."}
              />
            </Flex >
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
