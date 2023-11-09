import React, { createContext, useContext, useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
// import { useArticles } from "./ArticlesContext";

const FormatDateContext = createContext()
export const useFormatDate = () => useContext(FormatDateContext)


export const FormatDateProvider = ({children}) => {

    // const { article } = useArticles
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [date, setDate] = useState(null)

    // console.log(year)
    
    const formatDate = (isoDate) => {
        const parsedDate = parseISO(isoDate);
        let y = format(parsedDate, 'yyyy');
        let m = format(parsedDate, 'MMM');
        let d = format(parsedDate, 'dd');
        setYear(y)
        setMonth(m)
        setDate(d)

    };

     return(
        <FormatDateContext.Provider value={{ year, month, date, formatDate }}>
            {children}
        </FormatDateContext.Provider>
    )
}