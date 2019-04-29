import {
  isLeapYear,
  dayOfYear,
  dayOfWeek,
  heavenlyStem,
  earthlyBranch,
  chineseZodiac,
  zodiac
} from '../lib';

describe('whatsday', () => {
  let year = 2019;
  let month = 4;
  let day = 29;

  it('isLeapYear', () => {
    expect(isLeapYear(year)).to.equal(false);
    expect(isLeapYear(2020)).to.equal(true);
  });

  it('dayOfYear', () => {
    expect(dayOfYear(year, month, day)).to.equal(119);
    expect(dayOfYear(2020, month, day)).to.equal(120);
  });

  it('dayOfWeek', () => {
    console.log(dayOfWeek(year, month, day));

    // expect(dayOfWeek(year, month, day)).to.equal(true);
  });

  it('heavenlyStem', () => {
    expect(heavenlyStem(year)).to.equal('己');
  });

  it('earthlyBranch', () => {
    expect(earthlyBranch(year)).to.equal('亥');
  });

  it('chineseZodiac', () => {
    expect(chineseZodiac(year)).to.equal('猪');
  });

  it('zodiac', () => {
    expect(zodiac(month, day)).to.equal('金牛');
  });
});
