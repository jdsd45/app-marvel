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