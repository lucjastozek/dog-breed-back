import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    useColorMode,
} from "@chakra-ui/react";
import { VotingView } from "./votingView";

export function TabsView(): JSX.Element {
    function ColourMode(): JSX.Element {
        const { colorMode, toggleColorMode } = useColorMode();
        return (
            <header>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </header>
        );
    }
    return (
        <Tabs variant="soft-rounded" colorScheme="green" height={"100vh"}>
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
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
