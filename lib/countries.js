const countries = require("i18n-iso-countries");

module.exports = function(string) {
    let langs = ['en', 'es'];
    let countryCode = null;
    if(!string) return '';

    string = string.trim();

    // We might receive a valid country code, check this first
    if(string.length == 2) {
        if( countries.isValid(string) ) return string;
    }

    // Check if valid country name in Spanish or English
    for(let i=0; i<langs.length; i++) {
        countryCode = countries.getAlpha2Code(string, langs[i]);
        if(countryCode) return countryCode;
    }

    // All special cases (misspellings, weird cases, etc)
    switch(string) {
        case 'Russia': return 'RU';
        case 'Escocia': return 'GB';
        case 'Gales': return 'GB';
        case 'Inglaterra': return 'GB';
        case 'Irlanda del Norte': return 'GB';
        case 'Reino Unido': return 'GB';
        case 'United States': return 'US';
        case 'Estados Unidos de América': return 'US';
    }

    if( string.match(/m(e|é)xico/i) ) return 'MX';
    if( string.match(/(united\sKingdom|england)/i) ) return 'UK';

    return '';
};
