import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './components/Search.jsx'
import Movie from './components/Movie.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Search />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
