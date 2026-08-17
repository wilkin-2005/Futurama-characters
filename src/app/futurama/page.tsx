
import styles from "./futurama.module.css";
import Hero from "@/src/components/hero/hero";
import Pagination from "@/src/components/pagination/pagination";
import { CharacterProps, CharacterResponse, getCharactersREST } from "@/src/data/futurama-characters";


// Returnerar innehållet i karaktärens kort
function CharacterCard({ id, name, image: imageUrl }: CharacterProps)
{
    return(
        <div className={styles.div_card}>

            <h3> Namn: <span> {name} </span> </h3>
            {
                imageUrl &&
                    <img alt="" src={imageUrl} width={400} height={352} />
            }
            <a href={`futurama/character/${id}`}>Läs mer...</a>

        </div>
    );
}



// Futurama-sidans funktion
export default async function FuturamaPage( { searchParams }: {
    searchParams: Promise<{ [key: string]: string | undefined }>
    })
{
    const { page = "1" } = await searchParams;

    const currentPage: number = (Number(page)) ? Number(page) : 1

    const response: CharacterResponse = await getCharactersREST(currentPage);

    return (
        <main>
            <Hero title="Futurama" imgIds={2} />

            <section className={styles.margin} aria-labelledby="characters-header">
                <h2 id="characters-header" className={styles.heading2}> Karaktärer </h2>

                <Pagination page={currentPage} pagesAmount={response.pages} showPageNr={false} />

                <ul className={styles.card_grid}>
                    {
                        response.items.map((char) => (
                            <li key={char.id}>
                                <CharacterCard id={char.id} name={char.name} image={char.image} status={char.status} />
                            </li>
                        ))
                    }
                </ul>

                <Pagination page={currentPage} pagesAmount={response.pages} showPageNr={true} />

            </section>
        </main>
    );
}