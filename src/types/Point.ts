type Point = {
    x: number;
    y: number;
};

export default Point;

export const point = (x: number, y: number): Point => {
    return { x, y };
};
