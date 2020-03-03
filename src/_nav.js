export default {
  items: [

    /* {
      title: true,
      name: 'Side menu',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    }, */
    {
      name: 'Subscribers',
      icon: 'icon-user',
      children: [
        {
          name: 'List',
          url: '/subscribers',
          icon: 'icon-list'
        },
        {
          name: 'Add',
          url: '/subscriber',
          icon: 'icon-plus'
        }
      ]
    },
    {
      name: 'Locations',
      url: '/locations',
      icon: 'fa fa-building',
      children: [
        {
          name: 'New location',
          url: '/locations/new',
          icon: 'icon-heart'
        }        
      ]
    },
    {
      name: 'Inventory',
      icon: 'fa fa-list',
      children: [
        {
          name: 'Hardware',
          url: '/inventory/hardware',
          icon: 'icon-heart',
          children : [
            {
              name: 'Routers',
              url: '/inventory/hardware/routers',
              icon: 'icon-heart',
            },
            {
              name: 'Switches',
              url: '/inventory/hardware/switches',
              icon: 'icon-heart',
            },
            {
              name: 'UPS',
              url: '/inventory/hardware/ups',
              icon: 'icon-heart',
            },
          ]
        },
      ]
    },
  ],
};
