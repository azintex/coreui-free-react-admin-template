export default {
  items: [

    {
      title: true,
<<<<<<< HEAD
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
=======
      name: 'Sidebar',
      wrapper: {
        element: '',
        attributes: {},
      },
>>>>>>> 9440ece19ce9d14aaba2210f969059383ee6b66d
    },
    {
      name: 'Devices',
      url: '/devices',
      icon: 'fa fa-gears',
      children: [
        {
          name: 'Routers',
          url: '/devices/routers',
          icon: 'icon-heart',
        },
        {
          name: 'Switches',
          url: '/devices/switches',
          icon: 'icon-heart',
        },
        {
          name: 'UPS',
          url: '/devices/ups',
          icon: 'icon-heart',
        },
      ]
    },
  ],
};
