function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const { leftHalf, rightHalf } = splitInHalf(list);
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  return merge(left, right);
}

function splitInHalf(arr) {
  const midpoint = Math.floor((arr.length - 1) / 2) + 1;
  const leftHalf = arr.slice(0, midpoint);
  const rightHalf = arr.slice(midpoint, arr.length);

  console.log('arr',arr,leftHalf,rightHalf)

  return { leftHalf, rightHalf };
}

function merge(left, right) {
  const list = [];
  let i = 0;
  let j = 0;

  while ((i < left.length) & (j < right.length)) {
    if (left[i] < right[j]) {
      list.push(left[i]);
      i++;
    } else {
      list.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    list.push(left[i]);
    i++;
  }
  while (j < right.length) {
    list.push(right[j]);
    j++;
  }

  
console.log('now running merge', list)

  return list;
}

module.exports = mergeSort;
