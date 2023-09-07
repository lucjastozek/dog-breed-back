import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Stat,
    StatLabel,
    StatNumber,
    Flex,
} from "@chakra-ui/react";
import { ColourMode } from "./ColourMode";
import { LeaderboardView } from "./LeaderboardView";
import { VotingView } from "./VotingView";
import { useState } from "react";

export function TabsView(): JSX.Element {
    const [voteCounter, setVoteCounter] = useState(
        localStorage.getItem("voteCounter") ?? "0"
    );

    return (
        <Tabs isFitted variant="enclosed" colorScheme="green" height={"100vh"}>
            <TabList alignItems={"center"}>
                <Tab>Voting</Tab>
                <Tab>Leaderboard</Tab>
                <Stat>
                    <Flex alignItems={"center"} justifyContent={"flex-end"}>
                        <StatLabel>Your votes</StatLabel>
                        <StatNumber marginLeft={"1vw"}>
                            {voteCounter}
                        </StatNumber>
                    </Flex>
                </Stat>

                <ColourMode />
            </TabList>
            <TabPanels>
                <TabPanel>
                    <VotingView
                        setVoteCounter={setVoteCounter}
                        voteCounter={voteCounter}
                    />
                </TabPanel>
                <TabPanel>
                    <LeaderboardView />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
