import DefaultLayout from '../layouts/DefaultLayout';
import DefaultManagerLayout from '../layouts/managers/DefaultManagerLayout';
import Home from '../pages/Home';
import LoginPage from '../pages/loginPage/LoginPage';
import SellingPage from '../pages/sellingPage/SellingPage';

interface LayoutProps {
    childen: React.ReactNode;
    requireRole?: number;
    whenRoleUnMatchNavTo?: string;
}

interface RouteProps {
    path: string;
    component: () => JSX.Element;
    layout: ({ childen, requireRole, whenRoleUnMatchNavTo }: LayoutProps) => JSX.Element;
}

const publicRoutes: RouteProps[] = [
    // { path: '/', component: HomePage, layout: DefaultLayout },
    { path: '/login', component: LoginPage, layout: DefaultLayout },
    { path: '/', component: Home, layout: DefaultLayout },
];

const managerRoutes: RouteProps[] = [
    { path: '/manager/', component: SellingPage, layout: DefaultManagerLayout },
];

export { publicRoutes, managerRoutes };
