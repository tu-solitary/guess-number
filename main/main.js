// Write your cade below:
function main(expect, given) {
    let abCount = {
        A: 0,
        B: 0
    }

    expect.split('')
        .forEach((char, index) => {
            if(char === given[index]) {
                abCount.A++;
            } else if(given.includes(char)) {
                abCount.B++;
            }
        });

    return `${abCount.A}A${abCount.B}B`;
};

module.exports = main