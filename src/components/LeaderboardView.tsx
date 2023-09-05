import { useEffect, useState } from "react";
import { Leaderboard } from "./Leaderboard";
import { BreedProps } from "../interfaces/BreedProps";
import { TopImages } from "./TopImages";
import { fetchTopBreeds } from "../utils/fetchTopBreeds";
import { Flex, IconButton } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

export function LeaderboardView(): JSX.Element {
    const [topBreeds, setTopBreeds] = useState<BreedProps[]>([]);

    async function handleRefresh() {
        fetchTopBreeds(setTopBreeds);
    }

    useEffect(() => {
        fetchTopBreeds(setTopBreeds);
    }, []);
    return (
        <Flex direction={"row"}>
            <Leaderboard topBreeds={topBreeds} />
            <IconButton
                icon={<RepeatIcon />}
                aria-label={""}
                onClick={handleRefresh}
            />
            <TopImages top3Breeds={topBreeds.slice(0, 3)} />
        </Flex>
    );
}
