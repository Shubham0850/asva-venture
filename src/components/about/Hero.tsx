/* eslint-disable react/no-unescaped-entities */
import { Container, Flex, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Box, Button, Text, Icon } from '@chakra-ui/react';
// import Hero from '../../../public/img1.png';

function Hero() {
  return (
    <Box position={'relative'} pt='105px'>
      <Container
        maxW={1300}
        position={'relative'}
        zIndex={2}
        padding='0px 25px'
      >
        <Box
          pt={['40px', '80px']}
          pb={['120px', '180px', '180px']}
          justifyContent={'flex-start'}
        >
          <Text
            width={['100%', '100%', '930px']}
            fontSize={['36px', '48px']}
            height={'auto'}
            style={{
              fontWeight: 700,
            }}
            color={'#000'}
          >
            Our Story Behind
          </Text>

          <Text
            mt={'28px'}
            width={['100%', '100%', 'auto']}
            fontSize={['14px', '20px']}
            style={{
              height: 'auto',
              fontWeight: 400,
            }}
            color={'#888'}
          >
            Asva Capital was born out of a passion for the endless
            possibilities of the web3 world. The team, composed of seasoned
            entrepreneurs and investors, saw the potential for a new era of
            decentralized technologies and set out to create a venture capital
            firm that would invest in the next generation of builders. 
            <br /> <br />   From day one, Asva Capital has been committed to
            backing ambitious founders with the drive and vision to change the
            world through web3. Since our inception in early 2021, Asva Capital
            has deployed investments in more than 30 promising projects from
            various segments, including metaverse, gaming, and NFTs. But Asva
            Ventures is more than just a funding source.  
            <br /> <br />   With our global network of founders & mentors,
            strong partnerships with VCs, blockchain ecosystems, protocols,
            launchpads, and exchanges we provide strong value-add to our
            portfolio companies, helping them achieve their full potential. 
            <br /> <br />   Asva Capital success is rooted in its commitment
            to supporting promising builders and empowering them to create the
            user-owned internet of the future. We are committed to taking bold
            risks on visionary entrepreneurs who share our mission of building a
            decentralized and democratized web.
          </Text>

          {/* <Link href='mailto:pitch@asvaventures.com'>
            <Button
              gap={2}
              mt={'50px'}
              bg='linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%)'
              color='#111111'
              padding={['16px', '20px 24px']}
              fontSize={['14px', '16px']}
              rounded={0}
              fontFamily={'PowerGrotesk'}
              fontWeight={'normal'}
              letterSpacing={'1px'}
              _hover={{}}
            >
              Pitch Us
              <Icon
                className='blink'
                as={BsArrowRight}
                width={'20px'}
                height={'20px'}
                color={'#111111'}
              />
            </Button>
          </Link> */}
        </Box>
      </Container>

      <Image
        src='/heroBg.png'
        width={'90%'}
        height={{ base: '100vh', md: '100%' }}
        objectFit={'cover'}
        position={'absolute'}
        top={[30, 0]}
        right={0}
        zIndex={1}
      />
    </Box>
  );
}

export default Hero;
