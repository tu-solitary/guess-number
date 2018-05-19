const main = require('../main/main');

describe('main()', () => {
    it('should return 4A if numbers and positions are right', () => {
        expect(main('1234', '1234')).toBe('4A0B');
        expect(main('2345', '2345')).toBe('4A0B');
    });

    it('should get B if has correct number but wrong position', () => {
        expect(main('1234', '1243').toBe('2A2B'));
        expect(main('1234', '2134').toBe('2A2B'));
        expect(main('2356', '3356').toBe('3A1B'));
    })
});