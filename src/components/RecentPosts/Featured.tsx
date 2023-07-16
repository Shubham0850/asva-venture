import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { RecentPostData } from "@/data/recentPostData";
import RecentCard from "../Cards/RecentCard";
import { GoArrowRight } from "react-icons/go";

function Featured() {
  return (
    <Box
      bg={"#fff"}
      position={"relative"}
      zIndex={10}
      pb={100}
      borderBottom={"1px solid #ddd"}
      borderStyle={"dashed"}
    >
      <Box borderTop={"1px solid #ddd"} borderStyle={"dashed"} />

      <Container maxW={1300}>
        <Box py={10}>
          <Text
            color={"#4C545A"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={24}
          >
            Featured
          </Text>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          {RecentPostData.slice(0, 3).map((postData, index) => {
            const { bannerImg, title, date, description, postLink, writer } =
              postData;
            return (
              <div key={index}>
                <RecentCard
                  writer={writer}
                  date={date}
                  bannerImg={bannerImg}
                  description={description}
                  title={title}
                  postLink={postLink}
                />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Featured;
