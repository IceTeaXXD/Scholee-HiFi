import React, { useState } from "react";
import { Box, Flex, Heading, Text, IconButton, Button, Card, CardBody, CardFooter, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const cards = [
    {
        id: 1,
        title: "Schoalarship 1",
        content: "Content for Schoalarship 1",
    },
    {
        id: 2,
        title: "Schoalarship 2",
        content: "Content for Schoalarship 2",
    },
    {
        id: 3,
        title: "Schoalarship 3",
        content: "Content for Schoalarship 3",
    },
    {
        id: 4,
        title: "Scholarship 4",
        content: "Content for scholarship 4",
    },
    {
        id: 5,
        title: "Scholarship 5",
        content: "Content for scholarship 5",
    },
    {
        id: 6,
        title: "Scholarship 6",
        content: "Content for scholarship 3",
    },
];
export const DashboardCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : cards.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < cards.length - 1 ? prevIndex + 1 : 0
        );
    };

    const cardSize = useBreakpointValue({ base: "md", md: "lg" });
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    return (
        <Box padding={{ base: "6", md: "8" }} maxWidth="95vw" overflow="hidden" bg={"primary.100"} borderRadius="md">
            <Heading as="h3" size="lg" mb="4" textAlign={"center"}>
                Open Scholarships
            </Heading>
            <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    onClick={handlePrev}
                    mr={{ base: "0", md: "2" }}
                    mb={{ base: "2", md: "0" }}
                    variant="ghost"
                    isDisabled={currentIndex === 0}
                    _hover={{ color: "blue.500" }}
                    transition="color 0.3s ease-in-out"
                    aria-label=""
                />
                <Flex
                    overflowX="auto"
                    overflowY="hidden"
                    whiteSpace="nowrap"
                    sx={{ scrollSnapType: "x mandatory" }}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            bg={"white"}
                            borderRadius="md"
                            textAlign="center"
                            mx="2"
                            scrollSnapAlign="start"
                            position="relative"
                            size={cardSize}
                            display={isSmallScreen && index !== currentIndex ? "none" : "block"}
                        >
                            <CardBody>
                                <Heading as="h4" size="md" color="black" mb="2">
                                    {card.title}
                                </Heading>
                                <Text color="black" isTruncated>
                                    {card.content}
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    position="absolute"
                                    bottom="2"
                                    right="2"
                                    variant="outline"
                                    size="sm"
                                    bg={"primary.300"}
                                    color={"white"}
                                >
                                    View More
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </Flex>
                <IconButton
                    icon={<ChevronRightIcon />}
                    onClick={handleNext}
                    ml={{ base: "0", md: "2" }}
                    mt={{ base: "2", md: "0" }}
                    variant="ghost"
                    isDisabled={currentIndex === cards.length - 1}
                    _hover={{ color: "blue.500" }}
                    transition="color 0.3s ease-in-out"
                    aria-label=""
                />
            </Flex>
        </Box>
    );
};