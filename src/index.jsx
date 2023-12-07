import React from "react";
import ReactDOMClient from "react-dom/client";
import { ArbitrationVirtual } from "./screens/ArbitrationVirtual";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ArbitrationVirtual />);
