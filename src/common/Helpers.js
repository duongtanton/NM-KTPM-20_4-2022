const moment = require("moment/moment")

const formatDate = date => moment(date).format('MM/DD/YYYY HH:MM:SS');
const json = content => JSON.stringify(content);



const twoNumSum = (a, b) => a + b;
const localTimeFormat = time => new Date(time).toLocaleString();

module.exports = {
    formatDate,
    twoNumSum,
    localTimeFormat,
    json,
}