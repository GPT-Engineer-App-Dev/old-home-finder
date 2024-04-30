import { Box, Flex, Heading, Input, Button, Text, VStack, HStack, Image } from '@chakra-ui/react';
import { FaSearch, FaSun, FaThermometerHalf, FaLeaf } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading mb={4}>Renovate Heritage</Heading>
        <Text fontSize="lg" mb={2}>Find and transform old flats and houses into modern eco-friendly homes.</Text>
        <Input placeholder="Search for properties..." size="lg" mb={3} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" mb={6}>
          Search
        </Button>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Available Properties</Heading>
            <Text mt={4}>Explore listings of properties that are waiting to be transformed.</Text>
            <Text mt={4}>Property 1: Charming 1920s cottage needing modern touches. Ideal for solar panel installation.</Text>
            <Text mt={2}>Property 2: Spacious 1970s flat with potential for heat pump integration and modern eco insulation.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Integration of New Technologies</Heading>
            <HStack spacing={10} mt={4}>
              <Box textAlign="center">
                <FaSun size="3em" />
                <Text mt={2}>Harness solar energy to reduce electricity bills and carbon footprint.</Text>
              </Box>
              <Box textAlign="center">
                <FaThermometerHalf size="3em" />
                <Text mt={2}>Efficient heating and cooling with minimal environmental impact.</Text>
              </Box>
              <Box textAlign="center">
                <FaLeaf size="3em" />
                <Text mt={2}>Sustainable materials providing superior insulation and energy conservation.</Text>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;