import PodcastCard from "@/components/Cards/PodcastCard";
import Subscribe from "@/components/common/Subscribe";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_ENDPOINT, ENV } from "../../api-config";

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

function AmaAndPodcast() {
  const [recentAma, setRecentAma] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=${5*1}&category='AMA'`
        );
        setRecentAma(_response.data.posts);
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
    <Box background={"#fff"} pt={"105px"}>
      <Box py={100} borderBottom={"1px solid #ddd"} borderStyle={"dashed"}>
        <Container maxW={1300} padding="0px 25px">
          <Box w={{ base: "100%", md: "80%" }}>
            <Text
              mb={"18px"}
              fontWeight={700}
              fontSize={{ base: "36px", md: "64px" }}
              color={"#000"}
            >
              Podcasts
            </Text>
            <Text
              fontSize={{ base: "14px", md: "20px" }}
              fontWeight={400}
              color={"#888"}
            >
              Our exclusive podcast series brings on the panel industry titans
              and visionary founders. Gain unparalleled access to the minds
              shaping the future of Web3.
            </Text>

            {/* <Box className="hidden">
              <Flex gap={2} mt={"25px"}>
                {tags.map((tag, index) => {
                  return (
                    <Tag
                      key={index}
                      size={"sm"}
                      variant="solid"
                      background="#6EFE96"
                      color={"#1F1F1F"}
                      rounded={"full"}
                      padding={"2px 12px"}
                    >
                      {tag}
                    </Tag>
                  );
                })}
              </Flex>
            </Box> */}
          </Box>
        </Container>
      </Box>

      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
        <Container maxW={1300} p={"0px 25px"}>
          {recentAma.map((post, index) => {
            console.log("post data: ", post);

            const title = post.title;
            const slug = post.slug;
            const name = `${post.author.first_name} ${post.author.last_name}`;
            const category = Object.keys(post.categories)[0];

            const originalDate = post.date;
            const tagsArray = Object.keys(post.tags);

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
              //@ts-ignore
              options
            ).format(dateObj);

            return (
              <div key={index}>
                <PodcastCard
                  type={category}
                  date={formattedDate}
                  title={title}
                  authors={[name]}
                  tags={tagsArray}
                  link={`/blog/${slug}`}
                  twitterLink={"#"}
                  linkedInLink={"#"}
                  facebookLink={"#"}
                />
              </div>
            );
          })}
        </Container>
        <Box width={"full"} textAlign={"center"}>
        <Button
            my={"50px"}
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
      <Subscribe />
    </Box>
  );
}

export default AmaAndPodcast;
