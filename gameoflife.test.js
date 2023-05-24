import {gameOfLife} from'./gameoflife.js';
 
describe("gameoflife", () => {
    it("is dead, it fails", () => {
        const result = gameOfLife(1, 2);
        expect(result).toBe(true)
    })
 
})
describe("gameoflife", () => {
    it("is alive, it fails", () => {
        const result = gameOfLife(1, 5);
        expect(result).toBe(false)
    })
 
})