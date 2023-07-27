import { Container, Flex, Text, Link, Grid, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import LatestCard from "../Cards/LatestCard";
import axios from "axios";

interface Post {
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  categories: {
    [key: string]: unknown;
  };
  date: string;
  tags: {
    [key: string]: unknown;
  };
}

const RecentAma: React.FC = () => {
  const [recentAma, setRecentAma] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/?number=3&category='AMA'"
        );
        console.log("Announcements", { _response });
        setRecentAma(_response.data.posts);
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);

  return (
    <Box background={"#F8F8F8"} pb={100} className="border">
      <Container maxW={1300} padding="0px 25px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text
            color={"#4C545A"}
            fontWeight={{ base: 700, md: 800 }}
            fontSize={{ base: "20px", md: "24px" }}
          >
            Ama & Podcast
            <span className="hidden">- Explore Industry Expert Insights</span>
          </Text>

          <Link href="/ama-podcast">
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

        {loading ? (
          <p>Loading....</p>
        ) : (
          <Grid templateColumns={["1fr", "repeat(1, 1fr)"]} gap={16}>
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
              const options: Intl.DateTimeFormatOptions = {
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
                  <LatestCard
                    title={title}
                    link={`/blog/${slug}`}
                    date={formattedDate}
                    tags={tagsArray}
                    authers={[name]}
                    type={category}
                    spotifyLink={"#"}
                    twitterLink={"#"}
                  />
                </div>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default RecentAma;
