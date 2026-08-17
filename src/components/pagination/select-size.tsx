
"use client";

import styles from "./pagination.module.css";


// function updateSize(value: any) { }

function updateSize(e: React.ChangeEvent<HTMLSelectElement>): void
{
    // https://youtu.be/YfmfxEWKztM?si=31LHvLD1HQLOEE_m

    console.log("Change size to: " + e.target.value);
}


// 
export default function SelectSize(){

    return (
        <select id="size" name="size" defaultValue={16}
        onChange={updateSize}
        >
            <option value={ 8} > 8 </option>
            <option value={12}> 12 </option>
            <option value={16}> 16 </option>
            <option value={20}> 20 </option>
            <option value={24}> 24 </option>
            <option value={28}> 28 </option>
            <option value={32}> 32 </option>
        </select>
    );
}