import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { VotingCard } from "./votingCard";

export function VotingView(): JSX.Element {
    const [imageLeft, setImageLeft] = useState("");
    const [imageRight, setImageRight] = useState("");
    const [nameLeft, setNameLeft] = useState("");
    const [nameRight, setNameRight] = useState("");

    async function fetchImage(
        setImageFn: React.Dispatch<React.SetStateAction<string>>,
        setNameFn: React.Dispatch<React.SetStateAction<string>>
    ) {
        const response = await axios.get(
            "https://dog.ceo/api/breeds/image/random"
        );
        const imgLink = response.data.message;
        const name = imgLink.split("/")[4];
        setImageFn(imgLink);
        setNameFn(name);
    }

    useEffect(() => {
        fetchImage(setImageLeft, setNameLeft);
        fetchImage(setImageRight, setNameRight);
    }, []);

    return (
        <div>
            <Flex color="white">
                <Spacer />
                <VotingCard imgLink={imageLeft} name={nameLeft} />
                <Spacer />
                <VotingCard imgLink={imageRight} name={nameRight} />
                <Spacer />
            </Flex>
        </div>
    );
}
