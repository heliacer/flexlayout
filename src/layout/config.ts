import { IJsonModel, } from "flexlayout-react"

export const LayoutJsonModel: IJsonModel = {
  global: {
    tabEnableFloat: true,
    borderBarSize: 40,

  },
  borders: [
    {
      type: "border",
      location: "left",
      children: [
        {
          type: "tab",
          id: "#c4897aa3-3fb5-4e64-b3d9-4bfb3284a485",
          name: "Navigation",
          component: "test",
          enableClose: false,
          icon: "/tabicons/compass.svg"
        }
      ]
    },
    {
      type: "border",
      location: "right",
      children: [
        {
          type: "tab",
          id: "#76e70626-a487-425f-95fc-64a569d74ee2",
          name: "Options",
          component: "test",
          enableClose: false,
          icon: "/tabicons/gear.svg"
        }
      ]
    }
  ],
  layout: {
    type: "row",
    id: "#72bdbb70-4f38-4e67-aad2-63f510096d84",
    children: [
      {
        type: "tabset",
        id: "#11dabe40-c5a9-4776-0927-öwalekjöfslkdj",
        weight: 40,
        children: [
          {
            type: "tab",
            id: "#e372ba26-4097-4fd3-1242-faseöljwejkdfj",
            name: "Dummy",
            component: "test",
            icon: "/tabicons/star.svg"
          },
        ]
      },
      {
        type: "row",
        id: "#72bdbb70-4f38-4e67-aad2-63f510096dsadf4",
        weight: 25,
        children: [
          {
            type: "tabset",
            id: "#9dd85d31-46ce-4788-8d95-5e935ef3482b",
            weight: 40,
            children: [
              {
                type: "test",
                id: "#e372ba26-4097-4fd3-9078-5038f33651fa",
                name: "Dummy",
                component: "test",
                icon: "/tabicons/star.svg"
              },
            ],
          },
          {
            type: "tabset",
            id: "#11dabe40-c5a9-4776-0927-e20f4e39493f",
            weight: 60,
            children: [
              {
                type: "tab",
                id: "#e372ba26-4097-4fd3-1242-5038f33651fa",
                name: "Dummy",
                component: "test",
                icon: "/tabicons/star.svg"
              },
            ]
          },
        ]
      },
    ]
  }
}