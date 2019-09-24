export default {
  items: [
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Devices',
      url: '/devices',
      icon: 'icon-heart',
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
