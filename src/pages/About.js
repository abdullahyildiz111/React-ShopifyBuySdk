import React, { useContext } from 'react';
import { Box, Grid, Flex, Image, Text } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';


const About = () => {


    return (
        <Box>
            <Grid>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    pl="30%"
                    pr="30%"
                >
                    <Image
                        src="https://www.dgm.com.tr/img/about-us.jpg"
                    />
                </Flex>
                <Flex>
                    <Text
                        pl="30%"
                        pr="30%"
                        pb="10%"
                    >
                        The best About Us pages accomplish their goals through telling a story about a brand.

                        Every story needs a protagonist, and so does every About Us page.

                        In some cases, that might be you or your founding team. In others, you might treat your business as its own character with a distinct story.

                        Either way, stories are all about representing change—starting in one place and ending up in another—which is something your About Us page should also do as visitors scroll through it.

                        You can craft a narrative for your About Us page by using the following formula:

                        Set the scene. Introduce the characters or setting, and establish the status quo or “the way things were” for you, your target customer, or your industry.
                        Introduce the problem. Describe the problem that called you (the main character) to act.
                        Rise to the challenge. Explain how you set out to find a solution (i.e., start your business) and the obstacles you faced along the way.
                        Arrive at a solution. Share details of how your business is pursuing its purpose and the milestones you’ve hit.
                        Envision what’s next. Paint a picture of the future for your company or state its mission and goals.
                        Here are some other components you might want to incorporate into your About Us page, not only to flesh out your narrative but to define your brand and communicate your company’s reason for being to customers.
                    </Text>

                </Flex>
            </Grid>
        </Box>
    )
}

export default About
