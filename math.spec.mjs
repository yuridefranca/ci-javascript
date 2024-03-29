import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as math from './math.mjs';

describe('addition', () => {
	it('adds 1 + 2 to equal 3', () => {
		const result = math.addition(1, 2);
		const expected = 3;

		assert.equal(result, expected);
	});
});
