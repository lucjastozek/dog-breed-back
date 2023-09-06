import { fetchBreedCard } from "./fetchImage";

export async function generateDiffBreeds() {
    const leftBreed = await fetchBreedCard();
    let rightBreed = await fetchBreedCard();

    while (leftBreed.name === rightBreed.name) {
        rightBreed = await fetchBreedCard();
    }

    return {
        leftBreed: leftBreed,
        rightBreed: rightBreed,
    };
}
