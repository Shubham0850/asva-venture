import { Box,Text ,Link,Flex} from '@chakra-ui/react'
import React from 'react'

interface announcementprops{
  title:string,
  name:string,
  date:string,
  tags:string,
  link:string
}

function AnnouncementCard({title,name,date,tags,link}: announcementprops) {
  return (
    <Box width={'30%'} border={'2px'}>
       <Flex justifyContent={'space-between'}>
        <Text>{title}</Text>
        <Link href={link}>icon</Link>
       </Flex>
         
         <Flex>
          <Text>{tags}</Text>

         </Flex>

         <Flex>
          <Text>{name}</Text>
          <Text>{date}</Text>
         </Flex>
    </Box>

  );
}

export default AnnouncementCard