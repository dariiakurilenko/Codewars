//Given a non-empty array of integers, return the result of multiplying the values together in order

const grow = arr => arr.reduce((multiplication, current) => multiplication*current);
