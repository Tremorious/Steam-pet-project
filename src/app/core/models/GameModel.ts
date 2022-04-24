export interface Game {
    _id: string;
    name: string;
    tag: string;
    price: number | null;
    description: string;
    image: string;
    image_small: string;
    image_logo: string;
}

export interface GameAPI {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}
