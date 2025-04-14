let productReview = [
  { name: "Md. Ashraf", response: "newbie", review: "5" },
  { name: "Jalal Uddin", response: "newbie", review: "2" },
  { name: "Saiful Islam", response: "pupil", review: "4" },
  { name: "Md. Rayhan", response: "newbie", review: "5" },
];

const positive = productReview.every((value) => value.review > 3);

if(positive){
    console.log('100% Positive Reviews!');
}
else{
    console.log('Some customer not satisfied!');
}

let contestRating = [
  { name: "Md. Ashraf", rating: "1189" },
  { name: "Jalal Uddin", rating: "632" },
  { name: "Saiful Islam", rating: "799" },
  { name: "Md. Rayhan", rating: "1043" },
];
