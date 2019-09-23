import React from 'react';

const EquipmentLocation = React.lazy(() => import('./views/EquipmentLocation/Equipment'));
const FracPump = React.lazy(() => import('./views/FracPumps/FracPump'));
const FracPumps = React.lazy(() => import('./views/FracPumps/FracPumps'));
const Blender = React.lazy(() => import('./views/Equipment/Blenders/Blender'));
const Blenders = React.lazy(() => import('./views/Equipment/Blenders/Blenders'));
const DataVan = React.lazy(() => import('./views/Equipment/DataVans/DataVan'));
const DataVans = React.lazy(() => import('./views/Equipment/DataVans/DataVans'));
const Hydration = React.lazy(() => import('./views/Equipment/Hydrations/Hydration'));
const Hydrations = React.lazy(() => import('./views/Equipment/Hydrations/Hydrations'));
const Tractors = React.lazy(() => import('./views/Equipment/Tractors/Tractors'));
const Tractor = React.lazy(() => import('./views/Equipment/Tractors/Tractor'));
const Users = React.lazy(() => import('./views/Users/Users'));
const Fleet1Users = React.lazy(() => import('./views/Users/Fleet1Users/Fleet1Users'));
const Fleet2Users = React.lazy(() => import('./views/Users/Fleet2Users/Fleet2Users'));
const Fleet3Users = React.lazy(() => import('./views/Users/Fleet3Users/Fleet3Users'));
const Fleet4Users = React.lazy(() => import('./views/Users/Fleet4Users/Fleet4Users'));
const Fleet5Users = React.lazy(() => import('./views/Users/Fleet5Users/Fleet5Users'));
const Fleet6Users = React.lazy(() => import('./views/Users/Fleet6Users/Fleet6Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Pads = React.lazy(() => import('./views/Pads/Pads'));
const Pad = React.lazy(() => import('./views/Pads/Pad'));
const Well = React.lazy(() => import('./views/Wells/Well'));
const Wells = React.lazy(() => import('./views/Wells/Wells'));
const FluidEnd = React.lazy(() => import('./views/FluidEnds/FluidEnd'));
const FluidEnds = React.lazy(() => import('./views/FluidEnds/FluidEnds'));
const EOS = React.lazy(() => import('./views/EOS/CompanyEOS/EOS'));
const EOS1 = React.lazy(() => import('./views/EOS/EOS1/EOS1'));
const EOS2 = React.lazy(() => import('./views/EOS/EOS2/EOS2'));
const EOS3 = React.lazy(() => import('./views/EOS/EOS3/EOS3'));
const EOS4 = React.lazy(() => import('./views/EOS/EOS4/EOS4'));
const AddFleet = React.lazy(() => import('./views/OpsFleets/AddFleet/AddFleet'));
const Fleet6 = React.lazy(() => import('./views/OpsFleets/Fleet6/Fleet6'));
const Fleet5 = React.lazy(() => import('./views/OpsFleets/Fleet5/Fleet5'));
const Fleet4 = React.lazy(() => import('./views/OpsFleets/Fleet4/Fleet4'));
const Fleet2 = React.lazy(() => import('./views/OpsFleets/Fleet2/Fleet2'));
const Fleet3 = React.lazy(() => import('./views/OpsFleets/Fleet3/Fleet3'));
const Fleets = React.lazy(() => import('./views/OpsFleets/Fleet1/Fleet1'));
const PumpMaintenance = React.lazy(() => import('./views/PumpMaintenance/PumpMaintenance'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/Equipment', exact: true, name: 'Equipment', component: FracPump },
  { path: '/Equipment/EquipmentLocation', exact: true, name: 'Equipment', component: EquipmentLocation },
  { path: '/FracPumps', exact: true, name: 'FracPumps', component: FracPumps },
  { path: '/FracPumps/:id', exact: true, name: 'Frac Pump', component: FracPump },
  { path: '/Equipment/Blenders/:id', exact: true, name: 'Blender', component: Blender },
  { path: '/Equipment/Blenders', exact: true, name: 'Blenders', component: Blenders },
  { path: '/Equipment/DataVans', exact: true, name: 'DataVan', component: DataVans },
  { path: '/Equipment/DataVans/:id', exact: true, name: 'DataVan', component: DataVan },
  { path: '/CompanyEOS', name: 'EOS', component: EOS },
  { path: '/EOS/EOS1', name: 'Fleet 1', component: EOS1 },
  { path: '/EOS/EOS2', name: 'Fleet 2', component: EOS2 },
  { path: '/EOS/EOS3', name: 'Fleet 3', component: EOS3 },
  { path: '/ESO/EOS4', name: 'Fleet 4', component: EOS4 },
  { path: '/Equipment/Hydrations', exact: true,  name: 'Hydration', component: Hydrations },
  { path: '/Equipment/Hydrations/:id', exact: true, name: 'Hydration', component: Hydration },
  { path: '/Equipment/Tractors', exact: true, name: 'Tractors', component: Tractors },
  { path: '/Equipment/Tractors/:id', exact: true, name: 'Tractor Details', component: Tractor },
  { path: '/Fleets', exact: true, name: 'Fleets', component: Fleets },
  { path: '/OpsFleets/Fleet1', name: 'Fleet 1', component: Fleets },
  { path: '/OpsFleets/Fleet2', name: 'Fleet 2', component: Fleet2 },
  { path: '/OpsFleets/Fleet3', name: 'Fleet 3', component: Fleet3 },
  { path: '/OpsFleets/Fleet4', name: 'Fleet 4', component: Fleet4 },
  { path: '/OpsFleets/Fleet5', name: 'Fleet 5', component: Fleet5 },
  { path: '/OpsFleets/Fleet6', name: 'Fleet 6', component: Fleet6 },
  { path: '/OpsFleets/AddFleet', name: 'Add Fleet', component: AddFleet },
  { path: '/PumpMaintenance', exact: true, name: 'PumpMaintenance', component: PumpMaintenance },
  { path: '/PumpMaintenance/:id', exact: true, name: 'PumpMaintenance', component: PumpMaintenance },
  { path: '/Users', exact: true, name: 'Users', component: Users },
  { path: '/Users/Fleet1Users', exact: true,  name: 'Fleet 1', component: Fleet1Users },
  { path: '/Users/Fleet2Users', exact: true,  name: 'Fleet 2', component: Fleet2Users },
  { path: '/Users/Fleet3Users', exact: true,  name: 'Fleet 3', component: Fleet3Users },
  { path: '/Users/Fleet4Users', exact: true,  name: 'Fleet 4', component: Fleet4Users },
  { path: '/Users/Fleet5Users', exact: true,  name: 'Fleet 5', component: Fleet5Users },
  { path: '/Users/Fleet6Users', exact: true,  name: 'Fleet 6', component: Fleet6Users },
  { path: '/Pads', exact: true,  name: 'Pads', component: Pads },
  { path: '/Pads/:id', exact: true,  name: 'Pad', component: Pad },  
  { path: '/FluidEnds', exact: true,  name: 'Fluid Ends', component: FluidEnds },
  { path: '/FluidEnds/:id', exact: true,  name: 'Fluid End', component: FluidEnd },
  { path: '/Wells', exact: true,  name: 'Wells', component: Wells },
  { path: '/Wells/:id', exact: true,  name: 'Wells', component: Well },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
