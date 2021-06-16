import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';

 
import {
    Box,
    Grid,
    Text,
    Flex,
    VStack,
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
 
const NavMenu = () => {

    const {isMenuOpen, closeMenu, checkout} = useContext(ShopContext);
    console.log(checkout);
    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
                <Link onClick={closeMenu} to="/about">About Us</Link>
                <Link onClick={closeMenu} to="/">Learn More</Link>
                <Link onClick={closeMenu} to="/">Sustainability</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
              <Text w="100%">© Copyright Böyle bir şey yoktur</Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
}

export default NavMenu
