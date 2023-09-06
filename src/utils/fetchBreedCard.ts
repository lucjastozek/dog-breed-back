import { BreedCard } from "../interfaces/BreedCard";
import { dogApi } from "./requestConfig";

export async function fetchBreedCard(): Promise<BreedCard> {
    const response = await dogApi.get("/breeds/image/random");
    const imgLink = response.data.message;
    const name = imgLink.split("/")[4].split("-")[0];

    return { imgLink, name };
}
