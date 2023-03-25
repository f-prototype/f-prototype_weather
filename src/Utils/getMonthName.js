export function getMonthName(data) {
  let month = [
    'January ',
    'February ',
    'March ',
    'April ',
    'May ',
    'June ',
    'July',
    'August ',
    'September ',
    'October ',
    'November ',
    'December ',
  ];
  return month[data.getMonth()];
}
