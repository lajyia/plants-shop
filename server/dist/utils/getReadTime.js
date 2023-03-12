"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadTime = void 0;
const getReadTime = (letters) => {
    const speedRead = 220;
    const timeRead = Math.round(letters / speedRead);
    const result = timeRead > 0 ? timeRead + ' ' + 'minutes' : '1 minutes';
    return result;
};
exports.getReadTime = getReadTime;
