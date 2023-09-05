import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

export function ColourMode(): JSX.Element {
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
