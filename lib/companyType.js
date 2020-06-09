const normalize = require('normalize-space');

module.exports = function(string) {
    let str = normalize(string).replace(/[\x00-\x1F\x7F-\x9F]/g, ""); // remove Unicode control characters

    if( str.match(/,?\sa\.?\s?c\.?$/i) ) { // A.C.
        return 'non-profit'
    }
    else {
        if(
            // S.C.
            str.match(/,?\ss\.?\s?c\.?$/i) ||
            // S.A.
            str.match(/,?\ss\.?\s?a\.?$/i) ||
            // S.A.B.
            str.match(/,?\ss\.?\s?a\.?\s?b\.?$/i) ||
            // sa de cv
            str.match(/,?\s?s\.?\s?a\.?\s?d?\s?e?\s?\.?c?\.?\s?v\.{0,2}$/i) ||
            // S. De G.C. De I.P.
            str.match(/,?\ss\.\s?de\sg\.\s?c\.\sd\s?e\si\.?\s?p\.?$/i) ||
            // s de rl
            str.match(/,?\ss?\s?d\s?e\sr\.?\s?l\.?\s?m?i?$/i) ||
            // s de rl de cv
            str.match(/,?\sS\.?\s?D\s?E?\s?R\.?\s?L\.?\s?D\s?E?\sC\.?\s?V\.?$/i) ||
            // S.A.P.I. de C.V., S.A.P.I. de S.V.
            str.match(/(,?\ss\.?\s?a\.?\s?p\.?\s?i\.?\s?d\s?e\s?)([cs])\s?\.?v\s?\.?/i) ||
            // SAB de CV
            str.match(/,?\ss\.?\s?a\.?\s?b\.?\s?d\s?e\s?c\s?\.?v\s?\.?$/i) ||
            // S.o.f.o.m. E.n.r,
            str.match(/s\.?o\.?f\.?o\.?m\.?\se\.?n\.?r\.?$/i)
        ) {
            return 'profit'
        }
        else { return '' }
    }
};
