import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Fade,
    Heading,
    Image,
} from "@chakra-ui/react";

import { backendApi } from "../utils/requestConfig";
import { useState } from "react";

interface CardProps {
    imgLink: string;
    name: string;
    voted: boolean;
    setVoted: React.Dispatch<React.SetStateAction<boolean>>;
    onImageClick: () => void;
}

export function VotingCard({
    imgLink,
    name,
    voted,
    setVoted,
    onImageClick,
}: CardProps): JSX.Element {
    const [isLoaded, setIsLoaded] = useState(false);

    async function handleVote() {
        setVoted(true);

        backendApi.put("/leaderboard/", {
            breed: name,
        });

        setIsLoaded(false);
    }

    const handleImageClick = () => {
        setIsLoaded(false);
        onImageClick();
    };

    return (
        <Card maxW="sm">
            <CardBody>
                <Fade in={isLoaded}>
                    <Image
                        width={"40vh"}
                        height={"40vh"}
                        object-fit={"cover"}
                        src={imgLink}
                        alt={name}
                        borderRadius="lg"
                        fallbackStrategy="onError"
                        fallbackSrc="dog-fallback.jpg"
                        onClick={handleImageClick}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(true)}
                    />
                </Fade>

                <Heading
                    marginTop={"0.5vh"}
                    textTransform={"capitalize"}
                    size="md"
                >
                    {name}
                </Heading>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button
                    onClick={handleVote}
                    variant="solid"
                    colorScheme="blue"
                    isDisabled={voted}
                >
                    Vote
                </Button>
            </CardFooter>
        </Card>
    );
}
