import starsRendering from "../logics/starsRendering"

test('creates an array associated with the ratings to render stars', () => {
    expect(starsRendering(3.5)).toEqual([1, 1, 1, 0.5, 0]);
});