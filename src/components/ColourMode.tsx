import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

export function ColourMode(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex marginLeft={"2vw"} alignItems={"center"}>
            <Text>Use {colorMode === "light" ? "dark" : "light"}</Text>
            <Switch id="switch" onChange={toggleColorMode} marginLeft={"1vw"} />
        </Flex>
    );
}
