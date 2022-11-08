import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image
} from "@chakra-ui/react";

import RouteImg from "@assets/image/itinerary.png"
import BgRouteImg from "@assets/image/bg_route.png"

export default function TopBanner() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        justify={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      pos={"relative"}>
        <Image src={BgRouteImg}  w={"full"} h={"full"} pos={"absolute"} zIndex={-3} filter={"blur(5px)"}/>
        <Box bgColor={'black'} w={"full"} h={"full"} pos={"absolute"} zIndex={-1} opacity={"0.6"}/> 
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"green.500"}>
          당신
          </Text>
          <Text as={"span"} color={"white"}>이&nbsp;</Text>
             <Text as={"span"} color={"yellow.300"}>
          지나온 길,&nbsp;
          </Text>
          <br/>
         <Text as={"span"} color={"red.400"}>
         함께&nbsp;</Text>  
        <Text as={"span"} color={"white"}>
         걸으세요{" "}</Text> 
       
        </Heading>

        <Text color={"white"} maxW={"3xl"} noOfLines={"2"}>
        당신만의 특별한 추억이 담긴 장소가 있나요?
        <br/>
        좋은 추억이 담긴 루트를 제작하고 다른 사람에게 소개해보세요. 
        </Text>

        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"} justify={"center"} pos={"relative"}>
          <Image height={"80px"} src={RouteImg} />
          <Box
            w={"4rem"}
            h={"4rem"}
            bgGradient={"linear(to-r, blue.500, pink.500)"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(50px)"}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

