import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Terms of Service</Heading>
        <Text fontSize="lg">Details about our terms of service.</Text>
      </Box>
    </Container>
  );
};

export default TermsOfService;