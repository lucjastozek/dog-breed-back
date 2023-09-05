import {
    Heading,
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { BreedProps } from "../interfaces/BreedProps";
import { RepeatIcon } from "@chakra-ui/icons";
import { fetchTopBreeds } from "../utils/fetchTopBreeds";

interface LeaderboardProps {
    topBreeds: BreedProps[];
    setTopBreeds: React.Dispatch<React.SetStateAction<BreedProps[]>>;
}
export function Leaderboard({
    topBreeds,
    setTopBreeds,
}: LeaderboardProps): JSX.Element {
    async function handleRefresh() {
        fetchTopBreeds(setTopBreeds);
    }
    return (
        <div>
            <Heading>
                Leaderboard
                <IconButton
                    icon={<RepeatIcon />}
                    aria-label={""}
                    onClick={handleRefresh}
                    marginLeft={"43vw"}
                />
            </Heading>

            <TableContainer width={"60vw"}>
                <Table variant="simple" size={"lg"}>
                    <Thead>
                        <Tr fontSize={"2.5rem"}>
                            <Th>Rank</Th>
                            <Th>Breed name</Th>
                            <Th isNumeric>Votes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {topBreeds.map((breed: BreedProps, index) => (
                            <Tr key={breed.id} fontSize={"1.5rem"}>
                                <Td>{index + 1}</Td>
                                <Td textTransform={"capitalize"}>
                                    {breed.breed}
                                </Td>
                                <Td isNumeric>{breed.votes}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}
