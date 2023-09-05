import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ColourMode } from "./ColourMode";
import { LeaderboardView } from "./LeaderboardView";
import { VotingView } from "./VotingView";

export function TabsView(): JSX.Element {
    return (
        <Tabs variant="enclosed" colorScheme="green" height={"100vh"}>
            <TabList>
                <Tab>Voting</Tab>
                <Tab>Leaderboard</Tab>
                <ColourMode />
            </TabList>
            <TabPanels>
                <TabPanel>
                    <VotingView />
                </TabPanel>
                <TabPanel>
                    <LeaderboardView />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
