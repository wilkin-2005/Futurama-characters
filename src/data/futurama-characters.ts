
import data from "./futurama-characters.json";
import { formatCharacterDate } from "@/src/lib/util";
import { DEFAULT_LIMIT } from "@/src/lib/globals";

export interface CharacterProps {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    image: string | null;
}


export interface CharacterResponse {
    items: CharacterProps[];
    page: number;
    pages: number;
    limit: number;
    total: number;
}



// Ger ut datan med Futurama-karaktärerna från den lokala json-filen.
export function getCharacters() {
    return data;
}


// Ger ut en enda Futurama-karaktär med ett visst ID, plockad från den lokala json-filen.
export function getCharacterById(id: number) {
    return data.items.find( (character) => character.id === id );
}



// Ger ut datan med Futurama-karaktärerna från Futurama APIt. Använder sig av REST.
export async function getCharactersREST(page = 1, limit = DEFAULT_LIMIT): Promise<CharacterResponse>
{
    let url = new URL("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc");

    url.searchParams.append( "page", String(page) );
    url.searchParams.append( "size", String(limit) );

    const fetchedData = await fetch(url);
    const jsonData = await fetchedData.json();

    return jsonData;
}


// Ger ut en enda Futurama-karaktär med ett visst ID. Använder sig av REST.
export async function getCharacterByIdREST(id: number): Promise<CharacterProps>
{
    const fetchedData = await fetch(`https://futuramaapi.com/api/characters/${id}`);

    return await fetchedData.json();
}



// Översätter karaktärens props till svenska för att inte behöva visas på engelska
export function translateCharacterProps(char: CharacterProps): CharacterProps
{
    // Översätter "gender" till svenska
    let genderProp: string | undefined;
    
    switch (char.gender?.toUpperCase()) {
        case "MALE":
            genderProp = "manlig";
        break;
        case "FEMALE":
            genderProp = "kvinnlig";
        break;
        case "UNKNOWN":
            genderProp = "okänt";
        break;
        default:
            genderProp = char.gender;
        break;
    }

    // Översätter "status" till svenska
    let statusProp: string | undefined;

    switch (char.status?.toUpperCase()) {
        case "ALIVE":
            statusProp = "lever";
            // "Still alive"
        break;
        case "DEAD":
            statusProp = "död";
        break;
        case "UNKNOWN":
            statusProp = "okänt";
        break;
        default:
            statusProp = char.status;
        break;
    }

    // Översätter "species" till svenska
    let speciesProp: string | undefined;

    switch (char.species?.toUpperCase()) {
        case "HUMAN":
            speciesProp = "människa";
        break;
        case "ROBOT":
            speciesProp = "robot";
        break;
        case "HEAD":
            speciesProp = "huvud";
            // "Gerbil took the top head"
        break;
        case "ALIEN":
            speciesProp = "alien/utomjording";
        break;
        case "MUTANT":
            speciesProp = "mutant";
        break;
        case "MONSTER":
            speciesProp = "monster";
            // "For science. You monster."
        break;
        case "UNKNOWN":
            speciesProp = "okänt";
        break;
        default:
            speciesProp = char.species;
        break;
    }

    // Ska ändra "createdAt" datumet till något mer läsbart. Gör dock ännu inget.
    let createdAtProp: string;
    createdAtProp = formatCharacterDate(char.createdAt);


    return {
        id: char.id,
        name: char.name,
        gender: genderProp,
        status: statusProp,
        species: speciesProp,
        createdAt: char.createdAt,
        image: char.image
    };
}