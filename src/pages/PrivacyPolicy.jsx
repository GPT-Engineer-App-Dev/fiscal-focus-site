import { Box, Container, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Privacy Policy</Heading>
        <Text fontSize="lg">Details about our privacy policy.</Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;