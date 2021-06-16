import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext'

import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import RichText from '../components/RichText';

const HomePage = () => {

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()

    }, [fetchAllProducts]);

    console.log(products)

    if (!products) return <div> ...Loading</div>

    return (
        <Box>
            <Hero />
            <RichText 
                heading="The relaxation you've been waiting for."
                text="Our Bath bombs guarantee a fun, relaxing, and colorful night."
            />
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
                {products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id} >
                        <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative" >
                            <Image src={product.images[0].src} />
                            <Text position="absolute" bottom="15%" w="100%" fontWeight="bold" >
                                {product.title}
                            </Text>
                            <Text position="absolute" bottom="5%" w="100%" color="gray.500" >
                                $ {product.variants[0].price}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
            <RichText 
                heading="Treat Yourself!"
            />
            <ImageWithText

                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
                heading="First Heading"
                text="tesd vknds flvkdnfş lbdkfnbld knbldkmbd şflbmdşflbm dşflm bdşf lmbdşf şlmsdşfgls şlmsef ş şlsegşsl mşse   "
            />
            <ImageWithText
                reverse
                image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
                heading="Second Heading"
                text="tesd vknds flvkdnfş lbdkfnbld knbldkmbd şflbmdşflbm dşflm bdşf lmbdşf şlmsdşfgls şlmsef ş şlsegşsl mşse   "
            />
        </Box>


    )
}

export default HomePage
