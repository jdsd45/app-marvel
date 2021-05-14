import { Comic } from "./comic";

export interface CustomResponse {
    data: {
        results: Comic[]
    };
}