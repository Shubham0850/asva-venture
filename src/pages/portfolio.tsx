'use client';
import GpComp from '@/components/about/Gp';
import Hero from '@/components/product/Hero';
import ProductCard from '@/components/product/ProductCard';
import ReachOut from '@/components/home/ReachOut';
import RecentAma from '@/components/home/RecentAma';
import RecentAnnouncement from '@/components/home/RecentAnnouncement';
import RecentPosts from '@/components/home/RecentPosts';
import RecentResearch from '@/components/home/RecentResearch';
import Subscribe from '@/components/home/Subscribe';
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Product() {
  return (
    <>
      <Head>
        <title>
          A thesis-driven Web3 fund backing ambitious founders shaping the next
          iteration of the Internet | Asva Ventures
        </title>
        <meta
          name='description'
          content='A thesis-driven Web3 fund backing ambitious founders shaping the next
          iteration of the Internet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/asva.png' />
      </Head>

      <Hero />
      <Box textAlign='center'>
        {/* <Heading
          as='h1'
          size='xl'
          my='24px'
          fontWeight={600}
          fontSize={['32px', '40px']}
          color='#4C545A'
          height='60px'
          fontFamily='PowerGrotesk'
        >
          Project Sector
        </Heading> */}
      </Box>
      <Flex justifyContent='center' flexWrap='wrap' background={'#F8F8F8'}>
        <ProductCard title='Wizardia' desc='Metaverse P2E Game' img='/1.png' />
        <ProductCard
          title='MetaBloxz'
          desc='A Metaverse Platform for Enterprises'
          img='/7.png'
        />
        <ProductCard
          title='Meta Fighter'
          desc=' A Fighting Game Metaverse'
          img='/2.png'
        />
        <ProductCard
          title='Creo Engine'
          desc='Blockchain Based Game Development Platform Realms of Ethernity: Free to play MMORPG Game'
          img='/5.png'
        />
        <ProductCard
          title='Taroverse'
          desc='A Metaverse of P2E Games
'
          img='/8.png'
        />

        <ProductCard
          title='Mechachain'
          desc=' Futuristic Web3 Mobile Game'
          img='/01.png'
        />
        <ProductCard
          title='Chirpley'
          desc='An AI & ML based Influencer Marketplace
'
          img='/6.png'
        />
        <ProductCard
          title='Colizeum'
          desc='Blockchain Based Mobile Gaming Ecosystem
'
          img='/4.png'
        />
        <ProductCard
          title='Legion Network'
          desc='The best of Blockchain in one super app
'
          img='/3.png'
        />
      </Flex>
      <Box textAlign={'center'} py={['20px', '50px']} background={'#F8F8F8'}>
        <Heading
          as='h2'
          size='xl'
          my='24px'
          fontWeight={500}
          fontSize={['32px', '48px']}
          color='#4C545A'
          height='60px'
          fontFamily='PowerGrotesk'
        >
          The Ventures & The Builders
        </Heading>
        <Text
          fontWeight={400}
          fontSize={['16px', '20px']}
          color='#888'
          height='60px'
          fontFamily='PowerGrotesk'
          my={'15px'}
          maxW={'1000px'}
          textAlign={'center'}
          mx={'auto'}
        >
          A monthly newsletter for web3 builders & investors. The only
          newsletter you need to stay updated on web3 fundraising, major events
          & conferences, best VC reads, and a lot more
        </Text>
        <Flex
          maxW={'600px'}
          style={{
            border: '1px solid #393939',
          }}
          mx={'auto'}
          my={['40px']}
        >
          <Input border={'none'} placeholder='Whats your email?' h={'48px'} />
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
          >
            Subscribe Now
          </Button>
        </Flex>
      </Box>
    </>
  );
}
