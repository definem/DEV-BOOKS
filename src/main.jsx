
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router form './Router/index.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
);
