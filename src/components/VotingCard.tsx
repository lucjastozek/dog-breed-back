import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
} from "@chakra-ui/react";

import { backendApi } from "../utils/requestConfig";

interface CardProps {
    imgLink: string;
    name: string;
    voted: boolean;
    setVoted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function VotingCard({
    imgLink,
    name,
    voted,
    setVoted,
}: CardProps): JSX.Element {
    async function handleVote() {
        await backendApi.put("/leaderboard/", {
            breed: name,
        });

        setVoted(true);
    }

    return (
        <div>
            <Card maxW="sm">
                <CardBody>
                    <Image
                        width={"40vh"}
                        height={"40vh"}
                        object-fit={"cover"}
                        src={imgLink}
                        alt={name}
                        borderRadius="lg"
                        fallbackSrc="/dog.png"
                    />

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
        </div>
    );
}
