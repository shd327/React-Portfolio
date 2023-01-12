import React from 'react'
import Typewriters from 'typewriter-effect';
export default function Typewriter() {
    return (
        <Typewriters
            onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    .start();
            }}
        />
    )
}
