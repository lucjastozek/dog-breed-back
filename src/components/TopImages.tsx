import { Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BreedProps } from "../interfaces/BreedProps";
import { fetchBreedImageLinks } from "../utils/fetchBreedImageLinks";

interface TopImagesProps {
    top3Breeds: BreedProps[];
}

export function TopImages({ top3Breeds }: TopImagesProps): JSX.Element {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetchBreedImageLinks(top3Breeds.map((breed) => breed.breed)).then(
            (imgs) => setImages(imgs)
        );
    }, [top3Breeds]);

    return (
        <Flex margin={"2vh"} direction={"column"}>
            <Heading>Top 3 Breeds!</Heading>
            {images.map((img, index) => (
                <Image
                    src={img}
                    key={index}
                    width={"20vw"}
                    objectFit={"cover"}
                />
            ))}
        </Flex>
    );
}
