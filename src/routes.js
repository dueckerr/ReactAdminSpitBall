import React from 'react';

const EquipmentLocation = React.lazy(() => import('./views/EquipmentLocation/Equipment'));
const FracPump = React.lazy(() => import('./views/FracPumps/FracPump'));
const FracPumps = React.lazy(() => import('./views/FracPumps/FracPumps'));
const blender = React.lazy(() => import('./views/Equipment/Blenders/blender'));
const blenders = React.lazy(() => import('./views/Equipment/Blenders/blenders'));
const DataVan = React.lazy(() => import('./views/Equipment/DataVans/DataVan'));
const DataVans = React.lazy(() => import('./views/Equipment/DataVans/DataVans'));
const Hydration = React.lazy(() => import('./views/Equipment/Hydrations/Hydration'));
const Hydrations = React.lazy(() => import('./views/Equipment/Hydrations/Hydrations'));
const Tractors = React.lazy(() => import('./views/Equipment/Tractors/Tractors'));
const Tractor = React.lazy(() => import('./views/Equipment/Tractors/Tractor'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Pads = React.lazy(() => import('./views/Pads/Pads'));
const Pad = React.lazy(() => import('./views/Pads/Pad'));
const Well = React.lazy(() => import('./views/Wells/Well'));
const Wells = React.lazy(() => import('./views/Wells/Wells'));
const EOS = React.lazy(() => import('./views/EOS/CompanyEOS/EOS'));
const EOS1 = React.lazy(() => import('./views/EOS/EOS1/EOS1'));
const EOS2 = React.lazy(() => import('./views/EOS/EOS2/EOS2'));
const EOS3 = React.lazy(() => import('./views/EOS/EOS3/EOS3'));
const EOS4 = React.lazy(() => import('./views/EOS/EOS4/EOS4'));
const Fleet4 = React.lazy(() => import('./views/Fleets/Fleet4/Fleet4'));
const Fleet2 = React.lazy(() => import('./views/Fleets/Fleet2/Fleet2'));
const Fleet3 = React.lazy(() => import('./views/Fleets/Fleet3/Fleet3'));
const Fleets = React.lazy(() => import('./views/Fleets/Fleet1/Fleet1'));
const PumpMaintenance = React.lazy(() => import('./views/PumpMaintenance/PumpMaintenance'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Crews = React.lazy(() => import('./views/Crews/Crews'));
const CrewFleet1 = React.lazy(() => import('./views/Crews/Crews'));
const CrewFleet2 = React.lazy(() => import('./views/Crews/Crews'));
const CrewFleet3 = React.lazy(() => import('./views/Crews/Crews'));
const CrewFleet4 = React.lazy(() => import('./views/Crews/Crews'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/Equipment', exact: true, name: 'Equipment', component: FracPump },
  { path: '/Equipment/EquipmentLocation', exact: true, name: 'Equipment', component: EquipmentLocation },
  { path: '/FracPumps', name: 'FracPumps', component: FracPumps },
  { path: '/FracPumps/:id', name: 'FracPumps', component: FracPump },
  { path: '/Equipment/blenders/:id', name: 'blender', component: blender },
  { path: '/Equipment/blenders', name: 'blenders', component: blenders },
  { path: '/Equipment/DataVans', name: 'DataVan', component: DataVans },
  { path: '/Equipment/DataVans/:id', name: 'DataVan', component: DataVan },
  { path: '/CompanyEOS', name: 'EOS', component: EOS },
  { path: '/EOS/EOS1', name: 'Fleet 1', component: EOS1 },
  { path: '/EOS/EOS2', name: 'Fleet 2', component: EOS2 },
  { path: '/EOS/EOS3', name: 'Fleet 3', component: EOS3 },
  { path: '/ESO/EOS4', name: 'Fleet 4', component: EOS4 },
  { path: '/Equipment/Hydrations', name: 'Hydration', component: Hydrations },
  { path: '/Equipment/Hydrations/:id', name: 'Hydration', component: Hydration },
  { path: '/Equipment/Tractors', name: 'Tractors', component: Tractors },
  { path: '/Equipment/Tractors/:id', name: 'Tractor Details', component: Tractor },
  { path: '/Fleets', exact: true, name: 'Fleets', component: Fleets },
  { path: '/Fleets/Fleet1', name: 'Fleet 1', component: Fleets },
  { path: '/Fleets/Fleet2', name: 'Fleet 2', component: Fleet2 },
  { path: '/Fleets/Fleet3', name: 'Fleet 3', component: Fleet3 },
  { path: '/Fleets/Fleet4', name: 'Fleet 4', component: Fleet4 },
  { path: '/Crews', name: 'Crews', component: Crews },
  { path: '/Crews/CrewFleet1', name: 'Crew Fleet 1', component: CrewFleet1 },
  { path: '/Crews/CrewFleet2', name: 'Crew Fleet 2', component: CrewFleet2 },
  { path: '/Crews/CrewFleet3', name: 'Crew Fleet 3', component: CrewFleet3 },
  { path: '/Crews/CrewFleet4', name: 'Crew Fleet 4', component: CrewFleet4 },
  { path: '/PumpMaintenance', name: 'PumpMaintenance', component: PumpMaintenance },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/Pads', exact: true,  name: 'Pads', component: Pads },
  { path: '/Pads/:id', exact: true,  name: 'Pads', component: Pad },
  { path: '/Wells', exact: true,  name: 'Wells', component: Wells },
  { path: '/Wells/:id', exact: true,  name: 'Wells', component: Well },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
