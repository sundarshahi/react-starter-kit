import { describe, expect, it } from 'vitest';
import { cn, startsWith } from './utils';

describe('cn', () => {
  it('should merge class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    const condition = false;
    expect(cn('class1', condition && 'class2', 'class3')).toBe('class1 class3');
    expect(cn('class1', undefined, 'class3')).toBe('class1 class3');
    expect(cn('class1', null, 'class3')).toBe('class1 class3');
    expect(cn('class1', '', 'class3')).toBe('class1 class3');
  });
});

describe('startsWith', () => {
  it('should return true if dataToCheck starts with startingChar', () => {
    expect(startsWith('a', 'apple')).toBe(true);
    expect(startsWith(1, 123)).toBe(true);
    expect(startsWith('1', '123')).toBe(true);
  });

  it('should return false if dataToCheck does not start with startingChar', () => {
    expect(startsWith('b', 'apple')).toBe(false);
  });
});
