import { add } from '../index.mjs';
import { expect } from 'chai';

describe('Addition Function', () => {
    it('should add two positive numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should add negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

    it('should handle adding zero', () => {
        expect(add(2, 0)).to.equal(2);
    });
});
