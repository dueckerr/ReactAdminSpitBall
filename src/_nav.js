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
          url: '/Fleets/Fleet1',
        },
        {
          name: 'Fleet 2',
          url: '/Fleets/Fleet2',
        },
        {
          name: 'Fleet 3',
          url: '/Fleets/Fleet3',
        },
        {
          name: 'Fleet 4',
          url: '/Fleets/Fleet4',
        },
        {
          name: 'Fleet 5',
          url: '/Fleets/Fleet4',
        },
        {
          name: 'Fleet 6',
          url: '/Fleets/Fleet4',
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
    name: 'Crews',
    url: '/Crews',
    children: [
        {
          name: 'Fleet 1',
          url: '/dashboard',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },        
        {
          name: 'Fleet 2',
          url: '/Fleets/Fleet1',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },
        {
          name: 'Fleet 3',
          url: '/Fleets/Fleet3',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },
        {
          name: 'Fleet 4',
          url: '/Fleets/Fleet4',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },
        {
          name: 'Fleet 5',
          url: '/Fleets/AddFleet',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },
        {
          name: 'Fleet 6',
          url: '/Fleets/Fleet2',
          children: [
            {
              name: '-CREW 1',
              url: '/dashboard',
            },        
            {
              name: '-CREW 2',
              url: '/Fleets/Fleet1',
            },
            {
              name: '-CREW 3',
              url: '/Fleets/Fleet3',
            },
          ]
        },
      ],
   },
  {
      name: 'Fleets',
      url: '/dashboard',
      children: [
        {
          name: 'Fleet 1',
          url: '/dashboard',
        },        
        {
          name: 'Fleet 2',
          url: '/Fleets/Fleet1',
        },
        {
          name: 'Fleet 3',
          url: '/Fleets/Fleet3',
        },
        {
          name: 'Fleet 4',
          url: '/Fleets/Fleet4',
        },
        {
          name: 'Fleet 5',
          url: '/Fleets/AddFleet'
        },
        {
          name: 'Fleet 6',
          url: '/Fleets/Fleet2',
        },
      ],
   },
  ],
};
