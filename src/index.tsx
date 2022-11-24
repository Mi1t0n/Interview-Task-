import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/App/App";
import {worker} from "./mocks/browser";
import {StyledEngineProvider} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";

worker.start()

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <App/>
            </LocalizationProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);