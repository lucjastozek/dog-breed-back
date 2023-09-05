import { fetchImage } from "../utils/fetchImage";
import { useEffect, useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { VotingCard } from "./VotingCard";

export function VotingView(): JSX.Element {
    const [imageLeft, setImageLeft] = useState("");
    const [imageRight, setImageRight] = useState("");
    const [nameLeft, setNameLeft] = useState("");
    const [nameRight, setNameRight] = useState("");
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        fetchImage(setImageLeft, setNameLeft);
        fetchImage(setImageRight, setNameRight);

        setVoted(false);
    }, [voted]);

    useEffect(() => {
        if (nameLeft === nameRight) {
            fetchImage(setImageLeft, setNameLeft);
            fetchImage(setImageRight, setNameRight);
        }
    }, [nameLeft, nameRight]);

    return (
        <div>
            <Flex color="white">
                <Spacer />
                <VotingCard
                    imgLink={imageLeft}
                    name={nameLeft}
                    setVoted={setVoted}
                />
                <Spacer />
                <VotingCard
                    imgLink={imageRight}
                    name={nameRight}
                    setVoted={setVoted}
                />
                <Spacer />
            </Flex>
        </div>
    );
}
