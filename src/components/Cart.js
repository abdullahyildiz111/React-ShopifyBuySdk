import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { CloseIcon } from '@chakra-ui/icons';

import {
    Box,
    Grid,
    Text,
    Flex,
    Link,
    Image,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"


const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)


    return (
        <>

            <Drawer
                isOpen={isCartOpen}
                placement="right"
                onClose={closeCart}
                size="sm"

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Shopping Cart</DrawerHeader>

                    <DrawerBody>
                        {checkout.lineItems?.length ? checkout.lineItems.map(item => (
                            <Grid my="10px" p="5px" templateColumns="repeat(4, 1fr)" gap={1} key={item.id} border="2px" borderColor="gray.200">
                                <Flex alignItems="center" justifyContent="center">
                                    <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                                </Flex>
                                <Flex alignItems="center" justifyContent="center">
                                    <Image src={item.variant.image.src} />
                                </Flex >
                                <Flex alignItems="center" justifyContent="center">
                                    <Text>
                                        {item.title}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text pt="1rem">
                                        $ {item.variant.price}
                                    </Text>
                                </Flex>
                            </Grid>
                        )) : 
                        
                        <Box h="100%" w="100%">
                            <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">Your Cart is empty!</Text>
                        </Box>
                        }

                    </DrawerBody>

                    {checkout.lineItems?.length ?
                        <DrawerFooter>
                            <Button w="100%" >
                                <Link w="100%" href={checkout.webUrl} >
                                    Checkout
                                </Link>
                            </Button>
                        </DrawerFooter>
                        : null
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
