import { Box, Text } from "@chakra-ui/react";

const SpeechBubble = ({ speaker, children }) => {
  const isUser = speaker === "user";
  return (
    <Box
      bg={isUser ? "purple.400" : "purple.600"}
      color="white"
      p={3}
      borderRadius="lg"
      alignSelf={isUser ? "flex-end" : "flex-start"}
      maxWidth="80%"
      m={2}
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default SpeechBubble;
