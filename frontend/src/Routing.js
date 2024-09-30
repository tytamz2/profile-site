import Home from './componets/Home/Home'
import Projects from './componets/Projects/Projects';
import Resume from './componets/Resume/Resume';
import Layout from '../src/componets/Layout/layout'

const routes = [
    {
        element:<Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/projects",
                element:<Projects />
            },
            {
                path:"/resume",
                element:<Resume />
            }
        ]
    }
]


export default routes;