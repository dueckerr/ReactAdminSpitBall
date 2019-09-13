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
          url: '/buttons/Fleet1',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 2',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 3',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Fleet 4',
          url: '/buttons/brand-buttons',
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
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'All',
          url: '/base/equipmentlocation',
          icon: 'icon-puzzle',
        },
        {
          name: 'Frac Pumps',
          url: '/base/FracPump',
          icon: 'icon-puzzle',
        },
        {
          name: 'Blenders',
          url: '/base/blender',
          icon: 'icon-puzzle',
        },
        {
          name: 'Data Vans',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Hydration',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tractors',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'End of Shift Reports',
      url: '/base/EOS',
      icon: 'icon-puzzle',
    },
    {
      name: 'Parts',
      url: '/base/forms',
      icon: 'icon-puzzle',
    },
    {
      name: 'Reports',
      url: '/base/jumbotrons',
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
