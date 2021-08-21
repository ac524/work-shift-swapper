module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  /**
   * @param {Date} date 
   * @returns 
   */
  format_date: (date) => {

      // get the current year
      const currentYear = date.getFullYear();
      // get the current month
      const currentMonth = date.getMonth();
      // get the current day
      const currentDate = date.getUTCDate();
      
      return `${currentMonth + 1}/${currentDate}/${currentYear}`;
  }
};
