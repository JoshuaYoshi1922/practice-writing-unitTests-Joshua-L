
const cart = require('../cart.js');


describe("addItem", () =>{
    // Postive
    test("should add new item to cart", () => {
        const orinalArray = [{item: "Laptop", quantity: 2}];
        const updatedArray = cart.addItem(orinalArray, "Coffee",  3);
        
        expect(updatedArray).toHaveLength(2);
        expect(updatedArray).toBe(updatedArray, {item: "Coffee", quantity: 3});
    });
    // Negative
    test("should prompt user to input valid quantity", function() {
        const orinalArray = [];
        expect(() => cart.addItem(orinalArray, "Pie", -1)).toThrow(new Error("Invalid quantity. Must be a positive integer."));      
    });
    // Edge Case
    test("should tell user item was not added if no quantity was given", function() {
        const zeroArray = [];
        expect(() => cart.addItem(zeroArray, "Mustard", 0)).toThrow(new Error("Item not added."));      
    });
});

let thisCart = ["cheese", "pizza", "burger", "corndog"]
describe("removeItem", () => {
    // Postive
    test("should remove item from cart", () => {
        const updatedCart = cart.removeItem(thisCart, "pizza")
        expect (updatedCart).toBe(updatedCart, ["cheese", "burger", "corndog"])
    });
    // Negative
    test("should throw error when trying to remove item not in cart", function() {
        expect(() => cart.removeItem(thisCart ["Mustard"])).toThrow(new Error("Object not in cart"));      
    });
    // Edge Case
    test("should remove the last item from", () => {
        expect(thisCart.slice(0, -1)).toEqual(thisCart = ["cheese", "pizza", "burger"])
    })        
});

describe("getTotalItems", () => {
    // Postive
    test("should calculate the total numbers correctly", () => {
        expect(cart.getTotalItems(cart.myCart)).toEqual(42);
    });
    // Negative
    test("should return no items in cart", () => {
        let array = [];
        expect(() =>cart.getTotalItems(array)).toThrow(new Error("No items in cart"));
    });
    // Edge Case
    test('should convert string number element to a number', () =>{
        expect(cart.getTotalItems(cart.myCart)).toEqual(42);
    })
});