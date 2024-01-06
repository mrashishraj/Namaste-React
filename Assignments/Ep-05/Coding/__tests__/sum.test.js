import { sum } from "../src/sum";

test("Sum function should return the sum of two numbers", ()=>{
    const result = sum(2, 2);

    //assertion
    expect(result).toBe(3)
})