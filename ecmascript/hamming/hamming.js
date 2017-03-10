// It is found by comparing two DNA strands and counting how many of the
// nucleotides are different from their equivalent in the other string.

//     GAGCCTACTAACGGGAT
//     CATCGTAATGACGGCCT
//     ^ ^ ^  ^ ^    ^^

// The Hamming distance between these two DNA strands is 7.


export default class Hamming {
  compute(a, b) {
    const aList = a.split('')
    const bList = b.split('')

    if (aList.length !== bList.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    return aList.reduce((total, nucleotide, index) => {
      return nucleotide === bList[index] ? total : total + 1
    }, 0)
  }
}
