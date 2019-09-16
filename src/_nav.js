export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
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
      name: 'Crews',
      url: '/Crews',
      children: [
        {
          name: 'Crews',
          url: '/Crews',
        },
        {
          name: 'Fleet 1',
          url: '/Fleet1',
        },
        
      ]     
    },
    {
      name: 'Users',
      url: '/users',
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
          name: 'Add Fleet',
          url: '/Fleets/AddFleet',
        },
      ],
    },
    {
      name: 'Equipment',
      url: '/Equipment',
      children: [
        {
          name: 'All',
          url: '/Equipment/equipmentlocation',
        },
        {
          name: 'Frac Pumps',
          url: '/Equipment/FracPump',
        },
        {
          name: 'Blenders',
          url: '/Equipment/blender',
        },
        {
          name: 'Data Vans',
          url: '/Equipment/DataVan',
        },
        {
          name: 'Hydration',
          url: '/Equipment/Hydration',
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
      divider: true,
    },
  ],
};
