export interface Profile{
	id: number,
	name: string,
	img: string,
	password: string | null
}
export interface ProfileInfo {
	name: string,
	img: string,
	results: ProfileItem[],
	goals: Goal[],
	plan: {id: number, name: string, price: string, styleClass: string},
	password: boolean
}

export interface ProfileItem{
	id: number,
	original_title?: string,
	original_name?: string,
	poster_path: string,
	type: 'movie' | 'serie'
}

export interface Goal{
	id: number,
	url: string
	name: string,
	detail: string,
}

export interface RickAndMortyCharacters {
    info:    Info;
    results: Character[];
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
    origin:   {name: string, url: string};
    location: {name: string, url: string};
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

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
