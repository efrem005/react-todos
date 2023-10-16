import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter basename='/react-todos/'>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path=":filter" element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
