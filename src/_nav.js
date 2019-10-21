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
      name: 'Hardware',
      url: '/hardware',
      icon: 'fa fa-gears',
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
        name: 'Auth',
        url: '/auth',
        icon: 'icon-user',
        children: [
          {
            name: 'Login',
            url: '/auth/login',
            icon: 'icon-user'
          }
        ]
    },
  ],
};
