//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = n => n.toString()
                           .split('')
                           .reverse()
                           .map((a, i) => a * Math.pow(10, i))
                           .filter( a => a > 0)
                           .reverse()
                           .join(' + ')
