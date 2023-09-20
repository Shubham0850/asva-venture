import React from 'react';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

function ProductCard({ title, desc, img }) {
  return (
    <Flex
      justifyContent={'Center'}
      maxW={'384px'}
      p={'5px'}
      style={{
        border: '1px solid #393939',
      }}
      m='10px'
    >
      <Box
        w={'30%'}
        m={'auto'}
        p='10px'
        style={{
          borderRight: '1px solid #393939',
        }}
      >
        <Image
          src={img}
          width={'100%'}
          style={{
            backgroundBlendMode: 'multiply',
          }}
        />
      </Box>
      <Flex
        textAlign='start'
        w={'70%'}
        ml='10px'
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Heading
          as='h6'
          size='xl'
          fontWeight={600}
          fontSize={['12px', '16px']}
          color='#1F1F1F'
          fontFamily='PowerGrotesk'
        >
          {title}
        </Heading>
        <Text
          fontWeight={300}
          fontSize={['10px', '12px']}
          color='#888'
          fontFamily='PowerGrotesk'
        >
          {desc}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProductCard;
