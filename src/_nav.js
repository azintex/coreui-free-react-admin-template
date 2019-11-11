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
      name: 'Connections',
      url: '/connections',
      icon: 'fa fa-wire',
      children: [
        {
          name: 'New connection',
          url: '/connections/new',
          icon: 'icon-heart'
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
    }
    ,
    {
      name: 'Hardware',
      url: '/hardware',
      icon: 'fa fa-list',
      children: [
        {
          name: 'Routers',
          url: '/hardware/routers',
          icon: 'icon-heart',
        },
        {
          name: 'Switches',
          url: '/hardware/switches',
          icon: 'icon-heart',
        },
        {
          name: 'UPS',
          url: '/hardware/ups',
          icon: 'icon-heart',
        },
      ]
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-page',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'fa fa-sign-in-alt',
        }
      ]
    }
  ],
};
