export interface Profiles{
	results: Profile[]
}
export interface Profile{
	id: number,
	name: string,
	img: string
}
export interface ProfileInfo {
	name: string,
	img: string,
	results: ProfileItem[],
	goals: goals[],
	token: string
}
export interface ProfileItem{
	id: number,
	title: string,
	poster_path: string,
	type: 'movie' | 'serie'
}
export interface goals{
	id: number,
	name: string,
	detail: string,
	url: string
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
