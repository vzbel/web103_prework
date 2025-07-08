import './App.css'
import { useRoutes } from 'react-router'

// pages
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

import { supabase } from './client.js'
import { useEffect, useState } from 'react'

function App() {
  // Get creators data from DB
  const [creators, setCreators] = useState(null)
  useEffect(()=>{
      async function getCreators(){
        const {data} = await supabase.from("creators").select()
        setCreators(data)
      }
      getCreators()
  }, [])

  // Routes
  let element = useRoutes([
    { 
      // show all creators
      path: "/",
      element: <ShowCreators creators={creators}/>
    },
    {
      // view a specific creator by id
      path: "/creators/:id",
      element: <ViewCreator />
    },
    {
      // edit a creator's page by id
      path: "/creators/:id/edit",
      element: <EditCreator />
    },
    {
      // add a new creator
      path: "/creators/add",
      element: <AddCreator />
    }
  ])
  return element
}

export default App
