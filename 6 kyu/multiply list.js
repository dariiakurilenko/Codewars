//Given a list of integers l, return the list with each value multiplied by integer n.

function multiply(n, l) {
    return l.map(item => Math.round(item / (1 / n)));
}
