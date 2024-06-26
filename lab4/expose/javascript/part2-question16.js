let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

let i = 0;
for (const statistic in statistics) {
    if (statistic[0] == 'r' | statistics[statistic] % 2 == 1) {
        console.log(statistics[statistic]);
    }
    i++;
}