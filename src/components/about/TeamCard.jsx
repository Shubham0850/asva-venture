import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

function TeamCard() {
  return (
    <Box w={'260px'} m={'20px'}>
      <Image
        src='/img1.png'
        width={'100%'}
        height={{ base: '260px', md: '260px' }}
      />
      <Box textAlign='center'>
        <Heading
          as='h4'
          size='xl'
          m='20px'
          fontWeight={600}
          fontSize={['16px', '24px']}
          color='#111'
          fontFamily='PowerGrotesk'
        >
          mallikarjun naidu
        </Heading>
        <Heading
          as='h6'
          size='xl'
          mb='20px'
          fontWeight={300}
          fontSize={['12px', '16px']}
          color='#888'
          fontFamily='PowerGrotesk'
        >
          mallikarjun naidu
        </Heading>
        <Flex justifyContent='center' mb='20px'>
          <Image src='/img1.png' w='24px' />
          <Image src='/img1.png' w='24px' mx='20px' />
          <Image src='/img1.png' w='24px' />
        </Flex>
      </Box>
    </Box>
  );
}

export default TeamCard;
