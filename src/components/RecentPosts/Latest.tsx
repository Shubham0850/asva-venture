import { Box, Button, Container, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LatestCard from "../Cards/LatestCard";
import axios from "axios";
import { dateFormate } from "../../../utils";
import { API_ENDPOINT, ENV } from "../../../api-config";

interface Post {
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  categories: { [key: string]: string };
  date: string;
  tags: { [key: string]: string };
}

function Latest() {
  const [latestPosts, setlatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=${5*page}`
        );
        setlatestPosts(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, [page]);

  const showMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box background={"#fff"} pb={100}>
      <Container maxW={1300} padding="0px 50px">
        <Box py={10}>
          <Text color={"#4C545A"} fontWeight={800} fontSize={24}>
            Latest
          </Text>
        </Box>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
          <Grid templateColumns={["1fr", "repeat(1, 1fr)"]} gap={16}>
            {latestPosts.map((post, index) => {
              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const category = Object.keys(post.categories)[0];
              const tagsArray = Object.keys(post.tags);
              const formattedDate = dateFormate(post.date);

              return (
                <div key={index}>
                  <LatestCard
                    title={title}
                    link={`/blog/${slug}`}
                    date={formattedDate}
                    tags={tagsArray}
                    authers={[name]}
                    type={category}
                  />
                </div>
              );
            })}
          </Grid>
          <Box width={"full"} textAlign={"center"}>
          <Button
              mt={"50px"}
              bg="linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%)"
              color="#111111"
              padding={["16px", "20px 24px"]}
              fontSize={["14px", "16px"]}
              rounded={0}
              fontFamily={"PowerGrotesk"}
              fontWeight={"normal"}
              letterSpacing={"1px"}
              mx={"auto"}
              _hover={{}}
              onClick={showMorePosts}
            >Show more</Button>
          </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default Latest;
