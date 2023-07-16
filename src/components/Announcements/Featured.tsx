import { Box, Container, Text, Flex } from "@chakra-ui/react";
import React from "react";
import AnnouncementCard from "../Cards/AnnouncementCard";
import { AnnouncementData } from "@/data/announcementData";

function Featured() {
  return (
    <Container maxW={1300}>
      <Box background={"#fff"}>
        <Text
          color="#4C545A"
          fontSize="24px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Featured
        </Text>
        <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
          <Flex alignItems={"center"} wrap={"wrap"} gap={6}>
            {AnnouncementData.map((announcementData, index) => {
              const { title, date, tags, name, link } = announcementData;
              return (
                <div key={index}>
                  <AnnouncementCard
                    title={title}
                    date={date}
                    name={name}
                    link={link}
                    tags={tags}
                  />
                </div>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}

export default Featured;
