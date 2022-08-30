// Layouts
// import { HeaderOnly } from '~/Layouts';

// Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
// import Search from '~/pages/Search';
import config from '~/config';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: null },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
