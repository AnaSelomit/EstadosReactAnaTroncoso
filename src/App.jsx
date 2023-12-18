import { useState } from "react";
import "./App.css";
import Registro from "./componenetes/Registro";
import Footter from "./componenetes/Footter";

function App() {
    return (
        <>
            <main>
                <Registro></Registro>
            </main>
            <footer>
                <Footter></Footter>
            </footer>
        </>
    );
}

export default App;
