"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


export default function AboutPage()
{
    const [headerText, setHeaderText] = useState("!Om oss!");

    useEffect( () =>
        setHeaderText(`${headerText} på ${new Date()}`),
    []);

    return (
        <main>
            <Image src="https://picsum.photos/1920/320?random" alt="" width={1920} height={320} />
            <h1 className="main-header">{headerText}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis nulla eget mi consectetur pellentesque. Nunc pellentesque dolor nec risus eleifend, in luctus ligula ultricies. Suspendisse vitae felis nec eros accumsan condimentum. Praesent facilisis metus sit amet tincidunt pellentesque. Donec vitae magna nisi. Vivamus interdum maximus diam. Curabitur ultricies mi eleifend nibh vehicula, sit amet accumsan ipsum posuere. Curabitur finibus, elit sed molestie malesuada, neque est vehicula lectus, ac porttitor elit enim et libero. In imperdiet fermentum feugiat. Suspendisse rutrum eu elit at tincidunt. Sed pulvinar dictum efficitur. Nunc eros elit, malesuada in faucibus a, aliquet et nulla. In sodales justo ut purus lobortis, non sagittis ex semper. In ullamcorper at neque sit amet sollicitudin.
            </p>
            <p>
                Nunc viverra risus ex, eget pellentesque sapien facilisis nec. Maecenas lacinia commodo neque, id vulputate lorem malesuada sit amet. In hac habitasse platea dictumst. Cras gravida et lacus nec rhoncus. Nam dictum augue et leo ullamcorper consequat. Integer a aliquet purus, et hendrerit felis. Cras porta mi eros, eget fringilla mauris tristique ac. Proin pellentesque lacus sit amet pretium accumsan. Suspendisse potenti. Maecenas interdum leo at ipsum mollis, non ultricies est luctus. Praesent sollicitudin urna arcu, in aliquam mauris molestie scelerisque. Suspendisse consectetur ultricies nulla, luctus dapibus odio rutrum nec. Ut fringilla a nibh quis sollicitudin.
            </p>
            <p>
                Fusce tempus sit amet arcu a consectetur. Aliquam lorem nisi, ornare quis rutrum molestie, vulputate in justo. Sed tincidunt venenatis sagittis. Vestibulum sed leo ex. Mauris blandit quam quis urna vulputate auctor. Sed non tellus tortor. Vestibulum molestie, neque nec dignissim maximus, dui metus rutrum diam, sed ultrices ligula arcu in justo. Morbi venenatis felis eros, vitae bibendum lacus placerat a. Duis a eleifend turpis.
            </p>
        </main>
    );
}