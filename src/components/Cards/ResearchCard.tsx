import { Box,Text ,Link,Flex} from '@chakra-ui/react'
import React from 'react'


interface  RecentResearchPropsType {
  category:string,title:string,link:string,description:string,date:string,writer:string
}

function ResearchCard({category,title,link,description,date,writer} : RecentResearchPropsType) {
  return (
<Box width={'30%'} p={10} border={'2px'} >
  <Flex justifyContent={'space-between'}> 
    <Text>{category}</Text>
    <Link href={link}>icon</Link>
  </Flex>
    
   <Text>{title}</Text>
   <Text>{description}</Text>
    
    <Flex>
      <Text>{writer}</Text>
      <Text>{date}</Text>
    </Flex>
</Box>
  )
}

export default ResearchCard