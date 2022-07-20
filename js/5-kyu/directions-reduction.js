let dirReduc = (function () {
    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    };

    return function func(arr) {
        let wasteIdx = arr.findIndex((direction, idx) => {
            return opposites[direction] === arr[idx + 1];
        });

        if (wasteIdx != -1) {
            const newArr = [].concat(arr);
            newArr.splice(wasteIdx, 2);
            return func(newArr);
        }

        return arr;
    };
})();

console.log('===');
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));