import { Box, Container, Flex, Divider, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { TbMenu } from 'react-icons/tb';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Box bg={'#F8F8F8'} position='fixed' zIndex={100} width='100%'>
      <Container maxW={1300}>
        <Flex
          as='nav'
          align='center'
          justify='space-between'
          wrap='wrap'
          py='5px'
          px={2}
          color='white'
        >
          <Link href='/'>
            <Box
              p='0px'
              width={{ base: '108px', md: '130px' }}
              height={{ base: '61px', md: '73px' }}
            >
              <img src='/asva-venture-logo.svg' alt='asva-venture logo' />
            </Box>
          </Link>

          <Flex
            gap={20}
            display={{ base: 'none', md: 'flex' }}
            alignItems='center'
          >
            <Link href='/'>
              <Text
                mr={4}
                color='#888888'
                _hover={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                fontWeight={500}
                fontFamily={'PowerGrotesk'}
              >
                Home
              </Text>
            </Link>
            <Link href='/#insights'>
              <Text
                mr={4}
                color='#888888'
                _hover={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                fontFamily={'PowerGrotesk'}
                fontWeight={500}
              >
                Insights
              </Text>
            </Link>
            <Link href='/portfolio'>
              <Text
                mr={4}
                color='#888888'
                _hover={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                fontFamily={'PowerGrotesk'}
                fontWeight={500}
              >
                Portfolio
              </Text>
            </Link>
            <Link href='/about'>
              <Text
                mr={4}
                color='#888888'
                _hover={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                fontFamily={'PowerGrotesk'}
                fontWeight={500}
              >
                About
              </Text>
            </Link>
          </Flex>

          <Box display={{ base: 'flex', md: 'none' }} onClick={toggleMenu}>
            {menu ? (
              <AiOutlineCloseSquare
                style={{ color: '#1C1B1F', fontSize: 24 }}
              />
            ) : (
              <TbMenu style={{ color: '#1C1B1F', fontSize: 24 }} />
            )}
          </Box>
        </Flex>
      </Container>
      <Box
        w={'full'}
        bg={'#fff'}
        display={{ base: menu ? 'block' : 'none', md: 'none' }}
      >
        <Link href='/'>
          <Box p={5} borderBottom={'1px solid #cecece'}>
            <Text
              textAlign={'center'}
              color={'#000'}
              fontSize={18}
              fontWeight={700}
            >
              Home
            </Text>
          </Box>
        </Link>

        <Link href='/#insights'>
          <Box p={5} borderBottom={'1px solid #cecece'}>
            <Text
              textAlign={'center'}
              color={'#000'}
              fontSize={18}
              fontWeight={700}
            >
              Insights
            </Text>
          </Box>
        </Link>

        <Link href='/portfolio'>
          <Box p={5} borderBottom={'1px solid #cecece'}>
            <Text
              textAlign={'center'}
              color={'#000'}
              fontSize={18}
              fontWeight={700}
            >
              Portfolio
            </Text>
          </Box>
        </Link>

        <Link href='/about'>
          <Box p={5} borderBottom={'1px solid #cecece'}>
            <Text
              textAlign={'center'}
              color={'#000'}
              fontSize={18}
              fontWeight={700}
            >
              About
            </Text>
          </Box>
        </Link>
      </Box>
      <Divider borderColor={'#e3e4e5'} borderWidth='1px' />
    </Box>
  );
}

export default NavBar;
