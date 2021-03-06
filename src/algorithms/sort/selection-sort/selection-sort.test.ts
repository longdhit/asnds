import { deepEqual } from 'assert'
import { getTestTitle } from '../../../helpers'
import { selectionSort } from './selection-sort'

const TEST_TITLE = getTestTitle(__filename)

describe(TEST_TITLE, () => {
  it(`${TEST_TITLE} Can use selection sort`, () => {
    const result = selectionSort([1, 4, 2, 5, 3, 9, 2, 1])
    deepEqual(result, [ 1, 1, 2, 2, 3, 4, 5, 9 ])
  })
})
