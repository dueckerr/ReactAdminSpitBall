import React from 'react';

const FracPump = React.lazy(() => import('./views/Equipment/FracPump/FracPump'));
const blender = React.lazy(() => import('./views/Equipment/Blender/blender'));
const DataVan = React.lazy(() => import('./views/Equipment/DataVan/DataVan'));
const EOS = React.lazy(() => import('./views/EOS/CompanyEOS/EOS'));
const EOS1 = React.lazy(() => import('./views/EOS/EOS1/EOS1'));
const EOS2 = React.lazy(() => import('./views/EOS/EOS2/EOS2'));
const EOS3 = React.lazy(() => import('./views/EOS/EOS3/EOS3'));
const EOS4 = React.lazy(() => import('./views/EOS/EOS4/EOS4'));
const Hydration = React.lazy(() => import('./views/Equipment/Hydration/Hydration'));
const Tractors = React.lazy(() => import('./views/Equipment/Tractors/Tractors'));
const Fleet4 = React.lazy(() => import('./views/Fleets/Fleet4/Fleet4'));
const Fleet2 = React.lazy(() => import('./views/Fleets/Fleet2/Fleet2'));
const Fleet3 = React.lazy(() => import('./views/Fleets/Fleet3/Fleet3'));
const Fleets = React.lazy(() => import('./views/Fleets/Fleet1/Fleet1'));
const PumpMaintenance = React.lazy(() => import('./views/PumpMaintenance/PumpMaintenance'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Crews = React.lazy(() => import('./views/Crews/Crews'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Equipment', exact: true, name: 'Equipment', component: FracPump },
  { path: '/Equipment/FracPump', name: 'FracPump', component: FracPump },
  { path: '/Equipment/blender', name: 'blender', component: blender },
  { path: '/Equipment/DataVan', name: 'DataVan', component: DataVan },
  { path: '/CompanyEOS', name: 'EOS', component: EOS },
  { path: '/EOS/EOS1', name: 'Fleet 1', component: EOS1 },
  { path: '/EOS/EOS2', name: 'Fleet 2', component: EOS2 },
  { path: '/EOS/EOS3', name: 'Fleet 3', component: EOS3 },
  { path: '/ESO/EOS4', name: 'Fleet 4', component: EOS4 },
  { path: '/Equipment/Hydration', name: 'Hydration', component: Hydration },
  { path: '/Equipment/Tractors', name: 'Tractors', component: Tractors },
  { path: '/Fleets', exact: true, name: 'Fleets', component: Fleets },
  { path: '/Fleets/Fleet1', name: 'Fleet 1', component: Fleets },
  { path: '/Fleets/Fleet2', name: 'Fleet 2', component: Fleet2 },
  { path: '/Fleets/Fleet3', name: 'Fleet 3', component: Fleet3 },
  { path: '/Fleets/Fleet4', name: 'Fleet 4', component: Fleet4 },
  { path: '/Crews', name: 'Crews', component: Crews },
  { path: '/PumpMaintenance', name: 'PumpMaintenance', component: PumpMaintenance },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
