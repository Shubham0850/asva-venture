import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RecentPostData } from "../../data/recentPostData";
import RecentCard from "../Cards/RecentCard";

function RecentPosts() {
  return (
    <Container maxW={1300}>
      <Flex justifyContent={"space-between"} p={5}>
        <Text>Recent post</Text>

        <Link href={"#"}>See all</Link>
      </Flex>

      {/* Render cards component */}
      <Flex alignItems={"center"} wrap={"wrap"}>
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
      </Flex>
    </Container>
  );
}

export default RecentPosts;
