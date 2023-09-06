import { Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VotingCard } from "./VotingCard";
import { generateDiffBreeds } from "../utils/generateDiffBreeds";
import { BreedCard } from "../interfaces/BreedCard";

export function VotingView(): JSX.Element {
    const [breedLeft, setBreedLeft] = useState<BreedCard>({
        imgLink: "",
        name: "",
    });
    const [breedRight, setBreedRight] = useState<BreedCard>({
        imgLink: "",
        name: "",
    });
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        generateDiffBreeds().then(({ leftBreed, rightBreed }) => {
            setBreedLeft(leftBreed);
            setBreedRight(rightBreed);
        });

        setVoted(false);
    }, [voted]);

    return (
        <div>
            <Flex color="white">
                <Spacer />
                <VotingCard
                    imgLink={breedLeft.imgLink}
                    name={breedLeft.name}
                    setVoted={setVoted}
                    voted={voted}
                />
                <Spacer />
                <VotingCard
                    imgLink={breedRight.imgLink}
                    name={breedRight.name}
                    setVoted={setVoted}
                    voted={voted}
                />
                <Spacer />
            </Flex>
        </div>
    );
}
