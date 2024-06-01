import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>About Us</Heading>
        <Text fontSize="lg">Information about the Financial Times website.</Text>
      </Box>
    </Container>
  );
};

export default About;