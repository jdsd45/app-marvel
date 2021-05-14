import { Comic } from "@shared/models/comic";
import { Adapter } from "./adapter";

export class ComicAdapter implements Adapter<Comic> {
    adapt(item: any): Comic {

        throw new Error("Method not implemented.");
    }

}