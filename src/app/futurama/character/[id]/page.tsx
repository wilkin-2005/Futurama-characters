
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/app/futurama/futurama.module.css";
import { notFound } from "next/navigation";
import { CharacterProps, translateCharacterProps, getCharacterByIdREST } from "@/src/data/futurama-characters";



// Karaktärssidans funktion
export default async function CharacterPage(  { params }: { params: Promise<{ id: string }> }  )
{
    const { id: idStr } = await params;
    const idNr = Number(idStr);

    if(Number.isNaN(idNr))  { notFound(); }

    const character = await getCharacterByIdREST(idNr);

    if(!character)  { notFound(); }

    const translatedProps: CharacterProps = translateCharacterProps(character);


    return(
        <main>
            <Link href="/futurama" className={styles.go_back} >Backa till alla karaktärer</Link>

            <article className={styles.character_section}>

                <div> {
                    character.image &&
                    <Image alt="" src={character.image} width={800} height={600} />
                } </div>

                <div>
                    <h2 className={styles.heading2} > {translatedProps.name.toUpperCase()} </h2>

                    <p><b>Namn:</b> {translatedProps.name}</p>
                    <p><b>Kön:</b> {translatedProps.gender}</p>
                    <p><b>Status:</b> {translatedProps.status}</p>
                    <p><b>Art:</b> {translatedProps.species}</p>
                    <p><b>Skapad:</b> {translatedProps.createdAt}</p>
                </div>

            </article>
        </main>
    );
}