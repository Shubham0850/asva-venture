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
import React from "react";
import { RecentPostData } from "../../data/recentPostData";
import RecentCard from "../Cards/RecentCard";
import { GoArrowRight } from "react-icons/go";

function RecentPosts() {
  return (
    <Box bg={"#fff"} position={"relative"} zIndex={10}>
      <Box textAlign={"center"}>
        <Heading
          as="h1"
          size="xl"
          mb={"24px"}
          fontWeight={600}
          fontSize={"48px"}
          color={"#4C545A"}
          height={"60px"}
          fontFamily={"PowerGrotesk"}
        >
          Explore Our Insights
        </Heading>
      </Box>

      <Box borderTop={"1px solid #ddd"} borderStyle={"dashed"} />

      <Container maxW={1300}>
        <Flex justifyContent={"space-between"} py={10}>
          <Text
            color={"#4C545A"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={24}
          >
            Recent post
          </Text>

          <Link href="#">
            <Flex alignItems={"center"}>
              <Text color="#4C545A" fontSize={20} fontWeight={500}>
                See all
              </Text>
              <GoArrowRight
                style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
              />
            </Flex>
          </Link>
        </Flex>

        {/* Render cards component */}
        <Grid templateColumns="repeat(2, 1fr)" gap={16}>
          {RecentPostData.map((postData) => {
            const { bannerImg, title, date, description, postLink, writer } =
              postData;
            return (
              <RecentCard
                writer={writer}
                date={date}
                bannerImg={bannerImg}
                description={description}
                title={title}
                postLink={postLink}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default RecentPosts;
