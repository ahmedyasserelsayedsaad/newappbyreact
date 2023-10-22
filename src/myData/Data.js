// all images imported from images directory
import f1 from "../img/products/f1.jpg";
import f2 from "../img/products/f2.jpg";
import f3 from "../img/products/f3.jpg";

import f9 from "../img/products/f9.avif";
import f10 from "../img/products/f10.avif";
import f11 from "../img/products/f11.webp";

import f4 from "../img/products/f4.jpg";
import f5 from "../img/products/f5.jpg";
import f6 from "../img/products/f6.jpg";

import f7 from "../img/products/f7.jpg";
import f8 from "../img/products/f8.jpg";
import f12 from "../img/products/f12.avif";

import n1 from "../img/products/n1.jpg";
import n2 from "../img/products/n2.jpg";
import n3 from "../img/products/n3.jpg";

import n4 from "../img/products/n4.jpg";
import n5 from "../img/products/n5.jpg";
import n8 from "../img/products/n8.jpg";

import f13 from "../img/products/f13.avif"
import n9 from "../img/products/n9.avif"
import n11 from "../img/products/n11.webp"
import n12 from "../img/products/n12.webp"
import n7 from "../img/products/n7.jpg"
import n6 from "../img/products/n6.jpg"
const Data = [
  {
    id: "01",
    title: "adidas shirt",
    price: 24.0,
    image01: f1,
    image02: f2,
    image03: f3,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "adidas pants",
    price: 115.0,
    image01: f9 ,
    image02: f10,
    image03: f11,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "sea-shirt",
    price: 110.0,
    image01: f4 ,
    image02: f5 ,
    image03: f6,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "half-pants",
    price: 110.0,
    image01:f7 ,
    image02:f8 ,
    image03:f12 ,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "classic-shirts",
    price: 824.0,
    image01: n1,
    image02: n2 ,
    image03: n3,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "shirts",
    price: 424.0,
    image01: n4 ,
    image02: n5 ,
    image03: n8,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "pants",
    price: 115.0,
    image01: f13 ,
    image02:n11 ,
    image03:n9 ,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "half-pants",
    price: 110.0,
    image01: n6,
    image02: n7 ,
    image03: n12 ,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "sea-shirt",
    price: 110.0,
    image01: f3,
    image02: f4,
    image03: f2,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "employy-shirts",
    price: 224.0,
    image01: n8,
    image02: n5,
    image03: n7,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "half-pants ",
    price: 135.0,
    image01: n11,
    image02: n12,
    image03: n9,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "running-pants ",
    price: 125.0,
    image01: f9,
    image02:f12,
    image03: f13,
    category: "pants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "summer-shirts ",
    price: 115.0,
    image01: f6,
    image02:f5 ,
    image03: n4 ,
    category: "shirt",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default Data;