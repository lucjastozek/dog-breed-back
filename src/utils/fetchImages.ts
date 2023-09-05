import { BreedProps } from "../interfaces/BreedProps";
import { dogApi } from "./requestConfig";

export async function fetchImages(top3Breeds: BreedProps[]) {
    const imgs = [];

    for (const breed of top3Breeds) {
        const response = await dogApi.get(`breed/${breed.breed}/images`);

        imgs.push(response.data.message[0]);
    }

    return imgs;
}
