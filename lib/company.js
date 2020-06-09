const _ = require('lodash');

const diccionario = [
    '\\babc\\b', 'abaa?stecedor', 'abarrote', 'abogados', 'acabados?', 'acad(e|é)m', 'accesorio', 'aceite', 'aceros', 'acopio', 'aco?(u|ú)stic',
    'actitud', 'actividad', 'acua?i?cultura', 'adhesiv', 'administra', 'adquisi', 'advanced', 'advise?o?r', 'aero', 'agrupaci(o|ó)n',
    'agency?(ia)?', 'agr(i|í)cola', 'agronom(i|í)a', 'aguascalientes', '\\bair\\b', 'aircraft', 'airlines', 'alarm', 'alfombra', 'all?ian(ce)?(za)?',
    'aliment', 'alquil', 'alternativ', 'alumbrado', 'aluminio', 'ambient', 'american', 'anal(i|í)?y?tic', 'an(a|á)li?y?sis', 'anillos', 'an(o|ó)nim',
    'aplica(c|t)', '\\bapps?\\b', 'applied', '\\b(a|á)rea\\b', 'arquitect', 'arrenda', '\\barte?\\b', 'art(i|í)culo', 'asegura', 'asesor',
    'aserradero', 'as(f|ph)alt', 'ass?ocia', 'atenci(o|ó)n', 'atlantic', 'av(i|í)cola', 'ayuntamiento', '\\baudio', 'authority', '\\bauto', 'auxiliar',
    '\\bbanc(a|o)\\', 'banquete', 'bebida', 'beneficencia', 'biblioteca', 'bienes', '\\bbio\\b', 'bmw', '\\bboards?\\b', 'bombas', 'bombero', 'british',
    'bufete', 'business',
    'cable', '\\bcaf(e|é)\\b', 'cafeter(i|í)a', 'calidad', 'california', 'cami(o|ó)n', 'canad(a|ian)', 'capacita', '\\bcarne', 'carnicer', 'carretera',
    'carrocer', 'carpinter(i|í)a', 'cemento', '\\bcent(er|ro|ral)s?\\b', 'cerrajer', 'chemical', '\\bciencias?', 'cientific', 'cirug(i|í)a', 'ciudad',
    'cliente', '\\bclima(s|te)?\\b', 'cl(i|í)nic(a|o)', 'club', 'coahuila', 'colecciones', 'colegio', 'combusti', 'comm?erci(al|o)', 'comisariado',
    'comm?isi(o|ó)n', '\\bcomit(e|é)\\b', 'compa(n|ñ)(i|í)?(a|y)', 'competencia', 'complemento', 'compu', 'comunal', 'comm?unica', 'concentrado',
    'concierge', 'concreto', 'condici(o|ó)n', 'condominio', '(con)?federaci(o|ó)n', 'confecci', 'conferenc', 'congres(o|s)', 'con(c|s)ejo',
    'conserva(c|t)ion', 'consorcio?', '(c|k)onstruc', 'consult', 'consumibles', 'contabilidad', 'continental', 'contrac?t', 'control', 'cooperativ',
    'coordina', 'corpora(c|t)(ion|ión|iv|e)', 'creaciones', 'cultur',
    '\\bdata\\b', 'decoraci', '\\bd?el mundo\\b', '\\b(sub)?delega', 'departamento', 'deport(e|iv)', 'dep(o|ó)sit', 'desarroll', 'desierto', 'despacho',
    'diagn(o|ó)st', '\\bdiario\\b', 'dibujo', 'digital', 'direc(c|t)?', '\\bdise(n|ñ)(a|o)', 'dispositiv', 'distrib', 'divisi(o|ó)n', 'doctore?s', 'drenaje',
    'drinks', '(pro)?ducto', 'drilling',
    'ecol(o|ó)g', 'econ(o|ó)mi', 'edific(a|io)', 'edi(c|t)i(o|ó)n', 'editor', 'educa', 'eff?icient', 'ej(e|é)rcito', 'e(j|x)ecutiv', 'ejido', 'el(e|é)ctr',
    'eleva(d|t)or', 'embajada', 'embotelladora', 'empaque', 'employee', 'empresa', 'endoscop(i|í)a', 'energ', 'engine', 'enterprise', 'entertainment', 'envase',
    'equip', 'escolar', '\\bescuela\\b', 'special', 'e?spect(a|á)cul', '\\bestaci(o|ó)n\\b', 'estacionamiento', 'esta(do|tal)', 'estampan?do', 'strateg',
    'structur', 'estudio', 'europea', 'evalua', 'event', 'exhibit', 'explor', 'exp(e|o)rt', 'express', 'extinguidor', 'extintor', '\\bexpo\\b',
    'f(a|á)brica', 'factory', 'family', 'farmac', 'federal', 'fedex', 'ferreter', 'festival', 'fianza', 'fideicomiso', 'fiesta', 'filtro', '\\bfinal\\b', 'financ',
    'films', 'filmoteca', 'formaci(o|ó)n', 'formas', 'f(o|ó)rmul', 'foto', 'fo?unda(c|t)i(o|ó)n?', 'franquicia', 'frenos', 'frutas', '\\bfuerza', 'fumigac',
    'funci(o|ó)n',
    'ganader', 'gallery', 'geotecnia', 'general', 'gen(e|é)tic', 'geren(cia|te)', 'global', 'gobierno', 'gourmet', 'gr(a|á)(f|ph)ic', 'graf(i|í)a\\b',
    'growth', 'gruas', '\\bgrupo', 'guarder(i|í)a',
    'hacienda', 'headquarters', 'healthcare', 'hermanos', 'herraje', 'herramienta', 'herrer(i|í)a', 'h(i|y)dr(a|á)ulic', 'hidroel(e|é)ctr',
    'hidrotecnia', 'holding', 'hosting', 'hospital', '\\bhotel',
    'im(a|á)gen?', '(im)?permea(b|v)i?l', 'implement', 'import', 'impres', 'impuls', 'incorp', 'independ', 'industr', 'inform(a|á)ti(c|o|v)', 'infra',
    'ingenier', 'ingredient', 'iniciativa', 'inmobiliari', 'inn?ova', 'inspec', 'instal', 'institu', 'instrument', 'insumo', 'insurance', 'intell?igen',
    'integra', '\\binter(a|b|c|f|k|m|n|s|v)', 'inventario', 'investment', 'investiga', 'investor', 'inyecc',
    'jardine(s|ria)', 'jefatura', 'joyer(i|í)a', 'jur(i|í)dic',
    'knowledge',
    'laboral', 'laborator', '\\blabs\\b', '\\blatin(a|o)', 'legumbres', 'librer(i|í)a', 'licitaci(o|ó)n', 'licitante', 'limit(a|e)d', '\\blimpia',
    'limpieza', 'ling(u|ü)(i|í)stic', 'llantas', 'log(i|í)stic', '\\blogo', 'lubri',
    'maderer(i|í)a', 'management', 'mantenimiento', 'manufactur', 'marathon', 'marcas', 'mar(i|í)tim', 'market', 'material', 'm(a|á)qui(l|n)a', 'mazatlan',
    'mech?anic', 'medicin', 'medic(a|o)', 'medic\\b', '\\bmedios', 'membres(i|í)a', 'mercados', 'mercantil', 'metal', '\\bmetr(o|ic)', 'm(e|é)xic',
    'mi(c|k)ro', 'mining', 'mobile', 'modern', 'monitor', 'montacargas', '\\bmonterrey\\b', 'moody', 'motocicl', 'motor', 'mueble', 'multi', 'mundial',
    'municip',
    'na(c|t)ional', 'natural', 'negocios', 'network', '\\bnew\\b', '(no|su)ro?este', 'norte', 'noticia', 'nutri',
    'obras', 'occidente', 'oficina', 'oftalmolog', 'opera(d|t)or', 'organismo', 'organiza', 'oriente', 'outsourcing', 'offshore',
    'pac(i|í)fic', 'panor(a|á)mic', 'papele', 'partes', 'patronato', 'pavimento', 'payroll', '\\bpc\\b', 'pemex', 'people', 'peque(n|ñ)os',
    'p(e|é)rdida', 'perforaci(o|ó)n', 'peri(o|ó)di', 'pintura', 'pharma', 'philadelphia', 'philharmonia', 'plata?form', '\\bplus\\b', 'polic(i|í)a',
    'power', 'precisi(o|ó)n', 'premium', 'presiden(cia|t)', 'print', 'privad', '\\bprivate\\b', 'proces', 'produc', 'profe(c|s)s?ional', 'program', 'promo',
    'pron(o|ó)stic', 'property', 'protec', 'proveedor', 'pro(y|j)ect', 'proxy', 'publi(c|sh)?', 'purific',
    'quantum', 'qu(i|í)mic',
    '\\bradio', 'rec(i|y)cl', 'recolect', 'refacc', 'refri', 'regi(o|ó)n', 'relojer', 'remodel', 'remolque', 'renovac', '\\brental\\b', 'repara',
    'represent', 'repuesto', 'research', 'restaurant', 'rob(o|ó)tic',
    'safety', 'satelital', 'savings', 'science', 'script', 'secretar', 'securit', 'segur(idad|o)', 'seminar', 'serv\\b', 'servic', '\\bsiemens\\b', 'sindicato',
    'sinergia', 's(i|y)stem', 'sociedad', 'software', 'solu(c|t)i(o|ó)n', 'soporte', '\\bspa\\b', 'spanish', '\\bsport', 'squash', '\\bstate\\b',
    'sub(a|á)rea', 'sucursal', 'suministro', 'supervis', 'supply', 'suprem(a|o)', 'surtidor',
    '\\btabasco\\b', 'taller', 'tapete', 'taquiza', 'teatro', '\\btech\\b', 't(e|é)ch?n(o|i)', 'techos', 'tejidos', 'telecom', 'tel(e|é)fon', 'televis',
    'tensi(o|ó)n', 'terracer(i|í)a', 'terrestre', '\\bthe\\b', 'theat(er|re)', 'ticket', 'tijuana', 'tokyo', 'torno', 'tortas', 'tortill', 'toyota',
    'traducci(o|ó)n', 'traffic', 'transform', 'transport', 'tratamiento', 'travel', 'to?ur(i|í)s', 'training', 'tr(o|ó)nic', '\\btrust(ee)?\\b', 'turbo', '\\btv\\b',
    '\\buk\\b', 'unidad', 'uniform', 'uni(o|ó)n', 'united', 'unity', 'univers(i|a|o)', 'urbaniz',
    'valua(c|t)i(o|ó)n', '\\bvalue\\b', 'v(a|á)lvula', 'veh(i|í)c', 'vertical', 'video', 'vidrie', 'vigila', '\\bvip\\b', 'v(i|í)veres', 'vivienda',
    '\\bweb\\b', 'works?',
    '\\bzona\\b'];

module.exports = function(string){
  string = string.trim();

  // string is null
  if(!string) { return false }

  // string is a number
  if(typeof string === 'number') { string = string.toString() }

  // contains exactly one word
  if (_.words(string).length === 1) { return true }
  // has exactly one space
  //if ( (string.match(/ /g)|| []).length ===1 ) { return true }

  // Is a very short name
  if( string.length <= 4 ) { return true }

  // Contains "&"
  if( string.match( /&/ ) ) { return true }

  // Contains "/"
  if( string.match( /\// ) ) { return true }

  // Contains 2 or more non-word characters in a row
  // if( string.match( /\W{2,}/ ) ) { return true }

  // Contains no whitespace at all
  if( string.match( /^\S+$/ ) ) { return true }

  // Contains single letters with spaces in between 2 or more times
  if( string.match( /(\w\s){2,}/ ) ) { return true }

  // Revisar las terminaciones comunes para una empresa
  //    CV, BV, SCP, RL
  if( string.match( /\s(ac|sc|s\/c|s c|sa|s\/a|s a|cv|c\/v|c v|cc|c\/c|c c|bv|b\/v|b v|scp|rl|r\/l|r l|pcs|llc|lc|lp|llp|com|spd|nv|ag|slrc)$/i ) ) { return true }
  if( string.match( /_(sc|s_c|sa|s_a|cv|c_v|cc|c_c|bv|b_v|scp|rl|r_l|pcs|llc|lc|llp|lp|com|spd|nv|ag|slrc)$/i ) ) { return true }

  // A.C.
  if( string.match(/,?\sa\.?\s?c\.?$/i) ) { return true }
  if( string.match(/,?\sasociaci[oó]n\s?civil$/i) ) { return true }
  // S.C.
  if( string.match(/,?\ss\.?\s?c\.?$/i) ) { return true }
  // S.A.
  if( string.match(/,?\ss\.?\s?a\.?$/i) ) { return true }
  // S.A.B.
  if( string.match(/,?\ss\.?\s?a\.?\s?b\.?$/i) ) { return true }
  // sa de cv
  if( string.match(/,?\s?s\.?\s?a\.?\s?d?\s?e?\s?\.?c?\.?\s?v\.{0,2}$/i) ) { return true }
  // S. De G.C. De I.P.
  if( string.match(/,?\ss\.\s?de\sg\.\s?c\.\sd\s?e\si\.?\s?p\.?$/i) ) { return true }
  // s de rl
  if( string.match(/,?\ss?\s?d\s?e\sr\.?\s?l\.?\s?m?i?$/i) ) { return true }
  // s de rl de cv
  if( string.match(/,?\sS\.?\s?D\s?E?\s?R\.?\s?L\.?\s?D\s?E?\sC\.?\s?V\.?$/i) ) { return true }
  // S.A.P.I. de C.V., S.A.P.I. de S.V.
  if( string.match(/(,?\ss\.?\s?a\.?\s?p\.?\s?i\.?\s?d\s?e\s?)([cs])\s?\.?v\s?\.?/i) ) { return true }
  // SAB de CV
  if( string.match(/,?\ss\.?\s?a\.?\s?b\.?\s?d\s?e\s?c\s?\.?v\s?\.?$/i) ) { return true }
  // S.o.f.o.m. E.n.r,
  if( string.match(/s\.?o\.?f\.?o\.?m\.?\se\.?n\.?r\.?$/i) ) { return true }

  // Revisar si empieza con CIA (compañía) o ASOC (asociación) o CFE
  if( string.match( /^(cia|asoc|cfe)\s/i ) ) { return true }

  // Cuando es PALABRA y PALABRA
  if( string.match( /^(\w+)\sy\s(\w+)$/i ) ) { return true }

  // Cuando es PALABRA-PALABRA
  if( string.match( /^(\w+)-(\w+)$/i ) ) { return true }

  // Usar diccionario para comparar
  var re = new RegExp(diccionario.join("|"), "i");
  // console.log(re);
  if( re.test(string) ) { return true }

  // Regex breakdown:
  // /\d                            => si tiene algun numero
  // |,                             => contiene comas (,)
  // |\.                            => contiene puntos (.)
  // |\s&                           => contiene &
  // |\sof\s
  // |\sand\s
  // |\sthe\s                       => contiene las palabras of, and, the
  // |\(.*\)                        => contiene algo entre paréntesis
  // |inc
  // |corp
  // |ltd
  // |gmbh?                         => contiene las palabras inc, corp, ltd, gmbh
  // |gro?upo?                      => contiene la palabra group o grupo
  // |\singenieria
  // |\sbanco
  // |\sahorro
  // |\snacional
  // |\sservicios
  // |\sfinancieros                 => contiene las palabras ingenieria, banco, ahorro, nacional, servicios, financieros
  // |\ss\.?a\.?\s?de?\s?c\.?v\.?   => intenta ver si contiene la combinación sa de cv (buggy)
  // |cv$                           => termina en cv
  // /i                             => case insensitive
  // return true or false based on string matches
  return /\d|\s&|\sof\s|\sand\s|\sthe\s|\binc\b|\bcorp\b|\bltd\b|\bgmbh?\b|\sgro?upo?|\singenieria|\sbanco|\sbank|\sahorro|\snacional|\sservicios|\sfinancieros|\ss\.?a\.?\s?de?\s?c\.?v\.?/i.test(string);
}
