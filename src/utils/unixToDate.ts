import dayjs from "dayjs";

const unixToDate = (unix : number) => dayjs.unix(unix).format('DD/MM/YYYY hh:mm A')


export default unixToDate