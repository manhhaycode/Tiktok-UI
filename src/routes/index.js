import config from '~/config';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import HeaderOnly from '~/layouts/HeaderOnly';
import Search from '~/Pages/Search';
import UserProfile from '~/Pages/UserProfile';
import Live from '~/Pages/Live';

//Public routes
const publicRoutes = [
    { path: config.routes.userProfile, component: UserProfile },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];

export { publicRoutes };
