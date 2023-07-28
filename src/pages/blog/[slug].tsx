import Subscribe from "@/components/common/Subscribe";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Tag,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { dateFormate } from "../../../utils";

interface Data {
  title: string;
  tags: { [key: string]: string };
  author?: {
    first_name: string;
    last_name: string;
  };
  date: string;
  featured_image: string;
  content: string;
}

function useFetchPostData(slug: any) {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/staging-55d8-asvaadmin.wpcomstaging.com/posts/slug:${slug}`
        );
        console.log(response);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { data, loading };
}

function Blog() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentLink, setCurrentLink] = useState("");
  const { data, loading } = useFetchPostData(slug);

  useEffect(() => {
    const currentLink = encodeURIComponent(window.location.href);
    setCurrentLink(currentLink);
  }, []);
  const handleTwitterShare = () => {
    const tweetText = "Check out this link: " + currentLink;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

    // Open the Twitter share intent in a new window
    window.open(twitterShareUrl, "_blank");
  };

  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle/?mini=true&url=${currentLink}`;

    // Open the LinkedIn share intent in a new window
    window.open(linkedInShareUrl, "_blank");
  };

  const copyToClipboard = () => {
    const currentLink = window.location.href;

    navigator.clipboard.writeText(currentLink).then(
      () => {
        // If the copy was successful, you can show a success message or perform any other action
        alert("Link copied to clipboard!");
      },
      (err) => {
        // If there was an error copying the link, you can handle it here
        console.error("Could not copy link to clipboard:", err);
      }
    );
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <Box pt={"105px"} bg={"#fff"}>
            <Box
              py={100}
              borderBottom={"1px solid #ddd"}
              borderStyle={"dashed"}
            >
              <Container maxW={1300} p="0px 25px">
                <Box w={{ base: "100%", md: "80%" }}>
                  <Text
                    //  fontFamily={"PowerGrotesk"}
                    mb={"18px"}
                    fontWeight={700}
                    fontSize={{ base: "36px", md: "64px" }}
                    color={"#000"}
                    lineHeight={{ base: "40px", md: "70px" }}
                  >
                    {data.title}
                  </Text>

                  <Flex gap={4} mt={"25px"} wrap={"wrap"}>
                    {Object.keys(data?.tags).map((tag, index) => {
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
                  <Text
                    color={"#7A7A7A"}
                    fontSize={"20px"}
                    fontWeight={500}
                    py={4}
                  >
                    {`${data?.author?.first_name} ${data?.author?.last_name}`}
                  </Text>
                </Box>
              </Container>
            </Box>
            <Container maxW={1300} py={20} p="0px 25px">
              <Box pt="40px">
                <Flex
                  justifyContent={"space-between"}
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Text mb={{ base: 5, md: 0 }}>{dateFormate(data.date)}</Text>
                  <Flex alignItems={"center"} gap={3}>
                    <Button
                      color={"#4C545A"}
                      border={"0.5px solid #4C545A"}
                      rounded={"full"}
                      gap={2}
                      onClick={() => {
                        copyToClipboard();
                      }}
                    >
                      <FiCopy style={{ fontSize: 20 }} />
                      <Text fontSize={14}>Copy link</Text>
                    </Button>

                    <Button
                      onClick={handleTwitterShare}
                      border={"0.5px solid #4C545A"}
                      rounded={"full"}
                    >
                      <BsTwitter style={{ color: "#4C545A", fontSize: 20 }} />
                    </Button>
                    <Button
                      onClick={handleLinkedInShare}
                      border={"0.5px solid #4C545A"}
                      rounded={"full"}
                    >
                      <BsLinkedin style={{ color: "#4C545A", fontSize: 20 }} />
                    </Button>
                  </Flex>
                </Flex>
              </Box>

              <Box
                px={{ base: "16px", md: "32px" }}
                py={8}
                w={{ base: "100%", md: "80%" }}
                mx="auto"
              >
                <Text
                  py={4}
                  fontSize={{ base: "24px", md: "32px" }}
                  lineHeight={"40px"}
                >
                  {data?.title}
                </Text>
                <Image
                  src={data.featured_image}
                  maxH={"500px"}
                  width={"100%"}
                  objectFit={"cover"}
                  mb={"25px"}
                />
                <div className="content-box">
                  <Text fontSize={{ base: "16px", md: "20px", color: "#888" }}>
                    {parse(data?.content as string)}
                  </Text>
                </div>
              </Box>
            </Container>
            <Subscribe />
          </Box>
        )
      )}
    </>
  );
}

export default Blog;
