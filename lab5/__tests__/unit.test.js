// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('valid phone number inputs are true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number input are false', () => {
    expect(isPhoneNumber('0')).toBe(false);
    expect(isPhoneNumber('590812')).toBe(false);
});

// isEmail tests
test('valid email inputs are true', () => {
    expect(isEmail('ryding@ucsd.edu')).toBe(true);
    expect(isEmail('john@example.com')).toBe(true);
}); 

test('invalid email inputs are false', () => {
    expect(isEmail('Ryan Ding email')).toBe(false);
    expect(isEmail('ding@cool.a')).toBe(false);
});

// isStrongPassword tests
test('valid (strong) password inputs are true', () => {
  expect(isStrongPassword('Qwerlkjgn0129')).toBe(true);
  expect(isStrongPassword('vnkjbsf1A')).toBe(true);
}); 

test('invalid and weak password inputs are false', () => {
  expect(isStrongPassword('password')).toBe(false);
  expect(isStrongPassword('12345')).toBe(false);
});

// isDate tests
test('valid date inputs are true', () => {
  expect(isDate('12/31/2017')).toBe(true);
  expect(isDate('1/1/2018')).toBe(true);
}); 

test('invalid date inputs are false', () => {
  expect(isDate('May 4th 2024')).toBe(false);
  expect(isDate('31/1/24')).toBe(false);
});

// isHexColor tests
test('valid hex color inputs are true', () => {
  expect(isHexColor('#ffffff')).toBe(true);
  expect(isHexColor('#000')).toBe(true);
}); 

test('invalid hex color inputs are false', () => {
  expect(isHexColor('ffff')).toBe(false);
  expect(isHexColor('(255,255,255)')).toBe(false);
});