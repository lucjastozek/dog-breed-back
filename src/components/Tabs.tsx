import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
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
        <Tabs variant="enclosed" colorScheme="green" height={"100vh"}>
            <TabList>
                <Tab>Voting</Tab>
                <Tab>Leaderboard</Tab>
                <ColourMode />
                <Text>Your votes: {voteCounter}</Text>
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
