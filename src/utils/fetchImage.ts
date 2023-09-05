import { dogApi } from "./requestConfig";
export async function fetchImage() {
    const response = await dogApi.get("/breeds/image/random");
    const imgLink = response.data.message;
    const name = imgLink.split("/")[4].split("-")[0];

    return { imgLink, name };
}
