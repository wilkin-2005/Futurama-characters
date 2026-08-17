
import Link from "next/link";
import styles from "./pagination.module.css";
import SelectSize from "./select-size";

interface paginationProps {
    page: number;
    pagesAmount: number;
    showPageNr: boolean;
}

export default function Pagination( { page, pagesAmount, showPageNr }: paginationProps )
{
    return (
        <section aria-label="Pagination">
            <div className={styles.pagination_div}>
                <Link href={`futurama/?page=${1}`} > Första sidan </Link>

                <Link href={`futurama/?page=${page-1}`} > Föregående sida </Link>

                <SelectSize />


                <span className={styles.middle_splitter} ></span>


                {/* Hindrar användaren från att klicka vidare till nästa sida när det inte finns någon nästa sida */}
                {
                    page < pagesAmount &&
                    <Link href={`futurama/?page=${page+1}`} > Nästa sida </Link>
                }
                {
                    page >= pagesAmount &&
                    <Link href={`futurama/?page=${page}`} > Nästa sida </Link>
                }

                <Link href={`futurama/?page=${pagesAmount}`} > Sista sidan </Link>
            </div>

            {
                showPageNr &&
                <p className={styles.pages} > {`Sida ${page} av ${pagesAmount}`} </p>
            }
        </section>
    );
}