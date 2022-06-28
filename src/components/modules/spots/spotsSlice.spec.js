
import {groupByCoordinates} from './spotsSlice';


describe('counter reducer', () => {
  it('should handle groupByCoordinates', () => {
    const spotsTest = [
      { location: { coordinates: [-1, 5] } },
      { location: { coordinates: [-1, 5] } },
      { location: { coordinates: [-1, 5] } },
      { location: { coordinates: [5, -1] } },
      { location: { coordinates: [-1, 5] } },
      { location: { coordinates: [-1.5, 5] } },
      { location: { coordinates: [-1.5, 5] } },
    ]
    const actual = groupByCoordinates(spotsTest);
    expect(actual).toHaveLength(3);
  });
});
