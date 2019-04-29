import WIKI from './wiki';

// 闰年
export const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// 一年之中的天数
export const dayOfYear = (year, month, day) => {
  let count = 0;

  for (let i = 1; i < month; i++) {
    // Number of months passed
    count += daysInGregorianMonth(year, i);
  }

  count += day;

  return count;
};

export const daysInGregorianMonth = (year, month) => {
  let days = WIKI.DAYS_IN_GREGORIAN_MONTH[month - 1];

  if (month === 2 && isLeapYear(year)) {
    days++;
  }

  return days;
};

// 星期几
export const dayOfWeek = (year, month, day) => {
  let week = 1; // 公历一年一月一日是星期一，所以起始值为星期日
  year = ((year - 1) % 400) + 1; // 公历星期值分部 400 年循环一次

  let leapYear = (year - 1) / 4; // 闰年次数
  leapYear -= (year - 1) / 100;
  leapYear += (year - 1) / 400;

  let commonYear = year - 1 - leapYear; // 常年次数
  week += commonYear; // 常年星期值增一
  week += 2 * leapYear; // 闰年星期值增二
  week += dayOfYear(year, month, day);
  week = ((week - 1) % 7) + 1;

  return week;
};

// 天干
export const heavenlyStem = year => {
  return WIKI.HEAVENLY_STEMS[year % 10];
};

// 地支
export const earthlyBranch = year => {
  return WIKI.EARTHLY_BRANCHES[year % 12];
};

// 生肖
export const chineseZodiac = year => {
  return WIKI.CHINESE_ZODIAC[year % 12];
};

// 星座
export const zodiac = (month, day) => {
  let index = month - (day < '102223444433'.charAt(month - 1) - -19);
  index = index === 12 ? 0 : index; // 0:摩羯, 1:水瓶, ..., 11:射手, 12:摩羯

  return WIKI.ZODIAC[index];
};

// 节气
// export const solarTerm = (year, st) => {
//   if (st < 0 || st > 24) return 0.0;

//   let result = 365.24219878 * (year - 1900) + WIKI.SOLAR_TERMS[st] / 86400.0;

//   return WIKI.BASE1900_SLIGHT_COLD + result;
// };
