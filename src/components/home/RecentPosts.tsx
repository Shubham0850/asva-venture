import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { RecentPostData } from "../../data/recentPostData";
import RecentCard from "../Cards/RecentCard";
import { GoArrowRight } from "react-icons/go";

function RecentPosts() {
  const [recentPost, setRecentPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/?number=4"
        );
        console.log({ _response });
        setRecentPost(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);

  return (
    <Box
      bg={"#F8F8F8"}
      position={"relative"}
      zIndex={10}
      pb={100}
      borderBottom={"1px solid #ddd"}
      borderStyle={"dashed"}
    >
      <Box textAlign={"center"}>
        <Heading
          as="h1"
          size="xl"
          mb={"24px"}
          fontWeight={600}
          fontSize={["32px", "40px"]}
          color={"#4C545A"}
          height={"60px"}
          fontFamily={"PowerGrotesk"}
        >
          Explore Our Insights
        </Heading>
      </Box>

      <Box className="border" />

      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text
            color={"#4C545A"}
            
            fontWeight={800}
            fontSize={{ base: "20px", md: "24px" }}
          >
            Recent Post
          </Text>

          <Link href="/recent-post">
            <Flex alignItems={"center"}>
              <Text
                color="#4C545A"
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight={500}
              >
                See all
              </Text>
              <GoArrowRight
                style={{ marginLeft: "8px", color: "#4C545A", fontSize: 24 }}
              />
            </Flex>
          </Link>
        </Flex>

        {/* Render cards component */}
        {loading ? (
          <p>Loading....</p>
        ) : (
          <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={16}>
            {recentPost.map((post, index) => {
              console.log("post data: ", post);

              const featuredImg = post.featured_image;
              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const description = parse(post.content);

              const originalDate = post.date;

              // Create a new Date object with the original date string
              const dateObj = new Date(originalDate);

              // Define options for the date formatting
              const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
              };

              // Format the date using Intl.DateTimeFormat
              const formattedDate = new Intl.DateTimeFormat(
                "en-US",
                options
              ).format(dateObj);


              return (
                <div key={index}>
                  <RecentCard
                    writer={name}
                    date={formattedDate}
                    bannerImg={featuredImg}
                    description={description}
                    title={title}
                    postLink={`/blog/${slug}`}
                  />
                </div>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default RecentPosts;
