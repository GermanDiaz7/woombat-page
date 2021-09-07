import Home from "../components/pages/Home/Home";
import Error from '../components/pages/Error/Error';

const routes = [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Error,
        path: '/**',
    }
]

export default routes