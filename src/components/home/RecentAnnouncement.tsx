import { Container,Flex,Text ,Link} from '@chakra-ui/react'
import React from 'react'
import { AnnouncementData } from "../../data/announcementData";
import AnnouncementCard from '../Cards/AnnouncementCard';

function RecentAnnouncement() {
  return (
	<Container maxW={1300}>
   <Flex justifyContent={'space-between'}>
     <Text>Announcements – explore about news</Text>
     <Link href={'#'}>See All</Link>
   </Flex>

<Flex  alignItems={'center'}  wrap={'wrap'} gap={6}>
  {AnnouncementData.map((announcementData) =>{
       const {title,date,tags,name,link}= announcementData; 
       return(
            <AnnouncementCard title={title} date={date} name={name} link={link} tags={tags} />
       );
  })}
</Flex>
  </Container>
  )
}

export default RecentAnnouncement