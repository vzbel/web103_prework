import './App.css'
import { useRoutes } from 'react-router'

import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

function App() {
  let element = useRoutes([
    { 
      // show all creators
      path: "/creators",
      element: <ShowCreators/>
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
