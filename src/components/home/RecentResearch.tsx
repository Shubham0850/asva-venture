import { Container, Flex, Text, Link, Grid, Box } from "@chakra-ui/react";
import { RecentResearchData } from "../../data/recentResearchData";
import React,{useState,useEffect} from "react";
import ResearchCard from "../Cards/ResearchCard";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import parse from "html-react-parser";


function RecentResearch() {

  const [recentResearch, setRecentResearch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      try {
        const _response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/?number=3&category='Research'"
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
          <Text color={"#4C545A"} fontWeight={{base:700,md:800}} fontSize={{base:'20px',md:'24px'}}>
            Research Blogs <span className="hidden">- Datadriven Market Analysis</span>
          </Text>

          <Link href="#">
            <Flex alignItems={"center"}>
              <Text color="#4C545A" fontSize={{base:'16px',md:'20px'}} fontWeight={500}>
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
              console.log("research data: ", research);

              const title = research.title;
              const slug = research.slug;
              const name = `${research.author.first_name} ${research.author.last_name}`;
              const description = parse(research.content);
              const originalDate = research.date;
             
               
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
                <ResearchCard
                  // category={category}
                  
                  title={title}
                  // link={link}
              
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
