import { subtract } from '../index.mjs';
import { expect } from 'chai';

describe('Subtracting Function', () => {
    it('should subtract two positive numbers', () => {
        expect(subtract(2, 3)).to.equal(-1);
    });

    it('should subtract negative numbers', () => {
        expect(subtract(-2, -3)).to.equal(1);
    });

    it('should handle subtract zero', () => {
        expect(subtract(2, 0)).to.equal(2);
    });
});
