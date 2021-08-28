export const stringDotToArray = (string) => string.split(', ').map(subString => subString.replace(', ', ''));

export const formatDate = (string) => {
    let date = new Date(string);
    let dd = date.getDate();
    let mm = date.getMonth();
    return `${dd > 10 ? dd : `0${dd}`}/${mm > 10 ? dd : `0${mm}`}/${date.getFullYear()}`;
};