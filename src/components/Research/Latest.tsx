import { Text, Box, Container, Grid, Button } from "@chakra-ui/react";
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
  date: string;
  tags: { [key: string]: string };
}

function Latest() {
  const [recentPost, setRecentPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=${5*1}&category='Research'`
        );
        setRecentPost(_response.data.posts);
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
    <Container maxW="1300" padding="50px 25px">
      <Box background={"#fff"}>
        <Text
          pb={8}
          color="#4C545A"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="700"
        >
          Latest
        </Text>

        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
          <Grid templateColumns={["1fr", "repeat(1, 1fr)"]} gap={6}>
            {recentPost.map((post, index) => {
              const title = post.title;
              const slug = post.slug;
              const name = `${post.author.first_name} ${post.author.last_name}`;
              const formattedDate = dateFormate(post.date);
              const tagsArray = Object.keys(post.tags);

              return (
                <div key={index}>
                  <LatestCard
                    title={title}
                    link={`/blog/${slug}`}
                    date={formattedDate}
                    tags={tagsArray}
                    authers={[name]}
                    type={"Research"}
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
      </Box>
    </Container>
  );
}

export default Latest;
