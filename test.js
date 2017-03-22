import test from 'ava';
import fn from '.';

test('input should be string', t => {
	const err = t.throws(() => fn(123), TypeError);
	t.is(err.message, 'Expected a string, got number');
});

test('single char string should return as it is', t => {
	t.is(fn('a'), 'a');
});

test('should find the first non repeated char', t => {
	t.is(fn('total'), 'o');
	t.is(fn('fffff'), '');
});
