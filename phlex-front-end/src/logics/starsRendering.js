const starsRendering = (val) => {
    const fulls = Math.floor(val);
    const half = (val - fulls) ? true : false;
    let starsArr = [];
    for (let i = 0; i < 5; i++) {
        i < fulls ? starsArr[i] = 1 : (half && starsArr[i - 1] === 1) ? starsArr[i] = 0.5 : starsArr[i] = 0;
    }

    return starsArr;
};

export default starsRendering;
