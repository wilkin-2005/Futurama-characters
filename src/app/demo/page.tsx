
"use client";

import { useState, useEffect } from "react";
import "./demo-page.css";


// 
export default function DemoPage()
{
    const [text1, setText1] = useState("First");

    useEffect( () => {
        document.title = `Hej! + ${text1.length + text2.length}`;
    });

    const [text2, setText2] = useState("Last");

    const [selectNr, setSelectNr] = useState("0");

    return(
        <div>
            <h3>Testar useState och useEffect</h3>

            <input onChange={ (e) => setText1(e.target.value) } value={text1} />

            <input onChange={ (e) => setText2(e.target.value) } value={text2} />

            <select id="size" name="size" defaultValue={16}
            onChange={ (e) =>  setSelectNr(e.target.value) }
            >
                <option value={ 8} > 8 </option>
                <option value={12}> 12 </option>
                <option value={16}> 16 </option>
                <option value={20}> 20 </option>
                <option value={24}> 24 </option>
                <option value={28}> 28 </option>
                <option value={32}> 32 </option>
            </select>

            <p><i> {text1} {text2} </i> <br/> <b> selectNr = {selectNr} </b></p>
        </div>
    );
}