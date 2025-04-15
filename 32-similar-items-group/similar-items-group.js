
// Grouping Similar Items

const words = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten'
];

const result = words.reduce((acc, cur) => {
    const len = cur.length;
    if(acc[cur]){
        acc[len].push(cur)
    }
    else{
        acc[len] = [cur];
    }
    return acc;
}, {});


// console.log(result);//



