import React, { useContext } from 'react';
import { Flex, Box, Badge, Icon, Image } from '@chakra-ui/react';
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
    return (
        <Flex backgroundColor="#57b6ff" flexDir="row" alignItems="center" justifyContent="space-between" pl="2rem" pr="2rem"  h={120} >
            <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30} 
               onClick={() => openMenu()} >
            </Icon>
            <Link to="/">
                <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100} />
            </Link>
            <Box>
                <Icon fill="white" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30}></Icon>
                <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout?.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}

export default NavBar

