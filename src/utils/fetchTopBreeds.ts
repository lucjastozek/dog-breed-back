import { backendApi } from "./requestConfig";

export async function fetchTopBreeds() {
    const response = await backendApi.get("/leaderboard");

    return response.data;
}
