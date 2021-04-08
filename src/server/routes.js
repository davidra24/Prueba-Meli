import  Detail  from "../frontend/pages/Detail";
import  {Main}  from "../frontend/pages/Main";
import  Results  from "../frontend/pages/Results";
import  NotFound  from "../frontend/pages/NotFound";

/**
 * Rutas de React para SSR
 */
export const routes = [
    {
        exact: true,
        path: '/',
        component: Main
    },
    {
        exact: true,
        path: '/items',
        component: Results
    },  
    {
        exact: true,
        path: '/items/:id',
        component: Detail
    },
    {
        exact: true,
        path: '/404',
        component: NotFound
    }
]