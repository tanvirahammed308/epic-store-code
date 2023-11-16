import React from 'react';
import moment from 'moment';

const DateFormatter = ({ date, format }) => {
  const formattedDate = moment(date).format(format);

  return <span>{formattedDate}</span>;
};

export default DateFormatter;
