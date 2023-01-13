import React from "react";
import Typewriters from "typewriter-effect";
// import "./Typewriters.css";
export default function Typewriter() {
  return (
    <div>
      <Typewriters
        options={{
          strings: ["I am a developer", "A IT professional"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
//   onInit={(typewriter) => {
//     typewriter
//       .typeString("I am a developer")
//       .pauseFor(2000)
//       .deleteAll()
//       .typeString("A IT professional")
//       .deleteAll()
//       .start()

//       .callFunction(() => {});
//   }}
