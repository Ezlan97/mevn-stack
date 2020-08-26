import Home from './components/home'
import Create from './components/create'
import Edit from './components/edit'
import Index from './components/index'

export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/create',
        component: Create,
        name: 'create'
    },
    {
        path: '/edit/:id',
        component: Edit,
        name: 'edit'
    },
    {
        path: '/posts',
        component: Index,
        name: 'posts'
    }
]