import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { Hello } from "./components/Hello";
import { Goodbye } from "./components/Goodbye";

ReactDOM.render(
    <div>
        <Header />
        <Hello compiler="TypeScript" framework="React" />
        <Goodbye compiler="TypeScript" framework="React" />
    </div>,
    document.getElementById("react-root")
);
