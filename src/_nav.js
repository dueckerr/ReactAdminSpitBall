export default {
  items: [
    {
      title: true,
      name: 'Frac Insite',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Field Operations',
      url: '/dashboard',
      children: [
        {
          name: 'Company Overview',
          url: '/dashboard',
        },        
        {
          name: 'Fleet 1',
          url: '/OpsFleets/Fleet1',
        },
        {
          name: 'Fleet 2',
          url: '/OpsFleets/Fleet2',
        },
        {
          name: 'Fleet 3',
          url: '/OpsFleets/Fleet3',
        },
        {
          name: 'Fleet 4',
          url: '/OpsFleets/Fleet4',
        },
        {
          name: 'Fleet 5',
          url: '/OpsFleets/Fleet4',
        },
        {
          name: 'Fleet 6',
          url: '/OpsFleets/Fleet4',
        },
      ],
    },
    {
      name: 'Equipment',
      url: '/Equipment',
      children: [
        {
          name: 'All',
          url: '/Equipment/Equipmentlocation',
        },
        {
          name: 'Frac Pumps',
          url: '/FracPumps',
        },
        {
          name: 'Blenders',
          url: '/Equipment/blenders',
        },
        {
          name: 'Data Vans',
          url: '/Equipment/DataVans',
        },
        {
          name: 'Hydration',
          url: '/Equipment/Hydrations',
        },
        {
          name: 'Tractors',
          url: '/Equipment/Tractors',
        }
      ],
    },
    {
      name: 'End of Shift Reports',
      url: '/EOS',
      children: [
        {
          name: 'Company Overview',
          url: '/CompanyEOS',
        },        
        {
          name: 'Fleet 1',
          url: '/EOS/EOS1',
        },
        {
          name: 'Fleet 2',
          url: '/EOS/EOS2',
        },
        {
          name: 'Fleet 3',
          url: '/EOS/EOS3',
        },
        {
          name: 'Fleet 4',
          url: '/EOS/EOS4',
        },
      ],
    },
    {
      name: 'Parts',
      url: '/Equipment/forms',
    },
    {
        name: 'Reports',
      url: '/Equipment/jumbotrons',
    },
    {
      name: 'Pump Maintenance',
      url: '/PumpMaintenance',
    },
        {
      name: 'Fluid Ends',
      url: '/FluidEnds',
    },
    {
      divider: true,
    },
    {
      name: 'Pads',
      url: '/Pads',
    },
    {
      name: 'Wells',
      url: '/Wells',
    },
  {
    name: 'Users',
    url: '/Crews',
    children: [
        {
          name: 'All',
          url: '/users',
        },        
        {
          name: 'Fleet 1',
          url: 'Users/Fleet1Users',
        },        
        {
          name: 'Fleet 2',
          url: 'Users/Fleet2Users',
        },        
        {
          name: 'Fleet 3',
          url: 'Users/Fleet3Users',
        },        
        {
          name: 'Fleet 4',
          url: 'Users/Fleet4Users',
        },        
        {
          name: 'Fleet 5',
          url: 'Users/Fleet5Users',
        },        
        {
          name: 'Fleet 6',
          url: 'Users/Fleet6Users',
        },        
      ],
   },

  ],
};
