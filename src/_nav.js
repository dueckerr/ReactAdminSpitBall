export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
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
      name: 'Users',
      url: '/users',
      icon: 'icon-drop',
    },

    {
      name: 'Frac InSite',
      url: '/dashboard',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Company Overview',
          url: '/dashboard',
          icon: 'icon-cursor',
        },        
        {
          name: 'Fleet 1',
          url: '/Fleets/Fleet1',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 2',
          url: '/Fleets/Fleet2',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 3',
          url: '/Fleets/Fleet3',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 4',
          url: '/Fleets/Fleet4',
          icon: 'icon-cursor',
        },
        {
          name: 'Add Fleet',
          url: '/Fleets/AddFleet',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Equipment',
      url: '/Equipment',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All',
          url: '/Equipment/equipmentlocation',
          icon: 'icon-puzzle',
        },
        {
          name: 'Frac Pumps',
          url: '/Equipment/FracPump',
          icon: 'icon-puzzle',
        },
        {
          name: 'Blenders',
          url: '/Equipment/blender',
          icon: 'icon-puzzle',
        },
        {
          name: 'Data Vans',
          url: '/Equipment/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Hydration',
          url: '/Equipment/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tractors',
          url: '/Equipment/paginations',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'End of Shift Reports',
      url: '/Equipment/EOS',
      icon: 'icon-puzzle',
    },
    {
      name: 'Parts',
      url: '/Equipment/forms',
      icon: 'icon-puzzle',
    },
    {
      name: 'Reports',
      url: '/Equipment/jumbotrons',
      icon: 'icon-puzzle',
    },
    {
      name: 'Pump Maintenance',
      url: '/PumpMaintenance',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
        {
          name: 'FIM',
          url: '/notifications/test',
          icon: 'icon-drop',
        },
      ],
    },
    {
      divider: true,
    },
  ],
};
