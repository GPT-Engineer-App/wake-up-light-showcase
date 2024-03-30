import React from "react";
import { Box, Heading, Text, Stack, Flex, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaRegLightbulb, FaEye, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" justifyContent="space-between" px={8} py={24} bg={useColorModeValue("gray.50", "gray.800")}>
        <Box maxWidth="xl" mr={8}>
          <Heading as="h1" size="2xl" mb={4}>
            Wake Up Light
          </Heading>
          <Text fontSize="xl" mb={8}>
            Experience a natural and refreshing wake-up with our innovative ceiling-mounted wake up light. Gently simulates sunrise to help you start your day feeling energized and refreshed.
          </Text>
          <Button size="lg" colorScheme="blue" rightIcon={<FaSun />}>
            Order Now
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1573655349936-de6bed86f839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YWtlJTIwdXAlMjBsaWdodCUyMGhhbmdpbmclMjBmcm9tJTIwY2VpbGluZ3xlbnwwfHx8fDE3MTE4NDAyNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wake Up Light" maxWidth="50%" borderRadius="md" shadow="xl" />
      </Flex>

      {/* Features Section */}
      <Box px={8} py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Why Choose Wake Up Light?
        </Heading>
        <Flex justifyContent="space-around">
          <Feature icon={FaRegLightbulb} title="Natural Wake-Up" description="Simulates sunrise for a gentle and natural wake-up experience." />
          <Feature icon={FaSun} title="Ceiling-Mounted" description="Hangs elegantly from your ceiling, saving valuable bedside space." />
          <Feature icon={FaEye} title="Adjustable Brightness" description="Customize the brightness level to suit your preferences." />
        </Flex>
      </Box>

      {/* How It's Made Section */}
      <Box px={8} py={16} bg={useColorModeValue("gray.50", "gray.800")}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          How It's Made
        </Heading>
        <Text fontSize="xl" maxWidth="3xl" mx="auto" textAlign="center">
          Our Wake Up Light is crafted with premium materials and cutting-edge technology. The LED light panel provides a uniform and flicker-free illumination, while the durable aluminum housing ensures long-lasting performance. The sleek and minimalist design seamlessly blends with any bedroom decor.
        </Text>
      </Box>

      {/* Vision and Mission Section */}
      <Box px={8} py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Vision and Mission
        </Heading>
        <Text fontSize="xl" maxWidth="3xl" mx="auto" textAlign="center">
          At Wake Up Light, our vision is to revolutionize the way people start their day. We believe that waking up should be a pleasant and rejuvenating experience. Our mission is to provide innovative and high-quality products that promote well-being and enhance the daily lives of our customers.
        </Text>
      </Box>

      {/* Footer */}
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={8} py={4} textAlign="center">
        <Text>
          Made with <FaHeart color="red" /> by Wake Up Light
        </Text>
      </Box>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <Box textAlign="center" maxWidth="sm">
      <Icon size="3rem" color="blue.500" mb={4} />
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default Index;
