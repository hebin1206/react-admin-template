import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'), loading: Loading });
const Explanation = Loadable({ loader: () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'), loading: Loading });
const AdminPage = Loadable({ loader: () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'), loading: Loading });
const GuestPage = Loadable({ loader: () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'), loading: Loading });
const EditorPage = Loadable({ loader: () => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'), loading: Loading });
const Menu1_1 = Loadable({ loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'), loading: Loading });
const Menu1_2_1 = Loadable({ loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'), loading: Loading });
const Error404 = Loadable({ loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'), loading: Loading });
const User = Loadable({ loader: () => import(/*webpackChunkName:'User'*/'@/views/user'), loading: Loading });
const Role = Loadable({ loader: () => import(/*webpackChunkName:'User'*/'@/views/role'), loading: Loading });
const Table = Loadable({ loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'), loading: Loading });

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin", "editor", "guest"] },
  { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin", "editor"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin", "editor"] },
  { path: "/table", component: Table, roles: ["admin", "editor", "guest"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/Role", component: Role, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
