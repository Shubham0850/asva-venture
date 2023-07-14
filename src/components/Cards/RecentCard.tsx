import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface RecenCardPropsType {
  bannerImg: string,
  description: string,
  title: string,
  writer: string,
  date: string,
  postLink: string
}

function RecentCard({bannerImg, description, title, writer,date, postLink}: RecenCardPropsType) {
  return (
	<Box width={"50%"} p={5}>
    <Image src={bannerImg} width={"100%"} alt="banner" />
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Flex>
      <Text>{writer}</Text>
      <Text>{date}</Text>
    </Flex>


  </Box>
  )
}

export default RecentCard