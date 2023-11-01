import React from 'react'
import { parseISO, format } from 'date-fns';

const StringSplit = () => {
  
    const isoDate = '2023-10-17T00:00:00';
    const parsedDate = parseISO(isoDate)
    const formattedDate = format(parsedDate, 'yyyy, MMM, dd')
    let dateArr = formattedDate.split(',')
    let year = dateArr[0]; // Get the year from the first element of the array
    let month = dateArr[1]; //get the month from the second element of the array
    let date = dateArr[2]; // Get the date from the first two characters of the third element of the array
        
    // console.log(formattedDate)
    // console.log(dateArr)
    console.log(year)
    console.log(month)
    console.log(date)


    return (
        <div></div>
  )
}

export default StringSplit