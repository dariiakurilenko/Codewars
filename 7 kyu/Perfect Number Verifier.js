//A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.
//Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

const isPerfect = n =>  [6, 28, 496, 8128, 33550336, 8589869056, 137438691328].includes(n);
