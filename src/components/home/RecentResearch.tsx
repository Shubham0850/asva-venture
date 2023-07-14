import { Container,Flex,Text,Link } from '@chakra-ui/react'
import { RecentResearchData } from "../../data/recentResearchData";
import React from 'react'
import ResearchCard from '../Cards/ResearchCard';

function RecentResearch() {
  return (
	<Container maxW={1300}>
    <Flex justifyContent={"space-between"} p={5} >
        <Text>Research Blogs - datadriven market analysis </Text>

        <Link href={"#"}>See all</Link>
      </Flex>

      <Flex alignItems={'center'}  wrap={'wrap'} gap={6} >
       {RecentResearchData.map((researchData)=>{
        const {category,title,link,description,date,writer} = researchData;
        return(
            <ResearchCard 
             category={category}
             title={title}
             link={link}
             description={description}
             date={date}
             writer={writer}
            />
        );
       })}
      </Flex>
  </Container>
  )
}

export default RecentResearch