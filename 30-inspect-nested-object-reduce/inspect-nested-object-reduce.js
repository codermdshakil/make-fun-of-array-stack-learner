const js = {
  name: "JavaScript: All you need to know",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
  },
};

const node = {
  name: "Dive Into NodeJS",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: "Understand React Core Features",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 125,
    },
    article: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};

const courses = [js, node, react];
// console.log(courses);

const inspectArticle = (course) => {
    const path = 'contents.article.count';
    return path.split('.').reduce((acc, field) => {
        if(acc){
            return acc[field];
        }
        return 0;
    }, course);
};


// using inspectArray function where use reduce
// console.time('forEach + reduce');
courses.forEach((course) => {
   console.log(`${course.name} has - Article: ${inspectArticle(course)}`); 
});
// console.timeEnd('forEach + reduce');

 
// using forEach method
// console.time('forEach ');
courses.forEach((course) => {
   console.log(`${course.name} has - Article: ${course.contents?.article ? course.contents?.article.count:'0' }`); 
});
// console.timeEnd('forEach ');

// Time Efficiency
// forEach : 13.682ms 
// forEach + reduce: 0.767ms