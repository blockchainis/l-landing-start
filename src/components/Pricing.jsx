import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

import HikingImage from "@assets/image/hiking.png";
import InstagramImage from "@assets/image/instagram.png";
import EatingImage from "@assets/image/eating.png";


function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={"center"}
    borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" >
          원하시는 루트 저희와 함께 가요
        </Heading>
        <Text fontSize="lg" color={"gray.500"} lineHeight={"200%"} marginBottom={"5px"}>
          Activity, PhotoZone, Tasty, Drama or MusicVideo Filming Sites,
          <br/> Whatever you want !
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={10}
        py={10}
      >
         <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 240 }}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Activity
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              #
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              96
              </Text> 
              <Text fontSize="1xl" fontWeight="400">
              <br/>of&nbsp;Routes
              </Text>
            </HStack>
          </Box>
          <VStack
            py={4}
            borderBottomRadius={"xl"}
          >
            <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
           <Image src={HikingImage} w={100} />
          <Box
            w={"5rem"}
            h={"5rem"}
            bgGradient={"linear(to-r, green.300, yellow.300)"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(60px)"}
          />
          
          </Flex>
           <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="outline">
                루트 보러 가기
              </Button>
            </Box>
            
          </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
         <Box position="relative" w={{ base: "520px", md: 240 }}>
            <Box
              position="absolute"
              top="-35px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"green.200"}
                px={3}
                py={1}
                color={"white"}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                PhotoZone
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  #
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  147
                </Text>  
                <Text fontSize="1xl" fontWeight="400">
              <br/>of&nbsp;Routes
              </Text>
              </HStack>
            </Box>
            <VStack
              py={4}
              borderBottomRadius={"xl"}
            >
              <Flex w={"full"} justify={"center"} pos={"relative"}>
          <Image src={InstagramImage} w={132} />
          <Box
            w={"5rem"}
            h={"5rem"}
            bgGradient={"linear(to-r, green.300, yellow.300)"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(50px)"}
          />
          
          </Flex>
              
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="green">
                  루트 보러 가기
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 240 }}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Tasty
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                #
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                120
              </Text>
              <Text fontSize="1xl" fontWeight="400">
              <br/>of&nbsp;Routes
              </Text>
            </HStack>
          </Box>
          <VStack
          
            py={4}
            borderBottomRadius={"xl"}
          ><Flex w={"full"} justify={"center"} pos={"relative"}>
           <Image src={EatingImage} w={100} />
          <Box
            w={"5rem"}
            h={"5rem"}
            bgGradient={"linear(to-r, green.300, yellow.300)"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(50px)"}
          />
          
          </Flex>
        
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="green" variant="outline">
                루트 보러 가기
              </Button>
            </Box>
          </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
