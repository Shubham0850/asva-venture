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
        <ProductCard
          title='Shardeum'
          desc='An EVM based L1 Blockchain utilizing dynamic state sharding.'
          img='/shardeum.png'
        />
        <ProductCard
          title='Sei'
          desc='A Cosmos-based L1 uniquely optimized the exchange of digital assets '
          img='/sei.png'
        />
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
      <Subscribe />
    </>
  );
}
