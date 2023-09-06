import { dogApi } from "./requestConfig";

export async function fetchBreedImageLinks(
    breedArray: string[]
): Promise<string[]> {
    const imgs = [];

    for (const breed of breedArray) {
        const response = await dogApi.get(`breed/${breed}/images/random`);

        imgs.push(response.data.message);
    }

    return imgs;
}
