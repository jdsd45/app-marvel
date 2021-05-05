export interface Comic {
    id: number | null;
    title: string | null;
    description: string | null;
    thumbnail: {
        path: string,
        extension: string
    };
    pathToThumbnail: string;
}

export class ComicDto implements Comic {

    id: number;
    title: string;
    description: string;
    thumbnail: { path: string; extension: string; };
    pathToThumbnail: string;

    constructor(comic: Comic) {
    }
}