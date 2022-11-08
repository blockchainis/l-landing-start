import styled from "@emotion/styled";
import { Box, Center, Circle, Text, VStack, Flex } from "@chakra-ui/react";
import EconomyTextCircle from "./atoms/EconomyTextCircle";
export default function TokenEconomy() {
  const radius = 130;
  const marginHori = 70;
  const marginVer = -7;
  return (
    
      
      <Box>
        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
      <Box>
        <Box marginY={marginVer}>
          <Center>
            <EconomyTextCircle
              title="System"
              subTitle="Managing smart contract"
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
              title="Reward"
              subTitle="Token,
              NFT"
              bgColor="green.200"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="black"
            />
            <EconomyTextCircle
              title="Content"
              subTitle="mukbang,
              activity,
              tasty"
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
              title="Maker"
              subTitle="Create a route list"
              bgColor="green.500"
              radius={radius}
              marginHori={marginHori}
              marginVer={0}
              textColor="white"
            />
            <EconomyTextCircle
              title="Follower"
              subTitle="miner & route following"
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
              title="Experience"
              subTitle="unforgettable memories"
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
