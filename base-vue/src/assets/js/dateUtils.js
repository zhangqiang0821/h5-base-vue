/**
 * Created by 张强(https://github.com/ccqiuqiu) on 2018/1/18.
 */
import zhCN from 'date-fns/esm/locale/zh-CN'
import enUs from 'date-fns/esm/locale/en-US'
import format from 'date-fns/esm/format'
import differenceInMinutes from 'date-fns/esm/differenceInMinutes' // 格式化
// import addDays from './addDays/index.js' // 加天
// import addHours from './addHours/index.js' // 加小时
// import addISOYears from './addISOYears/index.js'
// import addMilliseconds from './addMilliseconds/index.js'
// import addMinutes from './addMinutes/index.js'
// import addMonths from './addMonths/index.js'
// import addQuarters from './addQuarters/index.js'
// import addSeconds from './addSeconds/index.js'
// import addWeeks from './addWeeks/index.js'
// import addYears from './addYears/index.js'
// import areIntervalsOverlapping from './areIntervalsOverlapping/index.js'
// import closestIndexTo from './closestIndexTo/index.js'
// import closestTo from './closestTo/index.js'
// import compareAsc from './compareAsc/index.js'
// import compareDesc from './compareDesc/index.js'
// import differenceInCalendarDays from './differenceInCalendarDays/index.js'
// import differenceInCalendarISOWeeks from './differenceInCalendarISOWeeks/index.js'
// import differenceInCalendarISOYears from './differenceInCalendarISOYears/index.js'
// import differenceInCalendarMonths from './differenceInCalendarMonths/index.js'
// import differenceInCalendarQuarters from './differenceInCalendarQuarters/index.js'
// import differenceInCalendarWeeks from './differenceInCalendarWeeks/index.js'
// import differenceInCalendarYears from './differenceInCalendarYears/index.js'
// import differenceInDays from './differenceInDays/index.js'
// import differenceInHours from './differenceInHours/index.js'
// import differenceInISOYears from './differenceInISOYears/index.js'
// import differenceInMilliseconds from './differenceInMilliseconds/index.js'
// import differenceInMinutes from './differenceInMinutes/index.js'
// import differenceInMonths from './differenceInMonths/index.js'
// import differenceInQuarters from './differenceInQuarters/index.js'
// import differenceInSeconds from './differenceInSeconds/index.js'
// import differenceInWeeks from './differenceInWeeks/index.js'
// import differenceInYears from './differenceInYears/index.js'
// import eachDayOfInterval from './eachDayOfInterval/index.js'
// import endOfDay from './endOfDay/index.js'
// import endOfHour from './endOfHour/index.js'
// import endOfISOWeek from './endOfISOWeek/index.js'
// import endOfISOYear from './endOfISOYear/index.js'
// import endOfMinute from './endOfMinute/index.js'
// import endOfMonth from './endOfMonth/index.js'
// import endOfQuarter from './endOfQuarter/index.js'
// import endOfSecond from './endOfSecond/index.js'
// import endOfWeek from './endOfWeek/index.js'
// import endOfYear from './endOfYear/index.js'
// import formatDistance from './formatDistance/index.js'
// import formatDistanceStrict from './formatDistanceStrict/index.js'
// import formatRelative from './formatRelative/index.js'
// import getDate from './getDate/index.js'
// import getDay from './getDay/index.js'
// import getDayOfYear from './getDayOfYear/index.js'
// import getDaysInMonth from './getDaysInMonth/index.js'
// import getDaysInYear from './getDaysInYear/index.js'
// import getHours from './getHours/index.js'
// import getISODay from './getISODay/index.js'
// import getISOWeek from './getISOWeek/index.js'
// import getISOWeeksInYear from './getISOWeeksInYear/index.js'
// import getISOYear from './getISOYear/index.js'
// import getMilliseconds from './getMilliseconds/index.js'
// import getMinutes from './getMinutes/index.js'
// import getMonth from './getMonth/index.js'
// import getOverlappingDaysInIntervals from './getOverlappingDaysInIntervals/index.js'
// import getQuarter from './getQuarter/index.js'
// import getSeconds from './getSeconds/index.js'
// import getTime from './getTime/index.js'
// import getYear from './getYear/index.js'
// import isAfter from './isAfter/index.js'
// import isBefore from './isBefore/index.js'
// import isEqual from './isEqual/index.js'
// import isFirstDayOfMonth from './isFirstDayOfMonth/index.js'
// import isFriday from './isFriday/index.js'
// import isLastDayOfMonth from './isLastDayOfMonth/index.js'
// import isLeapYear from './isLeapYear/index.js'
// import isMonday from './isMonday/index.js'
// import isSameDay from './isSameDay/index.js'
// import isSameHour from './isSameHour/index.js'
// import isSameISOWeek from './isSameISOWeek/index.js'
// import isSameISOYear from './isSameISOYear/index.js'
// import isSameMinute from './isSameMinute/index.js'
// import isSameMonth from './isSameMonth/index.js'
// import isSameQuarter from './isSameQuarter/index.js'
// import isSameSecond from './isSameSecond/index.js'
// import isSameWeek from './isSameWeek/index.js'
// import isSameYear from './isSameYear/index.js'
// import isSaturday from './isSaturday/index.js'
// import isSunday from './isSunday/index.js'
// import isThursday from './isThursday/index.js'
// import isTuesday from './isTuesday/index.js'
// import isValid from './isValid/index.js'
// import isWednesday from './isWednesday/index.js'
// import isWeekend from './isWeekend/index.js'
// import isWithinInterval from './isWithinInterval/index.js'
// import lastDayOfISOWeek from './lastDayOfISOWeek/index.js'
// import lastDayOfISOYear from './lastDayOfISOYear/index.js'
// import lastDayOfMonth from './lastDayOfMonth/index.js'
// import lastDayOfQuarter from './lastDayOfQuarter/index.js'
// import lastDayOfWeek from './lastDayOfWeek/index.js'
// import lastDayOfYear from './lastDayOfYear/index.js'
// import max from './max/index.js'
// import min from './min/index.js'
// import parse from './parse/index.js'
// import setDate from './setDate/index.js'
// import setDay from './setDay/index.js'
// import setDayOfYear from './setDayOfYear/index.js'
// import setHours from './setHours/index.js'
// import setISODay from './setISODay/index.js'
// import setISOWeek from './setISOWeek/index.js'
// import setISOYear from './setISOYear/index.js'
// import setMilliseconds from './setMilliseconds/index.js'
// import setMinutes from './setMinutes/index.js'
// import setMonth from './setMonth/index.js'
// import setQuarter from './setQuarter/index.js'
// import setSeconds from './setSeconds/index.js'
// import setYear from './setYear/index.js'
// import startOfDay from './startOfDay/index.js'
// import startOfHour from './startOfHour/index.js'
// import startOfISOWeek from './startOfISOWeek/index.js'
// import startOfISOYear from './startOfISOYear/index.js'
// import startOfMinute from './startOfMinute/index.js'
// import startOfMonth from './startOfMonth/index.js'
// import startOfQuarter from './startOfQuarter/index.js'
// import startOfSecond from './startOfSecond/index.js'
// import startOfWeek from './startOfWeek/index.js'
// import startOfYear from './startOfYear/index.js'
// import subDays from './subDays/index.js'
// import subHours from './subHours/index.js'
// import subISOYears from './subISOYears/index.js'
// import subMilliseconds from './subMilliseconds/index.js'
// import subMinutes from './subMinutes/index.js'
// import subMonths from './subMonths/index.js'
// import subQuarters from './subQuarters/index.js'
// import subSeconds from './subSeconds/index.js'
// import subWeeks from './subWeeks/index.js'
// import subYears from './subYears/index.js'
// import toDate from './toDate/index.js'

let i18n = null
const localeMap = { 'zh-cn': zhCN, 'en-us': enUs }
let locale = null
const utils = {
  config: (l, _i18n) => {
    locale = localeMap[l] || zhCN
    i18n = _i18n
  },
  format: (...args) => format(...args, { locale }),
  // 计算2个时间间隔多少小时多少分钟
  difference: (start, end) => {
    const d = Math.abs(differenceInMinutes(new Date(start), new Date(end)))
    const h = (d / 60) | 0
    const m = d % 60
    return i18n.t('时分', [h, m])
  }
}

export default utils
