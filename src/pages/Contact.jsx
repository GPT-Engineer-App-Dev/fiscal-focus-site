import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Contact Us</Heading>
        <Text fontSize="lg">How to get in touch with us.</Text>
      </Box>
    </Container>
  );
};

export default Contact;