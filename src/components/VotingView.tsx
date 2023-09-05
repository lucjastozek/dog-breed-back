import { Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchImage } from "../utils/fetchImage";
import { VotingCard } from "./VotingCard";

export function VotingView(): JSX.Element {
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
    }, [voted]);

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
