function solve(a: number[]): number[] {
    let output: number[] = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            output[0] += a[i];
        } else {
            output[1] += a[i];
        }
    }

    return output;
}

let a = [50, 60, 60, 45, 70];
console.log(solve(a)); // [ 180, 105 ]