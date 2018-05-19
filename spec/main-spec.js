const main = require('../main/main');

describe('main()', () => {
    it('should return 4A if numbers and positions are right', () => {
        expect(main('1234', '1234')).toBe('4A0B');
        expect(main('2345', '2345')).toBe('4A0B');
    });

});