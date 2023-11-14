import { parseISO, format } from "date-fns";

const FormatDate = (isoDate) => {

    const parsedDate = parseISO(isoDate);
        const year = format(parsedDate, 'yyyy');
        const month = format(parsedDate, 'MMM');
        const date = format(parsedDate, 'dd');
        return { year, month, date };
}

export default FormatDate