function leapYear(year) {
    if(year < 1590) {
        throw new Error('No leap years before 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 && !div100);
    //if divisible by 100 and 4 return false
    //if disible by 4 and not 100 return true
}

export default leapYear;