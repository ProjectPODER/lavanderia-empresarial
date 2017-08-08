module.exports = function(string) {
  return string
    .trim()
    // period after inc/ltd/cia
    .replace(/\s(INC|LTD|LLC|CIA)(?!\.)/i, ' $1.')
    // A.C.
    .replace(/,?\sa\.?\s?c\.?$/i, ', A.C.')
    // S.C.
    .replace(/,?\ss\.?\s?c\.?$/i, ', S.C.')
    // S.A.
    .replace(/,?\ss\.?\s?a\.?$/i, ', S.A.')
    // S.A.B.
    .replace(/,?\ss\.?\s?a\.?\s?b\.?$/i, ', S.A.B.')
    // sa de cv
    .replace(/,?\s?s\.?a\.?\s?de?\s?\.?c\.?v\.{0,2}$/i, ', S.A. de C.V.')
    // S. De G.C. De I.P.
    .replace(/,?\ss\.\s?de\sg\.\s?c\.\sde\si\.?\s?p\.?$/i, ', S. de G.C. de I.P.')
    // s de rl
    .replace(/,?\ss?\s?de\sr\.?\s?l\.?\s?m?i?$/i, ', S. de R.L.')
    // s de rl de cv
    .replace(/,?\sS\.?\s?DE?\s?R\.?\s?L\.?\s?DE?\sC\.?\s?V\.?$/i, ', S. de R.L. de C.V.')
    // S.A.P.I. de C.V.
    .replace(/,?\ss\.?\s?a\.?\s?p\.?\s?i\.?\s?de\s?c\s?\.?v\s?\.?$/i, ', S.A.P.I. de C.V.')
    // SAB de CV
    .replace(/,?\ss\.?\s?a\.?\s?b\.?\s?de\s?c\s?\.?v\s?\.?$/i, ', S.A.B. de C.V.')
    // S.a.p.i. De C.v. S.o.f.o.m. E.n.r
    .replace(/,?\ss\.?\s?a\.?\s?p\.?\s?i\.?\s?de\s?c\s?\.?v\.?\s?s\.?o\.?f\.?o\.?m\.?\se\.?n\.?r\.?$/i, ', S.A.P.I. de C.V. S.O.F.O.M. E.N.R.')
    // Where last letters are .Upercase end of line, put a dot at the end
    .replace(/\.([A-Z])$/, '.$1.');
};
