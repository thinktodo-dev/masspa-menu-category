# masspa-menu-category

> 

[![NPM](https://img.shields.io/npm/v/masspa-menu-category.svg)](https://www.npmjs.com/package/masspa-menu-category) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save masspa-menu-category
```

## Usage

```jsx
import React, { Component } from 'react'

import MasspaMenuCategory from 'masspa-menu-category'


let dataLists = [
  {
    code: "1",
    createdAt: 1572416895655,
    description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
    featured: 1,
    id: "08b22e65-c4d5-413b-b112-7d1b5405bab9",
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-service/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1573047753500.jpg",
    name: "Body",
    parentCode: "",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    subMenu:[],
    fulfillmentValue: [
      {
        code: "",
        createdAt: 1569382662348,
        description: null,
        featured: 0,
        id: "042c6cb4-5221-44fc-99fb-b73e92bdfc7e",
        image: null,
        name: "Thăng Hoa Cảm Xúc ",
        parentCode: "08b22e65-c4d5-413b-b112-7d1b5405bab9",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1572416929108
      },
      {
        code: "",
        createdAt: 1569389689667,
        description: null,
        featured: 0,
        id: "14a87a29-f863-473a-8c67-5d533f350b67",
        image: null,
        name: "Gội Đầu ",
        parentCode: "08b22e65-c4d5-413b-b112-7d1b5405bab9",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        length: 0
      },
      {
        code: "",
        createdAt: 1569390009252,
        description: null,
        featured: 0,
        id: "1dc00130-3f8d-4f55-b974-36e28806fb6d",
        image: null,
        name: "Wax - Xông Hơi ",
        parentCode: "08b22e65-c4d5-413b-b112-7d1b5405bab9",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1572416945242,
    
      },
      {
        code: "",
        createdAt: 1564374784686,
        description: null,
        featured: 0,
        id: "6c59db51-f1cd-4361-8fcb-7c0c41f23d64",
        image: null,
        name: "Dịch Vụ Đặc Biệt",
        parentCode: "08b22e65-c4d5-413b-b112-7d1b5405bab9",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        isFulfilled: true,
        isRejected: false,
        updatedAt: 1572950929993
      },
     
    ]
   
  }
  ,
  {
    code: "0",
    createdAt: 1572416885249,
    description: "<p></p>",
    featured: 1,
    id: "2c6d209e-011e-4f7d-b6b0-13f480f381a3",
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-service/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1573048454838.jpg",
    name: "Face",
    parentCode: "",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    subMenu: {
      fulfillmentValue:[
        {
          code: "",
          createdAt: 1564381869522,
          description: null,
          featured: 0,
          id: "77340f06-f61a-4bfb-82a8-c44731ad0245",
          image: null,
          name: "Làm Đẹp Cao Cấp Chuyên Sâu",
          parentCode: "2c6d209e-011e-4f7d-b6b0-13f480f381a3",
          serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
          subMenu: [],
          updatedAt: 1572416971904,
        },
        {
          code: "",
          createdAt: 1569380288501,
          description: null,
          featured: 0,
          id: "7819ad35-6d57-4997-a514-c76f872dc3d1",
          image: null,
          name: "Chăm Sóc Da Mặt Baby",
          parentCode: "2c6d209e-011e-4f7d-b6b0-13f480f381a3",
          serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
          subMenu: [],
          updatedAt: 1572416980694
        },
        {
          code: "",
          createdAt: 1564374795222,
          description: null,
          featured: 0,
          id: "eecc722d-7692-44f1-9b75-f271c7ed92c7",
          image: null,
          name: "Da Ngọc Da Ngà ",
          parentCode: "2c6d209e-011e-4f7d-b6b0-13f480f381a3",
          serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
          subMenu: [],
          updatedAt: 1572416988450
        }
      ],
      isFulfilled: true,
      isRejected: false
    },
    updatedAt: 1572950929993
  },
  {
    code: "2",
    createdAt: 1569378805884,
    description: "<p></p>",
    featured: 1,
    id: "eba77b3b-44ed-439c-8083-39db964c376d",
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-service/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1573097274646.jpg",
    name: "Trị Liệu ",
    parentCode: "",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    subMenu: {
      isFulfilled: true, 
      isRejected: false,
       fulfillmentValue: [
      {
        code: "",
        createdAt: 1564374853128,
        description: null,
        featured: 0,
        id: "2eef8dbe-3725-4448-a83f-fac2ecc1cc94",
        image: null,
        name: "Công Nghệ Nuôi Cấy Mô Da Số 1 Châu Á",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569384080040
      }
      ,
      {
        code: "",
        createdAt: 1564374829307,
        description: null,
        featured: 0,
        id: "7393451f-7553-48e4-a3d3-361df214d11c",
        image: null,
        name: "Điều Trị Da Chuyên Sâu",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569378846178
      }
      ,
      {
        code: "",
        createdAt: 1569384314123,
        description: null,
        featured: 0,
        id: "9cd8e6bc-001c-4126-b3c8-416afaac3fe6",
        image: null,
        name: "Triệt Lông Công Nghệ Cao Từ Hoa Kỳ DIODE LASER ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569389132397
      }
      ,{
        code: "",
        createdAt: 1569386587721,
        description: null,
        featured: 0,
        id: "c4cdc483-3e68-4434-a83e-d1ebf99f5ce0",
        image: null,
        name: "HIFU Trẻ Hóa Da Toàn Diện Lấy Lại 10 Năm Thanh Xuân ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569387230903
      }
      ,{
        code: "",
        createdAt: 1564374810173,
        description: null,
        featured: 0,
        id: "f0ea4e96-298c-46f5-99ae-f506103e7812",
        image: null,
        name: "Giảm Béo - Đường Cong Hoàn Hảo ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569379095267
      }
       ],
       isFulfilled: true,
       isRejected: false,
      },
    updatedAt: 1572950929993
  },
  {
    code: "3",
    createdAt: 1569378805884,
    description: "<p></p>",
    featured: 1,
    id: "eba77b3b-44ed-439c-8083-39db964c301d",
    image: "",
    name: "Wax ",
    parentCode: "",
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    subMenu: {
      isFulfilled: true, 
      isRejected: false,
       fulfillmentValue: [
      {
        code: "",
        createdAt: 1564374853128,
        description: null,
        featured: 0,
        id: "2eef8dbe-3725-4448-a83f-fac2ecc1cc94",
        image: null,
        name: "Công Nghệ Nuôi Cấy Mô Da Số 1 Châu Á",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569384080040
      }
      ,
      {
        code: "",
        createdAt: 1564374829307,
        description: null,
        featured: 0,
        id: "7393451f-7553-48e4-a3d3-361df214d11c",
        image: null,
        name: "Điều Trị Da Chuyên Sâu",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569378846178
      }
      ,
      {
        code: "",
        createdAt: 1569384314123,
        description: null,
        featured: 0,
        id: "9cd8e6bc-001c-4126-b3c8-416afaac3fe6",
        image: null,
        name: "Triệt Lông Công Nghệ Cao Từ Hoa Kỳ DIODE LASER ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569389132397
      }
      ,{
        code: "",
        createdAt: 1569386587721,
        description: null,
        featured: 0,
        id: "c4cdc483-3e68-4434-a83e-d1ebf99f5ce0",
        image: null,
        name: "HIFU Trẻ Hóa Da Toàn Diện Lấy Lại 10 Năm Thanh Xuân ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569387230903
      }
      ,{
        code: "",
        createdAt: 1564374810173,
        description: null,
        featured: 0,
        id: "f0ea4e96-298c-46f5-99ae-f506103e7812",
        image: null,
        name: "Giảm Béo - Đường Cong Hoàn Hảo ",
        parentCode: "eba77b3b-44ed-439c-8083-39db964c301d",
        serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
        subMenu: [],
        updatedAt: 1569379095267
      }
       ],
       isFulfilled: true,
       isRejected: false,
      },
    updatedAt: 1572950929993
  }, 
  
]

let link = "#"

let size = 180
export default class Example extends Component {
  render () {
    return (
        <MasspaMenuCategory  data={dataLists}    borderImage="5px solid #ddd" sizeImage={size} mode={1} borderRadius="rounded" animation="rotate"/>
    )
  }
}
```

## Properties

| Prop                      | Description                             | Value                         | Default                   | Required          | 
| ------------------------- |-----------------------------------------|-------------------------------|---------------------------|-------------------|
| **`data`**                | List menu to show                       |                               | `[]`                      |  Array            |
| **`link`**                | Link url                                |                               | `/category/?categoryId=`  |  Template strings |
| **`borderImage`**         | Border for image                        |                               | `"none"`                  |  String           |            
| **`sizeImage`**           | Size image                              |                               | `140`                     |  Number           |
| **`mode`**                | Mode title inside or outside image      | `1` or `2`                    | `1`                       |  Number           |
| **`borderRadius`**        | Border radius for image                 | `"0px"` or `"rounded"`        | `"0px"`                   |  String           |
| **`animation`**           | Animation                               | `"zoom"` or `"rotate"`        | `"zoom"`                  |  String           |


## Caution: use css Bootstrap 4.0.1

## License

MIT © [Masspa](https://github.com/thinktodo-dev)
