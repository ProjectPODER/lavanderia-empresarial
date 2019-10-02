const removeDiacritics = require('diacritics').remove;

module.exports = function(string) {
    return removeDiacritics(string)
        .replace(/[,.]/g, '') // remove commas and periods
        .replace(/[\)\(]/g, '') // remove parentheses
        .replace(/[\/\"\\#°%]/g, '') // remove other characters (/"\#%)
        .replace(/\s{2,}/g, ' ') // remove consecutive spaces that might remain
        .trim()
        .replace(/ /g, '-') // dashes instead of spaces
        .toLowerCase();
};
