import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorMode,
    Switch,
    Text,
    Flex,
} from "@chakra-ui/react";
import { VotingView } from "./VotingView";
import { LeaderboardView } from "./LeaderboardView";

export function TabsView(): JSX.Element {
    function ColourMode(): JSX.Element {
        const { colorMode, toggleColorMode } = useColorMode();
        return (
            <header>
                <Flex marginTop={"1vh"} marginLeft={"72vw"}>
                    <Text>Use {colorMode === "light" ? "dark" : "light"}</Text>
                    <Switch
                        id="switch"
                        onChange={toggleColorMode}
                        marginLeft={"1vw"}
                    />
                </Flex>
            </header>
        );
    }
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
