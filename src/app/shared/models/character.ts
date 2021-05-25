export interface Character {
    id: number | null;
    name: string | null;
    description: string | null;
    thumbnail: {
        path: string,
        extension: string
    };
}