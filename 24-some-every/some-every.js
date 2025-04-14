let productReview = [
  { name: "Md. Ashraf", response: "newbie", review: "5" },
  { name: "Jalal Uddin", response: "newbie", review: "2" },
  { name: "Saiful Islam", response: "pupil", review: "4" },
  { name: "Md. Rayhan", response: "newbie", review: "5" },
];

const positive = productReview.every((value) => value.review > 3);

// if(positive){
//     console.log('100% Positive Reviews!');
// }
// else{
//     console.log('Some customer not satisfied!');
// }

let match_runs = [
  { name: "Md. Ashraf", run: "1189" },
  { name: "Jalal Uddin", run: "632" },
  { name: "Saiful Islam", run: "400" },
  { name: "Md. Rayhan", run: "1043" },
];

const atLestOne = match_runs.some((value) => parseInt(value.run) === 400);
// console.log(atLestOne);

