import { BreedProps } from "../interfaces/BreedProps";
import { dogApi } from "./requestConfig";

export async function fetchImages(
    top3Breeds: BreedProps[],
    setImages: React.Dispatch<React.SetStateAction<string[]>>
) {
    setImages([]);
    for (const breed of top3Breeds) {
        const response = await dogApi.get(`breed/${breed.breed}/images`);

        setImages((prev) => [...prev, response.data.message[0]]);
    }
}
