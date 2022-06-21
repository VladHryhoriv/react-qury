export interface IPerson {
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	birth_year: string;
	gender: "male" | "female";
	homeworld: string;
	films: string[];
	starships: string[];
	created: Date;
	edited: string;
	url: string;
}
