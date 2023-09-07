import { Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchImage } from "../utils/fetchImage";
import { VotingCard } from "./VotingCard";

interface VotingViewProps {
    setVoteCounter: React.Dispatch<React.SetStateAction<string>>;
    voteCounter: string;
}

export function VotingView({
    setVoteCounter,
    voteCounter,
}: VotingViewProps): JSX.Element {
    const [imageLeft, setImageLeft] = useState("");
    const [imageRight, setImageRight] = useState("");
    const [nameLeft, setNameLeft] = useState("");
    const [nameRight, setNameRight] = useState("");
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        fetchImage().then(({ imgLink, name }) => {
            setImageLeft(imgLink);
            setNameLeft(name);
        });

        fetchImage().then(({ imgLink, name }) => {
            setImageRight(imgLink);
            setNameRight(name);
        });

        setVoted(false);
        localStorage.setItem("voteCounter", voteCounter);
    }, [voted, voteCounter]);

    useEffect(() => {
        if (nameLeft === nameRight) {
            fetchImage().then(({ imgLink, name }) => {
                setImageLeft(imgLink);
                setNameLeft(name);
            });

            fetchImage().then(({ imgLink, name }) => {
                setImageRight(imgLink);
                setNameRight(name);
            });
        }
    }, [nameLeft, nameRight]);

    return (
        <div>
            <Flex color="white" direction={{ base: "column", md: "row" }}>
                <Spacer />
                <VotingCard
                    imgLink={imageLeft}
                    name={nameLeft}
                    setVoted={setVoted}
                    setVoteCounter={setVoteCounter}
                />
                <Spacer />
                <VotingCard
                    imgLink={imageRight}
                    name={nameRight}
                    setVoted={setVoted}
                    setVoteCounter={setVoteCounter}
                />
                <Spacer />
            </Flex>
        </div>
    );
}
