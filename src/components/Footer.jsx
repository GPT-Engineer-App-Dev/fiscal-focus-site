import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Stack maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
        <Text>© 2023 Financial Times. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy-policy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms-of-service">Terms of Service</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;