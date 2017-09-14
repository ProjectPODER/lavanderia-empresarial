const normalize = require('normalize-space');

module.exports = function(string) {
  return normalize(string)
    // trim non-alphanumeric (including whitespace) unless `.` at end (account for unicode)
    .replace(/^[^a-zA-Z0-9\u0080-\u00FF]+|[^.a-zA-Z0-9\u0080-\u00FF]+$/g, '')
    // uppercase anything follwed by a period
    .replace(/(\w\.)/g, s => (s.toUpperCase()))
    // uppercase and place a dot after any single lowercase letter if preceeded by a dot or space and followed by word boundry
    .replace(/[.\s]([a-z])(?=\b)/g, s => (`${s.toUpperCase()}.`))
    // space before any capitalized immediatly preceeded by a lowercase letter or digit
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // space before capitlize immediately followed by lowercase but preceeded by capital
    .replace(/([A-Z\d])([A-Z][a-z])/g, '$1 $2') // ej, ACROText -> ACRO Text
    // lowercase `De` between two word boundries
    .replace(/\s(D[Ee])\b/g, s => (s.toLowerCase()))
    // space before / period after inc/ltd/cia
    .replace(/\s(INC|LTD|LLC|CIA)(?!\.)/i, ' $1.')
    // A.C.
    .replace(/,?\sa\.?\s?c\.?$/i, ', A.C.')
    .replace(/,?\sasociaci[oó]n\s?civil$/i, ', A.C.')
    // S.C.
    .replace(/,?\ss\.?\s?c\.?$/i, ', S.C.')
    // S.A.
    .replace(/,?\ss\.?\s?a\.?$/i, ', S.A.')
    // S.A.B.
    .replace(/,?\ss\.?\s?a\.?\s?b\.?$/i, ', S.A.B.')
    // sa de cv
    .replace(/,?\s?s\.?a\.?\s?d\s?e?\s?\.?c\.?v\.{0,2}/i, ', S.A. de C.V.')
    // S. De G.C. De I.P.
    .replace(/,?\ss\.\s?de\sg\.\s?c\.\sd\s?e\si\.?\s?p\.?$/i, ', S. de G.C. de I.P.')
    // s de rl
    .replace(/,?\ss?\s?d\s?e\sr\.?\s?l\.?\s?m?i?$/i, ', S. de R.L.')
    // s de rl de cv
    .replace(/,?\sS\.?\s?D\s?E?\s?R\.?\s?L\.?\s?D\s?E?\sC\.?\s?V\.?$/i, ', S. de R.L. de C.V.')
    // S.A.P.I. de C.V., S.A.P.I. de S.V.
    .replace(/(,?\ss\.?\s?a\.?\s?p\.?\s?i\.?\s?d\s?e\s?)([cs])\s?\.?v\s?\.?/i, (match, s1, s2) => (`, S.A.P.I. de ${s2.toUpperCase()}.V.`))
    // SAB de CV
    .replace(/,?\ss\.?\s?a\.?\s?b\.?\s?d\s?e\s?c\s?\.?v\s?\.?$/i, ', S.A.B. de C.V.')
    // S.o.f.o.m. E.n.r,
    .replace(/s\.?o\.?f\.?o\.?m\.?\se\.?n\.?r\.?$/i, 'S.O.F.O.M. E.N.R.')
    // Where last letters are dot or space then Upercase char, put a dot at the end
    // FIXME maybe better to put dot after any leter with whitespace on both sides
    .replace(/([.\s])([A-Z])$/, '$1$2.');
};
