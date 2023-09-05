import {
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { BreedProps } from "../interfaces/BreedProps";

interface LeaderboardProps {
    topBreeds: BreedProps[];
}
export function Leaderboard({ topBreeds }: LeaderboardProps): JSX.Element {
    return (
        <div>
            <Heading>Leaderboard</Heading>
            <TableContainer width={"60vw"}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Rank</Th>
                            <Th>Breed name</Th>
                            <Th isNumeric>Votes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {topBreeds.map((breed: BreedProps, index) => (
                            <Tr key={breed.id}>
                                <Td>{index + 1}</Td>
                                <Td>{breed.breed}</Td>
                                <Td isNumeric>{breed.votes}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}
