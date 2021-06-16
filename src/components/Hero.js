import React from 'react'
import { Box, Image, Center, Text, Button  } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Box backgroundColor="#a1eced" w="100%" position="relative" h="70vh">
            <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg" 
            h="100%" m="auto" objectFit="contain"
            objectPosition={["top", "center"]}
            />
            <Text
                className="tracking-in-expand-fwd-top"
                position="absolute"
                bottom="20%"
                w="100%"
                textAlign="center"
                color="blackAlpha.800"
                fontWeight="bold"
                fontSize={["2rem", "3rem", "4rem"]}
                >
                Introducing Bath Bombs
            </Text>
            <Center >
                <Button size="md" backgroundColor="black" color="white"
                _hover={{opacity: "70%" }} position="absolute" bottom="8%"
                boxShadow="dark-lg" p="6" rounded="md" bg="white"
                >
                    Shop Now
                </Button>
            </Center>
        </Box>
    )
}

export default Hero
 