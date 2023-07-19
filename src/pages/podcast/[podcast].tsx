import { Box,Container,Text,Tag,Flex,Button, Divider } from '@chakra-ui/react'
import React from 'react'
import { podcastData } from "@/data/podcastData";
import PodcastCard from "@/components/Cards/PodcastCard";
import Subscribe from '@/components/common/Subscribe';
import { BsBorder, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';



const podcast = () => {
        const tags = [
                "Policy & Regulation",
                "Code & Engineering",
                "What We’re Reading",
              ];
  return (
        <Box>
        <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300}>
          <Box w={"80%"}>
            <Text mb={"18px"} fontWeight={700} fontSize={"64px"} color={"#000"}>
              Podcast : Episode 1
            </Text>
            <Text fontSize={30} fontWeight={700} color={"#4C545A"}>
              AI use cases in DeFi
            </Text>

            <Flex gap={2} mt={"25px"}>
              {tags.map((tag, index) => {
                return (
                  <Tag
                    key={index}
                    size={"sm"}
                    variant="solid"
                    background="#6EFE96"
                    color={"#1F1F1F"}
                    rounded={"full"}
                    padding={"2px 12px"}
                  >
                    {tag}
                  </Tag>
                );
              })}
            </Flex>
            <Text color={"#7A7A7A"} fontSize={'20px'} fontWeight={500}   py={4}>Phoenix Baker  / Jeff Bannniker</Text>
          </Box>
        </Container>
</Box>
        <Container maxW={1300} py={20}>
        <Box>
        <Flex justifyContent={'space-between'}>
            <Text>February 14,2023 . 4 minutes</Text> 
             <Button color={"#4C545A"}
            border={"0.5px solid #4C545A"}
            rounded={"full"}
            gap={2}>share</Button>
        </Flex>

         </Box>
         
         <Box px={32} py={8}>
                
                 <Text py={4}>AI use cases in DeFi</Text>
                 <Text><iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/1s1hg0fDxYubOCjG5dJT4s?utm_source=generator" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></Text>
                 <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat accusamus ex, illum illo adipisci quo officiis suscipit voluptas et unde, dolor error temporibus dignissimos soluta sit fugiat quam nesciunt rerum dolore eius dolores consectetur!</Text>
                 </Box>
        <Divider borderColor={'black'}/>

          <Box> 
                <Text color={"#4C545A"} fontSize={20} py={2} fontWeight={500}>
            Share:{" "}
          </Text>
          <Flex alignItems={"center"} gap={3}>
         
          <Button
            color={"#4C545A"}
            border={"0.5px solid #4C545A"}
            rounded={"full"}
            gap={2}
          >
            <FiCopy style={{ fontSize: 20 }} />
            <Text fontSize={14}>Copy link</Text>
          </Button>
           
          <BsTwitter style={{ color: "#4C545A", fontSize: 20 }} />
          <BsFacebook style={{ color: "#4C545A", fontSize: 20 }} />
          <BsLinkedin style={{ color: "#4C545A", fontSize: 20 }} />
        </Flex>
          </Box>
      </Container>
     <Subscribe/>
      </Box>
  )
}

export default podcast