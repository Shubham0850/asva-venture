/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function GpComp() {
  return (
    <>
      <Container maxW={1300} padding='0px 25px'>
        <Flex
          justifyContent='space-between'
          flexDirection={['column', 'column', 'row']}
          py={10}
          w='100%'
        >
          <Box
            w={['100%', '100%', '50%']}
            style={{
              position: 'relative',
            }}
          >
            <Text
              color='#4C545A'
              fontWeight={400}
              fontSize={{ base: '20px', md: '24px' }}
            >
              General Partener Asva Ventures
            </Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                position: 'relative',
              }}
            >
              <Text
                color='#4C545A'
                fontWeight={700}
                pr={'5px'}
                fontSize={{ base: '20px', md: '40px' }}
                style={{
                  zIndex: '1',
                  background: '#fff',
                }}
              >
                Mallikarjuna Naidu
              </Text>
              <hr
                style={{
                  position: 'absolute',
                  borderTop: '1px dashed #4C545A',
                }}
              />
            </div>
            <Text
              color='#888'
              fontWeight={400}
              fontSize={['14px', '20px']}
              py={50}
            >
              Mallikarjuna Naidu, the visionary founding partner of Asva
              Ventures, brings over 6 years of expertise in Blockchain and Web3.
              His seasoned journey spans not just these emerging technologies,
              but also encompasses years dedicated to working on startups,
              building products, and taking strategic investment decisions. 
              During his tenure at Tokenized VC, a prominent blockchain-focused
              investment firm, he demonstrated his deep acumen in the sector. As
              the force behind Asva Labs, Naidu channeled his expertise into
              'Metalaunch', successfully guiding over 20 projects through
              fundraising, product development, and go-to-market strategies. In
              addition to these achievements, he has advised a range of
              startups, ensuring they find their footing and thrive in a
              competitive landscape.
            </Text>
          </Box>
          <Box w={['100%', '100%', '40%']} m={['auto', 'auto']}>
            <Image src='/naidu.png' />
          </Box>
        </Flex>
      </Container>
      {/* <hr className='line' />
      <Box textAlign='center'>
        <Heading
          as='h1'
          size='xl'
          mb='24px'
          fontWeight={600}
          fontSize={['32px', '40px']}
          color='#4C545A'
          height='60px'
          fontFamily='PowerGrotesk'
        >
          Meet The Team
        </Heading>
      </Box> */}
    </>
  );
}

export default GpComp;
