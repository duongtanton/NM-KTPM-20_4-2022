const moment = require("moment/moment")

const formatDate = date => moment(date).format('MM/DD/YYYY HH:MM:SS');
const json = content => JSON.stringify(content);



const twoNumSum = (a, b) => a + b;
const formatDateInput = date => moment(date).format('YYYY-MM-DD');


module.exports = {
    formatDate,
    twoNumSum,
    json,
    formatDateInput,
}