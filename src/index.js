import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import TodoApp from "./components/todo/todo-app";
import UserPage from "./pages/users";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // con trong router
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: (
          <div>
            <UserPage />
          </div>
        ),
      },
      {
        path: "/products",
        element: <div>Products</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/register",
    element: <div>register Page</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
