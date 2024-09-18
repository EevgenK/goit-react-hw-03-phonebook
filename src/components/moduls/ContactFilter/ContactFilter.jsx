import PropTypes from 'prop-types';

import styles from './contact-filter.module.scss';

const ContactFilter = ({ handleChange, value }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="filterInp" className={styles.label}>
        Find contacts by name or phone number
      </label>
      <input
        id="filterInp"
        className={styles.input}
        name="filter"
        placeholder="Filter contacts"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
// const isSortedArray = arr => {
//   if (arr.length <= 1) return true;
//   const sorted = arr.toSorted((a, b) => a - b);

//   return (
//     String(arr) === String(sorted) ||
//     String(arr) === String(sorted.toReversed())
//   );
// };

// function checkArrayEvery2(argArray) {
//   //console.log(argArray);
//   let isAscending = argArray.every((element, index, arr) => {
//     return index < arr.length - 1
//       ? arr[index + 1] - element >= 0
//         ? true
//         : false
//       : true;
//   });
//   let isDescending = argArray.every((element, index, arr) => {
//     return index < arr.length - 1
//       ? arr[index + 1] - element <= 0
//         ? true
//         : false
//       : true;
//   });

//   return isAscending || isDescending;
// }

// console.time('isSortedArray');
// isSortedArray([4, 3, 6, 2, 1, 5]);
// console.timeEnd('isSortedArray');

// console.time('checkArrayEvery2');
// checkArrayEvery2([4, 3, 6, 2, 1, 5]);
// console.timeEnd('checkArrayEvery2');

// console.time('isSortedArray');
// isSortedArray([1, 2, 3, 4, 5, 6]);
// console.timeEnd('isSortedArray');

// console.time('checkArrayEvery2');
// checkArrayEvery2([1, 2, 3, 4, 5, 6]);
// console.timeEnd('checkArrayEvery2');

// console.time('isSortedArray');
// isSortedArray([]);
// console.timeEnd('isSortedArray');

// console.time('checkArrayEvery2');
// checkArrayEvery2([]);
// console.timeEnd('checkArrayEvery2');

// console.time('isSortedArray');
// isSortedArray([1, 3, 5, 35, 72]);
// console.timeEnd('isSortedArray');

// console.time('checkArrayEvery2');
// checkArrayEvery2([[1, 3, 5, 35, 72]]);
// console.timeEnd('checkArrayEvery2');
