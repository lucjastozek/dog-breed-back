import { dogApi } from "./requestConfig";
export async function fetchImage() {
// setImageFn: React.Dispatch<React.SetStateAction<string>>,
// setNameFn: React.Dispatch<React.SetStateAction<string>>
    const response = await dogApi.get("/breeds/image/random");
    const imgLink = response.data.message;
    const name = imgLink.split("/")[4].split("-")[0];
    // setImageFn(imgLink);
    // setNameFn(name);

    return { imgLink, name };
}
