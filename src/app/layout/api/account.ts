export interface Account {
    idRef?: string,
    profiles: Profile[],
    uid: string
}
export interface Profile{
    id: number, 
    user_id: number,
    name: string, 
    img: string,
    // favorite: Favorite
}
export interface RickAndMortyCharacters {
    info:    Info;
    results: Character[];
}
export interface Favorite{
    refDocMovies: string[],
    refDocSeries: string[]
}
export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Character {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
