import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

export function Text() {
  const selectDate = useSelector(({ selectDate }) => selectDate);

  const monthFormat = "MMMM";
  const dayFormat = "do EEEE";

  return (
    <div>
      <p style={{ color: '#A2A2A2' }}>Month</p>
      <input style={{ fontWeight: 'bold' }} type={'text'} value={format(selectDate, monthFormat)}/>
      <p style={{ color: '#A2A2A2' }}>Day</p>
      <input style={{ fontWeight: 'bold' }} type={'text'} value={format(selectDate, dayFormat)}/>
    </div>
  );
}
