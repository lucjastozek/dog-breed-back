import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BreedProps } from "../interfaces/BreedProps";
import { fetchTopBreeds } from "../utils/fetchTopBreeds";
import { Leaderboard } from "./Leaderboard";
import { TopImages } from "./TopImages";

export function LeaderboardView(): JSX.Element {
    const [topBreeds, setTopBreeds] = useState<BreedProps[]>([]);

    useEffect(() => {
        fetchTopBreeds().then((top10) => setTopBreeds(top10));
    }, []);

    return (
        <Flex direction={"row"} justifyContent={"center"} padding={10}>
            <Leaderboard topBreeds={topBreeds} setTopBreeds={setTopBreeds} />
            <TopImages top3Breeds={topBreeds.slice(0, 3)} />
        </Flex>
    );
}
