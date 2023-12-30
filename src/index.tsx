import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import {routes} from "./router";
import {ApolloProvider} from "@apollo/client";
import { client } from './client';
import { AdminAuthProvider } from './providers/AuthProvider';
import { GameProvider } from './providers/GameProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(routes)


root.render(
    <ApolloProvider client={client}>
      <AdminAuthProvider>
        <GameProvider>
            <RouterProvider router={router}/>
            </GameProvider>
            </AdminAuthProvider>
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
