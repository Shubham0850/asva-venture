'use client';
import GpComp from '@/components/about/Gp';
import Hero from '@/components/about/Hero';
import TeamCard from '@/components/about/TeamCard';
import ReachOut from '@/components/home/ReachOut';
import RecentAma from '@/components/home/RecentAma';
import RecentAnnouncement from '@/components/home/RecentAnnouncement';
import RecentPosts from '@/components/home/RecentPosts';
import RecentResearch from '@/components/home/RecentResearch';
import Subscribe from '@/components/home/Subscribe';
import { Box, Button, Card, Flex, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  const gotToOpenPosition = () => {
    window.open(
      'https://asvalabs.notion.site/asvalabs/Asva-Ventures-c430110ad71c4e9cbe530c5ccb512e9d ',
      '_ blank'
    );
  };
  return (
    <>
      <Head>
        <title>
        Thesis Driven Digital Asset fund
        </title>
        <meta
          name='description'
          content='A thesis driven Digital Asset fund investing across diverse digital assets in private and public markets'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/asva.png' />
      </Head>
      <Hero />
      <GpComp />
      {/* <Flex justifyContent='center' flexWrap='wrap'>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Flex> */}
      <hr className='line' />
      <Flex
        maxW={'1100px'}
        justifyContent={'space-between'}
        alignItems={'start'}
        mx={'auto'}
        my={'20px'}
        // background={'#F8F8F8'}
        p='3rem'
        flexDirection={['column', 'column', 'row']}
      >
        {/* <Box
          textAlign={['center', 'center', 'start']}
          w={['100%', '100%', '60%']}
          m={['auto', 'auto']}
        >
          <Text
            fontSize={['36px', '48px']}
            height={'auto'}
            textAlign={['center', 'center', 'start']}
            mb={['10px']}
            style={{
              fontWeight: 500,
            }}
            color={'#4C545A'}
          >
            Open Positions
          </Text>
          <Text
            fontSize={['14px', '20px']}
            height={'auto'}
            textAlign={['center', 'center', 'start']}
            style={{
              fontWeight: 400,
            }}
            color={'#888'}
            fontFamily='PowerGrotesk'
          >
            Lorem Ipsum open positions for web3 builders & investors. The only
            newsletter you need to stay updated on web3 fundraising.
          </Text>
        </Box>
        <Box
          my={['20px', '20px', '0']}
          mx='auto'
          w={['100%', '100%', '40%']}
          textAlign={['center', 'center', 'end']}
        >
          <Button
            colorScheme='teal'
            bgGradient='linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%)'
            height='48px'
            padding='20px 24px'
            rounded={0}
            size={'sm'}
            width='min-content'
            fontFamily={'PowerGrotesk'}
            letterSpacing={'1px'}
            fontWeight={'normal'}
            color='black'
            ml='auto'
            onClick={gotToOpenPosition}
          >
            collaborate now
          </Button>
        </Box> */}
      </Flex>
    </>
  );
}
