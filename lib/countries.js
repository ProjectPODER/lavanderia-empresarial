// const countries = require('i18n-country-code');
const countries = require("i18n-iso-countries");

module.exports = function(string) {
    let langs = ['en', 'es'];
    let countryCode = null;

    // We might receive a valid country code, check this first
    if(string.length == 2) {
        if( countries.isValid(string) ) {
            console.log('already code:', string);
            return string
        }
    }

    // Check if valid country name in Spanish or English
    langs.map( (lang) => {
        countryCode = countries.getAlpha2Code(string, lang);
        if(countryCode) {
            console.log('found:', string, 'converts into:', countryCode);
            return countryCode
        }
    } );

    // All special cases (misspellings, weird cases, etc)
    switch(string) {
        default:
            console.log('not found:', string);
            break;
    }

    return countryCode;
};
