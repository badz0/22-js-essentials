function inRange(n, start, end) {
  if (n > start && n < end) {
    return true;
  } else {
    return false;
  }
}



function outRange(n, start, end) {
  if (n <= start || n >= end) {
    return true;
  } else {
    return false;
  }
}
