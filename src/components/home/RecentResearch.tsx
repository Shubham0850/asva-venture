import { Container, Flex, Text, Link, Grid, Box } from "@chakra-ui/react";
import { RecentResearchData } from "../../data/recentResearchData";
import React from "react";
import ResearchCard from "../Cards/ResearchCard";
import { GoArrowRight } from "react-icons/go";

function RecentResearch() {
  return (
    <Box background={"#F8F8F8"} pb={100} className="border">
      <Container maxW={1300} padding="0px 50px">
        <Flex justifyContent={"space-between"} py={10}>
          <Text color={"#4C545A"} fontWeight={800} fontSize={24}>
            RESEARCH BLOGS - Datadriven Market Analysis
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

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {RecentResearchData.map((researchData, index) => {
            const { category, title, link, description, date, writer } =
              researchData;
            return (
              <div key={index}>
                <ResearchCard
                  category={category}
                  title={title}
                  link={link}
                  description={description}
                  date={date}
                  writer={writer}
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
