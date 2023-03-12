export const getDate = (): string => {

    const date = new Date();
    const day = date.getDate();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
        'December'];

    const monthName = monthNames[date.getMonth()];

    const result = day + ' ' + monthName;

    return result
}