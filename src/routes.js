import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Equipment/EquipmentLocation/Equipment'));
const FracPump = React.lazy(() => import('./views/Equipment/FracPump/FracPump'));
const blender = React.lazy(() => import('./views/Equipment/Blender/blender'));
const Collapses = React.lazy(() => import('./views/Equipment/Collapses/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Equipment/Dropdowns/Dropdowns'));
const Forms = React.lazy(() => import('./views/Equipment/Forms/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Equipment/Jumbotrons/Jumbotrons'));
const EOS = React.lazy(() => import('./views/Equipment/EOS/EOS'));
const Navbars = React.lazy(() => import('./views/Equipment/Navbars/Navbars'));
const Navs = React.lazy(() => import('./views/Equipment/Navs/Navs'));
const Paginations = React.lazy(() => import('./views/Equipment/Paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/Equipment/Popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Equipment/ProgressBar/ProgressBar'));
const Switches = React.lazy(() => import('./views/Equipment/Switches/Switches'));
const Tables = React.lazy(() => import('./views/Equipment/Tables/Tables'));
const Tabs = React.lazy(() => import('./views/Equipment/Tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/Equipment/Tooltips/Tooltips'));
const Fleet4 = React.lazy(() => import('./views/Fleets/Fleet4/Fleet4'));
const Fleet2 = React.lazy(() => import('./views/Fleets/Fleet2/Fleet2'));
const Fleet3 = React.lazy(() => import('./views/Fleets/Fleet3/Fleet3'));
const Fleets = React.lazy(() => import('./views/Fleets/Fleet1/Fleet1'));
const PumpMaintenance = React.lazy(() => import('./views/PumpMaintenance/PumpMaintenance'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Test = React.lazy(() => import('./views/Notifications/Test/Test'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/Equipment', exact: true, name: 'Equipment', component: FracPump },
  { path: '/Equipment/FracPump', name: 'FracPump', component: FracPump },
  { path: '/Equipment/forms', name: 'Forms', component: Forms },
  { path: '/Equipment/switches', name: 'Switches', component: Switches },
  { path: '/Equipment/tables', name: 'Tables', component: Tables },
  { path: '/Equipment/tabs', name: 'Tabs', component: Tabs },
  { path: '/Equipment/EquipmentLocation', name: 'Equipment', component: Breadcrumbs },
  { path: '/Equipment/blender', name: 'blender', component: blender },
  { path: '/Equipment/collapses', name: 'Collapse', component: Collapses },
  { path: '/Equipment/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/Equipment/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/Equipment/EOS', name: 'EOS', component: EOS },
  { path: '/Equipment/navbars', name: 'Navbars', component: Navbars },
  { path: '/Equipment/navs', name: 'Navs', component: Navs },
  { path: '/Equipment/paginations', name: 'Paginations', component: Paginations },
  { path: '/Equipment/popovers', name: 'Popovers', component: Popovers },
  { path: '/Equipment/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/Equipment/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/Fleets', exact: true, name: 'Fleets', component: Fleets },
  { path: '/Fleets/Fleet1', name: 'Fleet 1', component: Fleets },
  { path: '/Fleets/Fleet2', name: 'Fleet 2', component: Fleet2 },
  { path: '/Fleets/Fleet3', name: 'Fleet 3', component: Fleet3 },
  { path: '/Fleets/Fleet4', name: 'Fleet 4', component: Fleet4 },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/test', name: 'Test', component: Test },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/PumpMaintenance', name: 'PumpMaintenance', component: PumpMaintenance },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
