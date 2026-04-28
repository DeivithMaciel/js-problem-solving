                //REDUCE

// Reduzir uma array á um resultado só

const rocket = [
    { country: "Russia", lauches: 32 },
    { country: "US", lauches: 23 },
    { country: "China", lauches: 16 },
    { country: "Europe", lauches: 7 },
    { country: "India", lauches: 4 },
    { country: "Japan", lauches: 3 }
];

const totalLauches = rocket.reduce(( preVal, elm ) => {
    return preVal + elm.lauches
}, 0)

console.log( totalLauches );