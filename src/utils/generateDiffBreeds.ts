import { fetchImage } from "./fetchImage";

export async function generateDiffBreeds() {
    const leftBreed = await fetchImage();
    let rightBreed = await fetchImage();

    while (leftBreed.name === rightBreed.name) {
        rightBreed = await fetchImage();
    }

    return {
        leftBreed: leftBreed,
        rightBreed: rightBreed,
    };
}
