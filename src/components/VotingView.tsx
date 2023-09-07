import { Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VotingCard } from "./VotingCard";
import { generateDiffBreeds } from "../utils/generateDiffBreeds";
import { BreedCard } from "../interfaces/BreedCard";
import { fetchBreedImageLinks } from "../utils/fetchBreedImageLinks";

interface VotingViewProps {
    setVoteCounter: React.Dispatch<React.SetStateAction<string>>;
    voteCounter: string;
}

export function VotingView({
    setVoteCounter,
    voteCounter,
}: VotingViewProps): JSX.Element {
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
        localStorage.setItem("voteCounter", voteCounter);
    }, [voted, voteCounter]);

    const handleImageClick = (
        breed: string,
        setBreed: React.Dispatch<React.SetStateAction<BreedCard>>
    ) => {
        fetchBreedImageLinks([breed]).then(([imgLink]) => {
            setBreed((prev) => ({ ...prev, imgLink }));
        });
    };

    return (
        <Flex color="white" direction={{ base: "column", md: "row" }}>
            <Spacer />
            <VotingCard
                imgLink={breedLeft.imgLink}
                name={breedLeft.name}
                setVoted={setVoted}
                voted={voted}
                onImageClick={() =>
                    handleImageClick(breedLeft.name, setBreedLeft)
                }
                setVoteCounter={setVoteCounter}
            />
            <Spacer />
            <VotingCard
                imgLink={breedRight.imgLink}
                name={breedRight.name}
                setVoted={setVoted}
                voted={voted}
                onImageClick={() =>
                    handleImageClick(breedRight.name, setBreedRight)
                }
                setVoteCounter={setVoteCounter}
            />
            <Spacer />
        </Flex>
    );
}
