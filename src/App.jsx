import React from 'react'
import Application from "./components/aplication/Aplication";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter basename='/story'>
            <Application/>
        </BrowserRouter>
    );
}

export default App