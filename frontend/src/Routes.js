import Home from './componets/Home/Home'
import Layout from './componets/Layout/layout'
import Projects from './componets/Projects/Projects'
import Resume from './componets/Resume/Resume'
import Links from './componets/Links/Links'

const Routes = [
    {
        element:<Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/resume',
                element:<Resume/>
            },
            {
                path: '/links',
                element:<Links/>
            }
        ]
    }
]

export default Routes