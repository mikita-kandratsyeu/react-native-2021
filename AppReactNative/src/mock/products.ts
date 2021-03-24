import { ICategory } from '../modules/interfaces';

/* eslint-disable global-require */
export const products: ICategory[] = [
  {
    id: 'electronicsCategory',
    name: 'Electronics',
    source: require('../../assets/img/Electronics.jpg'),
    items: [
      {
        id: 'phone1',
        name: 'Iphone 11',
        price: 900,
        oldPrice: 1500,
        discount: 10,
        images: [
          {
            id: 'image1',
            source: require('../../assets/img/iPhone-11-front.jpeg'),
          },
          {
            id: 'image2',
            source: require('../../assets/img/iPhone-11-back.jpeg'),
          },
        ],
        colors: [
          { id: 'black', name: 'Black' },
          { id: 'red', name: 'Red' },
          { id: 'blue', name: 'Blue' },
        ],
        description:
          'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
      },
      {
        id: 'laptop1',
        name: 'Apple Macbook Air 13',
        price: 2900,
        oldPrice: 3500,
        discount: 15,
        images: [
          {
            id: 'image1',
            source: require('../../assets/img/macbook-air-13-front.jpeg'),
          },
          {
            id: 'image2',
            source: require('../../assets/img/macbook-air-13-keyboard.jpeg'),
          },
        ],
        colors: [
          { id: 'silver', name: 'Silver' },
          { id: 'gold', name: 'Gold' },
          { id: 'grey', name: 'Grey' },
        ],
        description:
          '13.3" 2560 x 1600 IPS, несенсорный, Apple M1 3200 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: встроенный, Mac OS',
      },
      {
        id: 'watch1',
        name: 'Apple Watch Series 6',
        price: 1200,
        oldPrice: 1500,
        discount: 25,
        images: [
          {
            id: 'image1',
            source: require('../../assets/img/apple-watch-6-front.jpeg'),
          },
          {
            id: 'image2',
            source: require('../../assets/img/apple-watch-6-equipment.jpeg'),
          },
        ],
        colors: [
          { id: 'black', name: 'Black' },
          { id: 'red', name: 'Red' },
          { id: 'white', name: 'White' },
        ],
        description:
          'часы-компаньон, поддержка iOS, экран AMOLED 1.78" (368x448, сенсорный), шагомер, пульсометр, время работы: 18 часов',
      },
      {
        id: 'watch11',
        name: 'Apple Watch Series 6',
        price: 1200,
        oldPrice: 1500,
        discount: 25,
        images: [
          {
            id: 'image1',
            source: require('../../assets/img/apple-watch-6-front.jpeg'),
          },
          {
            id: 'image2',
            source: require('../../assets/img/apple-watch-6-equipment.jpeg'),
          },
        ],
        colors: [
          { id: 'black', name: 'Black' },
          { id: 'red', name: 'Red' },
          { id: 'white', name: 'White' },
        ],
        description:
          'часы-компаньон, поддержка iOS, экран AMOLED 1.78" (368x448, сенсорный), шагомер, пульсометр, время работы: 18 часов',
      },
    ],
  },
  {
    id: 'clothesCategory',
    name: 'Clothes',
    source: require('../../assets/img/Clothes.jpg'),
  },
  {
    id: 'furnitureCategory',
    name: 'Furniture',
    source: require('../../assets/img/Furniture.jpg'),
  },
];
