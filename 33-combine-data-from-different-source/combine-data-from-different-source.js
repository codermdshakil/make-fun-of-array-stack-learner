/**
 * Combine data from different sources
 *
 */

const courses = [
  {
    id: "OC1",
    name: "JavaScript All You Need to know",
    topic: "javascript",
    price: 2599,
  },
  {
    id: "OC2",
    name: "Dive Into NodeJS",
    topic: "nodejs",
    price: 2599,
  },
  {
    id: "OC3",
    name: "Understand React Core Concepts",
    topic: "javascript",
    price: 2599,
  },
  {
    id: "OC4",
    name: "Understand React Advanced Features",
    topic: "react",
    price: 2599,
  },
  {
    id: "OC5",
    name: "Add to Cart - MERN project",
    topic: "mern",
    price: 2599,
  },
  {
    id: "OC6",
    name: "Make fun of JavaScript Array",
    topic: "js",
    price: 2599,
  },
];

const discountedPrice = {
  OC1: 2099,
  OC2: 2099,
  OC3: 1399,
  OC4: 2099,
  OC5: 3599,
  OC6: 1399,
};

// combine data from different source

const updatedCourse = courses.reduce((acc, cur) => {

  if (discountedPrice[cur.id]) {
    cur.discountedPrice = discountedPrice[cur.id];
  } else {
    cur.discountedPrice = 0;
  }

  acc.push(cur);

  return acc;
}, []);

console.log(updatedCourse);
