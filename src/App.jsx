import './index.css';
import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./assets/Layout.jsx";
import Home from "./assets/Home.jsx";
import Beats from "./assets/Beats.jsx";
import BeatCreateForm from "./assets/BeatCreateForm.jsx";
import BeatDetail from "./assets/BeatDetail.jsx";
import BeatDelete from "./assets/BeatDelete.jsx";
import BeatEdit from "./assets/BeatEdit.jsx";



const routerOne =createBrowserRouter([
    {
        element:<Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/beats',
                element: <Beats/>
            },
            {
                path:'/beats/create',
                element:<BeatCreateForm/>
            },
            {
                path:'/beats/:id',
                element:<BeatDetail/>
            },
            {
                path:'/beats/:id/delete',
                element:<BeatDelete/>
            },
            {
                path:'/beats/:id/edit',
                element:<BeatEdit/>
            },

        ]

    }
])

function App() {
  const [count, setCount] = useState(0)

    return (
        <RouterProvider router={routerOne}/>
    )
}

export default App
