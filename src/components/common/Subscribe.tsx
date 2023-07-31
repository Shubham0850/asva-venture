import {
  Container,
  Flex,
  Heading,
  Box,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false)

  const handleSubscribe = () => {
    setLoading(true)
    // Step 3: Handle form submission
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || !regex.test(String(email).toLowerCase())) {
      setMessage("Please enter a valid email");
      return;
    }

    const formData = new FormData();
    formData.append("api_key", "AghazFUFk4uDrDUsquEg");
    formData.append("email", email);
    formData.append("list", "ThA5aF2Lf06cHT892osZxndQ");

    axios
      .post("https://sendy.asvalabs.com/subscribe", formData, {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        const resData = response.data;
        if (resData.includes(`You're already subscribed!`)) {
          setMessage(`You're already subscribed!`);
        }
        if (resData.includes(`You're subscribed!`)) {
          setMessage(`You're subscribed!`);
        }
        setEmail("")
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setMessage("Something went wrong!");
      });
  };

  return (
    <Box bg={"#fff"} pb={{ base: "0px", md: "100px" }}>
      <Container
        maxW={1300}
        py={"125px"}
        px={"25px"}
        bg={" #F8F8F8"}
        rounded={"15px"}
      >
        <Box mx="auto">
          <Flex direction="column" alignItems="center" textAlign="center">
            <Heading
              as="h1"
              size="xl"
              mb={"24px"}
              fontWeight={500}
              fontSize={"48px"}
              color={"#4C545A"}
              fontFamily={"PowerGrotesk"}
            >
              The Ventures & The Builders
            </Heading>
            <Box mb={4}>
              <Text
                width={["100%", "100%", "1000px"]}
                height={"auto"}
                fontWeight={400}
                fontSize={["16px", "20px"]}
                color={"#888888"}
              >
                Your comprehensive frequent digest for all things Web3! Stay
                informed on impactful fundraising efforts, major industry
                events, thought-provoking articles, and a lot more.
              </Text>
            </Box>
            <Flex
              gap={0}
              mt={"50px"}
              border={"1px solid #7A7A7A"}
              rounded={5}
              overflow={"hidden"}
            >
              <Input
                placeholder="Enter your email"
                rounded={0}
                fontSize={18}
                color={"#888"}
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                background="linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%);"
                px={"34px"}
                py={"20px"}
                rounded={0}
                _hover={{ bg: "#80ff7d" }}
                color={"#1F1F1F"}
                fontFamily={"PowerGrotesk"}
                fontWeight={400}
                onClick={handleSubscribe}
              >
                {loading ? "Submitting..." : "Subscribe Now"}
              </Button>
            </Flex>
            <Text color="#1F1F1F"  textAlign={"center"} >{message}</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Subscribe;
