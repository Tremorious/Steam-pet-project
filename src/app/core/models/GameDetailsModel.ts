export interface GameDetails {
    description: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    minimum_system_requirements: MinimumSystemDetail;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots: Array<string>;
    short_description: string;
    status: string;
    thumbnail: string;
    title: string;
}

interface MinimumSystemDetail {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}
