import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";

type CardProps = {
  image: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  isLast?: boolean;
};

const Card = ({ image, heading, paragraph, buttonText, isLast }: CardProps) => {
  return (
    <Flex
      flex={1}
      flexDirection="column"
      borderRight={{ base: "none", md: isLast ? "none" : "1px dashed #4C545A" }}
      borderBottom={{
        base: isLast ? "none" : "1px dashed #4C545A",
        md: "none",
      }}
      px={{base: 0, md: 8}}
      pb={{base: 8, md: 0}}
    >
      <Image
        src={image}
        alt="Card Image"
        mb={4}
        boxSize={{ base: "70px", md: "64px" }}
        objectFit="contain"
      />
      <Heading
        fontSize="24px"
        fontWeight="400"
        lineHeight="150%"
        color="white"
        mb={2}
        fontFamily={"PowerGrotesk"}
      >
        {heading}
      </Heading>
      <Text
        color="rgba(221, 221, 221, 0.64)"
        mt={"20px"}
        mb={"50px"}
        fontSize="16px"
        fontWeight="400"
        lineHeight="150%"
      >
        {paragraph}
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear-gradient(135deg, #80FE7E 0%, #62FEA5 51.56%, #52FFBC 100%)"
        height="48px"
        padding="20px 24px"
        rounded={0}
        size={"sm"}
        width="min-content"
        fontFamily={"PowerGrotesk"}
        letterSpacing={"1px"}
        fontWeight={"normal"}
        color="black"
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

const Section = () => {
  return (
    <Box bg="#1F1F1F" py={"50px"}>
      <Container maxW={1400} padding="0px 25px">
        <Box>
          <Heading
            color="white"
            textAlign="center"
            mb={16}
            fontSize="40px"
            fontWeight="700"
            letterSpacing="1px"
            fontFamily={"PowerGrotesk"}
          >
            Reach Out To Us
          </Heading>
          <Flex
            mb={20}
            gap={6}
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Card
              image="ellipse-1.svg"
              heading="Apply for Investment"
              paragraph="Mentorship from industry experts to make sure you are ready for the growth"
              buttonText="Apply Now"
            />
            <Card
              image="ellipse-2.svg"
              heading="Invest in our fund"
              paragraph="Mentorship from industry experts to make sure you are ready for the growth"
              buttonText="Invest Now"
            />
            <Card
              image="ellipse-3.svg"
              heading="Or Collaboration"
              paragraph="Mentorship from industry experts to make sure you are ready for the growth"
              buttonText="Collaborate Now"
              isLast
            />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Section;
