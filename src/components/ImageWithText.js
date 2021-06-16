import React from 'react';
import {Box, Flex, Button, Text, Image, Heading} from '@chakra-ui/react';

const ImageWithText = ({reverse, image, heading, text}) => {

    const reverseSection = reverse ? 'row-reverse' : 'row'

    return (
        <Box>
            <Flex flexDir={[ 'column', reverseSection]} w="100%" >
                <Image src={image} objectFit="cover" w={[ "100%", "50%"]} />
                <Box  display="flex" w={[ "100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center" p="2rem" >
                    <Heading p="2rem" >
                        { heading && heading }
                    </Heading>
                    <Text p="2rem">
                        { text && text }    
                    </Text>
                    <Button 
                        w="10rem"
                        backgroundColor="black"
                        color="white"
                        _hover={{ opacity: "70%" }}
                        boxShadow="dark-lg" p="6" rounded="md" bg="white"
                    >
                        Buy Now   
                    </Button>    
                </Box>
            </Flex>
        </Box>
    )
}

export default ImageWithText




