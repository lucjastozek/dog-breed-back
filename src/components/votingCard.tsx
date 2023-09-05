import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";

interface cardProps {
    imgLink: string;
    name: string;
}

export function VotingCard({ imgLink, name }: cardProps): JSX.Element {
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
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{name}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Button variant="solid" colorScheme="blue">
                            Vote
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
}
