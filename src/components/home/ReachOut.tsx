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
      borderRight={isLast ? "none" : "1px dashed #4C545A"}
      pr={4}
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
      >
        {heading}
      </Heading>
      <Text
        color="#DDDDDD"
        mb={4}
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
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

const Section = () => {
  return (
    <Container maxW={1400}>
      <Box bg="#1F1F1F" p={8}>
        <Heading
          color="white"
          textAlign="center"
          mb={8}
          fontSize="40px"
          fontWeight="700"
          letterSpacing="-1px"
          fontFamily="inherit"
        >
          Reach Out To Us
        </Heading>
        <Flex justifyContent="space-between">
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
  );
};

export default Section;
