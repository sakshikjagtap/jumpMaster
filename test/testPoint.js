const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('should equate both the points', () => {
    const point1 = new Point(2, 3);
    const point2 = new Point(2, 3);
    assert.ok(point1.equals(point2));
  });
});
