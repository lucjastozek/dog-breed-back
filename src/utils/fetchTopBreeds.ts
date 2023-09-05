import { BreedProps } from "../interfaces/BreedProps";
import { backendApi } from "./requestConfig";

export async function fetchTopBreeds(
    setTopBreeds: React.Dispatch<React.SetStateAction<BreedProps[]>>
) {
    const response = await backendApi.get("/leaderboard");
    setTopBreeds(response.data);
}
