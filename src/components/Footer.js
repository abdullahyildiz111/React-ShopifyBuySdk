import React from 'react'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <Box backgroundColor="#57b6ff">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} color="white" fontWeight='bold'>
                <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
                <VStack p="4rem" 
                         >
                    <Link  to="/products/green-blast" >The Green Blast</Link>
                    <Link to="/products/blue-berry" >The Blue Berry</Link>
                    <Link to="/products/yellow-mellow" >The Yellow Mellow</Link>
                </VStack>
                <VStack p="4rem"  >
                    <Link  to="/about"> About Us</Link>
                    <Link  to="/" > Learn More</Link>
                    <Link  to="/" > Sustainability</Link>
                </VStack>
            </Grid>
            <Box>
                <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
                    © Copyright www.abdullahyildiz.com
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
