import { IJsonModel, } from "flexlayout-react"

import compass from '../assets/compass.svg'
import gear from '../assets/gear.svg'
import star from '../assets/star.svg'

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
          name: "Navigation",
          component: "test",
          enableClose: false,
          icon: compass
        }
      ]
    },
    {
      type: "border",
      location: "right",
      children: [
        {
          type: "tab",
          name: "Options",
          component: "test",
          enableClose: false,
          icon: gear
        }
      ]
    }
  ],
  layout: {
    type: "row",
    children: [
      {
        type: "tabset",
        weight: 40,
        children: [
          {
            type: "tab",
            name: "Dummy",
            component: "test",
            icon: star
          },
        ]
      },
      {
        type: "row",
        weight: 25,
        children: [
          {
            type: "tabset",
            weight: 40,
            children: [
              {
                type: "test",
                name: "Dummy",
                component: "test",
                icon: star
              },
            ],
          },
          {
            type: "tabset",
            weight: 60,
            children: [
              {
                type: "tab",
                name: "Dummy",
                component: "test",
                icon: star
              },
            ]
          },
        ]
      },
    ]
  }
}