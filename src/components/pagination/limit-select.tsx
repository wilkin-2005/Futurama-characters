
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_LIMIT } from "@/src/lib/globals";
import styles from "./pagination.module.css";


// Komponent för att välja hur många karaktärskort ska visas åt gången.
export default function LimitSelect()
{
    const searchParams = useSearchParams();
    const router = useRouter();
    const limit: string = searchParams.get("limit") || DEFAULT_LIMIT.toString();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const newSearchParams = new URLSearchParams( searchParams.toString() );
        const newLimit = event.target.value;

        newSearchParams.set("limit", newLimit);
        // newSearchParams.delete("page");

        router.push( "/futurama?" + newSearchParams.toString() );
    }

    return (
        <div>
            <label htmlFor="limit-selector">Kort per sida</label>
            
            <select id="limit-selector" name="limit" defaultValue={limit}
            onChange={handleChange}
            >
                <option> { 8} </option>
                <option> {16} </option>
                <option> {24} </option>
                <option> {32} </option>
                <option> {48} </option>
                <option> {64} </option>
            </select>
        </div>
    );
}