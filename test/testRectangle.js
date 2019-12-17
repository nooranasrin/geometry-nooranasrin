const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
  describe("isEqualTo", () => {
    it("should validate when the two instances are equal", () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });
    it("should invalidate when the two instances not equal", () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = new Rectangle({ x: 10, y: 12 }, { x: 12, y: 13 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
    it("should invalidate when one rectangle1 is not an instance of Rectangle class", () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = {
        diagonalEndA: { x: 10, y: 11 },
        diagonalEndB: { x: 12, y: 13 }
      };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
    it("should invalidate when one is an empty object ", () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = {};
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate when the reference of both the lines are same", () => {
      const circle = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      assert.isTrue(circle.isEqualTo(circle));
    });
  });

  describe("toString", () => {
    it("should give the string format of the instance", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
    });
  });

  describe("area", () => {
    it("should give the area when the rectangle is parallel to x and y axis", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.deepStrictEqual(rectangle1.area, 20);
    });
    it("should give the 0 when the rectangle is parallel to x and y axis and doesn't have length", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(rectangle1.area, 0);
    });
    it("should give the 0 when the rectangle is parallel to x and y axis and doesn't have length", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 4 });
      assert.deepStrictEqual(rectangle1.area, 0);
    });
    it("should give area when  coordinates are negative", () => {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      assert.deepStrictEqual(rectangle1.area, 40);
    });
  });

  describe("perimeter", () => {
    it("should give the perimeter when the rectangle is parallel to x and y axis", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.deepStrictEqual(rectangle1.perimeter, 18);
    });
    it("should give the 0 when the rectangle is parallel to x and y axis and doesn't have length", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(rectangle1.perimeter, 10);
    });
    it("should give the 0 when the rectangle is parallel to x and y axis and doesn't have breadth", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 4 });
      assert.deepStrictEqual(rectangle1.perimeter, 8);
    });
    it("should give perimeter when  coordinates are negative", () => {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      assert.deepStrictEqual(rectangle1.perimeter, 26);
    });
  });

  describe("hasPoint", () => {
    it("should validate a point that is on the side AB", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.hasPoint(new Point(2, 0)));
    });
    it("should validate a point that is on the side BC", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.hasPoint(new Point(5, 2)));
    });
    it("should validate a point that is on the side CD", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.hasPoint(new Point(2, 4)));
    });
    it("should validate a point that is on the side AD", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.hasPoint(new Point(0, 3)));
    });
    it("should invalidate a point that is not an instance of class Point", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 4 });
      assert.isFalse(rectangle.hasPoint({ x: 0, y: 3 }));
    });
  });
});