const moment = require("moment/moment")

const formatDate = date => moment(date).format('MM/DD/YYYY HH:MM:SS');
const json = content => JSON.stringify(content);



const twoNumSum = (a, b) => a + b;
const ArrayAt = (arr, index) => arr[index] || [];
const formatDateInput = date => moment(date).format('YYYY-MM-DD');
const formatDateTimeInput = date => moment(date).format('YYYY-MM-DD HH-mm-ss');

const equal = (a, b) => a == b;

module.exports = {
    formatDate,
    twoNumSum,
    json,
    ArrayAt,
    formatDateInput,
    formatDateTimeInput,
    equal,
}