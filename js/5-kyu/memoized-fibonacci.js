var fibonacci = (function () {
    let sequence = [0, 1, 1];

    const func = (function (idx) {

        if (idx == 0 || idx == 1)
            return idx;

        if (sequence[idx - 1] === undefined)
            sequence[idx - 1] = func(idx - 1);
        if (sequence[idx - 2] === undefined)
            sequence[idx - 2] = func(idx - 2);

        return sequence[idx - 1] + sequence[idx - 2];
    });

    return func;
})();
console.log('===');
console.log(fibonacci(10));