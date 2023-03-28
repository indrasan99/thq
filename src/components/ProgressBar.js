import { useState } from "react";

function ProgressBar(props) {
    const [completed] = props;

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 w-screen h-4 bg-hunter transition duration-300 ease-in-out opacity-100 z-[999]"></div>
        </div>
    );
}

export default ProgressBar;