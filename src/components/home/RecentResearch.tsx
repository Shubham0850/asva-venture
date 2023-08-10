import { Container, Flex, Text, Grid, Box } from "@chakra-ui/react";
import Link from "next/link"
import React, { useState, useEffect } from "react";
import ResearchCard from "../Cards/ResearchCard";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import parse from "html-react-parser";
import { dateFormate } from "../../../utils";
import { API_ENDPOINT, ENV } from "../../../api-config";

interface Post {
  title: string;
  slug: string;
  author: {
    first_name: string;
    last_name: string;
  };
  content: string;
  date: string;
  tags: { [key: string]: string };
}

function RecentResearch() {
  const [recentResearch, setRecentResearch] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          `${API_ENDPOINT}${ENV}/posts/?number=3&category='Research'`
        );
        console.log({ _response });
        setRecentResearch(_response.data.posts);
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
            Research Blogs
            <span className="hidden">: Explore Data-Driven Web3</span>
          </Text>

          <Link href="/research">
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

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {recentResearch.map((research, index) => {
            const title = research.title;
            const slug = research.slug;
            const name = `${research.author.first_name} ${research.author.last_name}`;
            const description = parse(research.content);
            const formattedDate = dateFormate(research.date);
            const tagsArray = Object.keys(research.tags);

            return (
              <div key={index}>
                <ResearchCard
                  category={tagsArray[0]}
                  title={title}
                  link={`/blog/${slug}`}
                  description={description}
                  date={formattedDate}
                  writer={name}
                />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default RecentResearch;
