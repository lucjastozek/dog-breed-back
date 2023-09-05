import { BreedProps } from "../interfaces/BreedProps";
import { useEffect, useState } from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { fetchImages } from "../utils/fetchImages";

interface TopImagesProps {
    top3Breeds: BreedProps[];
}

export function TopImages({ top3Breeds }: TopImagesProps): JSX.Element {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetchImages(top3Breeds, setImages);
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
