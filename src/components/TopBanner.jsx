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

export default function TopBanner() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"green.400"}>
          운동
          </Text>
          과&nbsp; 
             <Text as={"span"} color={"yellow.400"}>
          코인
          </Text>
          을 한번에{" "}
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} noOfLines={"2"}>
        국내의 여러 국립공원과 아름다운 길 들을 안전한 루트대로 이용하시고, 
        <br/>
        좋은 추억 NFT로 남기세요 . 
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

