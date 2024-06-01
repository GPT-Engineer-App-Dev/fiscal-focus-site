import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>Featured Article</Heading>
          <Text fontSize="lg">This is the featured article. It has a larger space and more prominent display.</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box>
            <Heading as="h2" size="md" mb={2}>Article 1</Heading>
            <Text>Summary of article 1.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={2}>Article 2</Heading>
            <Text>Summary of article 2.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={2}>Article 3</Heading>
            <Text>Summary of article 3.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;