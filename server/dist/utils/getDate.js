"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
        'December'];
    const monthName = monthNames[date.getMonth()];
    const result = day + ' ' + monthName;
    return result;
};
exports.getDate = getDate;
