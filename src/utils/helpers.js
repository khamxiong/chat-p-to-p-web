import moment from "moment";

export const convertDate = (format, date) => {
    return moment(date).format(format);
}