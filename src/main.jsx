import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import {
  getContactLoader,
  geContactsLoader as rootLoader,
} from "./loaders/contactLoader";
import {
  action,
  createContactAction,
  deleteContactAction,
  editContactAction,
} from "./actions/contactActions";
import EditContact from "./editContact";
import Index from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: createContactAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: action,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement: <div>OOPS, there is an error!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
