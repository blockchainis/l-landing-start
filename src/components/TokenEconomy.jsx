import styled from "@emotion/styled";
import { Box, Center, Circle, Text, VStack, Flex,Heading } from "@chakra-ui/react";
import EconomyTextCircle from "./atoms/EconomyTextCircle";
export default function TokenEconomy() {
  const radius = 150;
  const marginHori = 70;
  const marginVer = -7;
  return (
      <Box marginBottom={150}>
        <VStack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        fontWeight={400}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"120%"}
        marginLeft = {200}
        marginRight = {200}
      >
        당신이 걸어온 길을 공유하고 보상받을 수 있는 경제 시스템
<br />
      </Heading>
      <Text color={"gray.500"}>
        
      </Text>
    </VStack>
        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
      <Box>
        <Box marginY={marginVer}>
          <Center>
            <EconomyTextCircle
              title="시스템"
              subTitle="스마트 컨트렉트로 관리되는 투명한 구조"
              bgColor="green.500"
              radius={radius}
              marginHori={0}
              marginVer={marginVer}
              textColor="white"
            />
          </Center>
        </Box>
        <Box>
          <Center>
            <EconomyTextCircle
              title="보상"
              subTitle="토큰,
              NFT"
              bgColor="green.200"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="black"
            />
            <EconomyTextCircle
              title="컨텐츠"
              subTitle="여행, 맛집 탐방, 운동 코스"
              bgColor="green.200"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="black"
            />
          </Center>
        </Box>
        <Box marginTop={30}>
          <Center>
            <EconomyTextCircle
              title="가이드"
              subTitle="특별한 루트를 공유해보세요"
              bgColor="green.500"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="white"
            />
            <EconomyTextCircle
              title="팔로워"
              subTitle="루트를 인증하고 보상을 얻어보세요"
              bgColor="green.500"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="white"
            />
          </Center>
        </Box>
        <Box marginY={marginVer}>
          <Center>
            <EconomyTextCircle
              title="경험"
              subTitle="뻔하지 않은 새로운 경험을 누려보세요"
              bgColor="green.200"
              radius={radius}
              marginHori={0}
              marginVer={marginVer}
              textColor="black"
            />
          </Center>
        </Box>
      </Box>
      <Circle
        w='200px'
        h='200px'
        bgGradient={"linear(to-r, green.200, yellow.500)"}
        pos={"absolute"}
        zIndex={-3}
        filter={"blur(70px)"}
      />
      </Flex>
      </Box>
  );
}
