/** A list of all field aliases and what they refer to. */
export const BiblatexFieldAliasTypes = {
    'address': 'location',
    'annote': 'annotation',
    'archiveprefix': 'eprinttype',
    'journal': 'journaltitle',
    'pdf': 'file',
    'primaryclass': 'eprintclass',
    'school': 'institution'
}

/** A list of all bibentry aliases and what they refer to. */
export const BiblatexAliasTypes = {
    'conference': 'inproceedings',
    'electronic': 'online',
    'mastersthesis': 'thesis',
    'phdthesis': 'thesis',
    'techreport': 'thesis',
    'www': 'online'
}

/** A list of special chars in Tex and their unicode equivalent. */
export const TeXSpecialChars = [
    ["---", '—'],
    ["\\\\textexclamdown", '¡'],
    ["\\\\textcent", '¢'],
    ["\\\\textsterling", '£'],
    ["\\\\textyen", '¥'],
    ["\\\\textbrokenbar", '¦'],
    ["\\\\textsection", '§'],
    ["\\\\textasciidieresis", '¨'],
    ["\\\\textcopyright", '©'],
    ["\\\\textordfeminine", 'ª'],
    ["\\\\guillemotleft", '«'],
    ["\\\\textlnot", '¬'],
    ["\\\\textregistered", '®'],
    ["\\\\textasciimacron", '¯'],
    ["\\\\textdegree", '°'],
    ["\\\\textpm", '±'],
    ["\\\\texttwosuperior", '²'],
    ["\\\\textthreesuperior", '³'],
    ["\\\\textasciiacute", '´'],
    ["\\\\textmu", 'µ'],
    ["\\\\textparagraph", '¶'],
    ["\\\\textperiodcentered", '·'],
    ["\\\\c\\\\ ", '¸'],
    ["\\\\textonesuperior", '¹'],
    ["\\\\textordmasculine", 'º'],
    ["\\\\guillemotright", '»'],
    ["\\\\textonequarter", '¼'],
    ["\\\\textonehalf", '½'],
    ["\\\\textthreequarters", '¾'],
    ["\\\\textquestiondown", '¿'],
    ["\\\\AE", 'Æ'],
    ["\\\\DH", 'Ð'],
    ["\\\\texttimes", '×'],
    ["\\\\TH", 'Þ'],
    ["\\\\ss", 'ß'],
    ["\\\\ae", 'æ'],
    ["\\\\dh", 'ð'],
    ["\\\\textdiv", '÷'],
    ["\\\\div", '÷'],
    ["\\\\th", 'þ'],
    ["\\\\i", 'ı'],
    ["\\\\NG", 'Ŋ'],
    ["\\\\ng", 'ŋ'],
    ["\\\\OE", 'Œ'],
    ["\\\\oe", 'œ'],
    ["\\\\textasciicircum", 'ˆ'],
    ["\\\\~", '˜'],
    ["\\\\textacutedbl", '˝'],
    ["\\\\textendash", '–'],
    ["\\\\textemdash", '—'],
    ["\\\\textemdash", '―'],
    ["\\\\textbardbl", '‖'],
    ["\\\\textunderscore", '‗'],
    ["\\\\textquoteleft", '‘'],
    ["\\\\textquoteright", '’'],
    ["\\\\quotesinglbase", '‚'],
    ["\\\\textquotedblleft", '“'],
    ["\\\\textquotedblright", '”'],
    ["\\\\quotedblbase", '„'],
    ["\\\\quotedblbase", '‟'],
    ["\\\\textdagger", '†'],
    ["\\\\textdaggerdbl", '‡'],
    ["\\\\textbullet", '•'],
    ["\\\\textellipsis", '…'],
    ["\\\\textperthousand", '‰'],
    ["\\\\guilsinglleft", '‹'],
    ["\\\\guilsinglright", '›'],
    ["\\\\textfractionsolidus", '⁄'],
    ["\\\\texteuro", '€'],
    ["\\\\textcelsius", '℃'],
    ["\\\\textnumero", '№'],
    ["\\\\textcircledP", '℗'],
    ["\\\\textservicemark", '℠'],
    ["\\\\texttrademark", '™'],
    ["\\\\textohm", 'Ω'],
    ["\\\\textestimated", '℮'],
    ["\\\\textleftarrow", '←'],
    ["\\\\textuparrow", '↑'],
    ["\\\\textrightarrow", '→'],
    ["\\\\textdownarrow", '↓'],
    ["\\\\infty", '∞'],
    ["\\\\circ", '∘'],
    ["\\\\multimap", '⊸'],
    ["\\\\mu", 'μ'],
    ["\\\\Mu", 'Μ'],
    ["\\\\~", '∼'],
    ["\\\\#", '⋕'],
    ["\\\\textlangle", '〈'],
    ["\\\\langle", '〈'],
    ["\\\\textrangle", '〉'],
    ["\\\\rangle", '〉'],
    ["\\\\textvisiblespace", '␣'],
    ["\\\\textopenbullet", '◦'],
    ["\\\\%<", '✁'],
    ["\\\\`A", 'À'],
    ["\\\\'A", 'Á'],
    ["\\\\\\^A", 'Â'],
    ["\\\\~A", 'Ã'],
    ["\\\\\"A", 'Ä'],
    ["\\\\rA", 'Å'],
    ["\\\\AA", 'Å'],
    ["\\\\cC", 'Ç'],
    ["\\\\`E", 'È'],
    ["\\\\'E", 'É'],
    ["\\\\\\^E", 'Ê'],
    ["\\\\\"E", 'Ë'],
    ["\\\\`I", 'Ì'],
    ["\\\\'I", 'Í'],
    ["\\\\\\^I", 'Î'],
    ["\\\\\"I", 'Ï'],
    ["\\\\~N", 'Ñ'],
    ["\\\\`O", 'Ò'],
    ["\\\\'O", 'Ó'],
    ["\\\\\\^O", 'Ô'],
    ["\\\\~O", 'Õ'],
    ["\\\\\"O", 'Ö'],
    ["\\\\`U", 'Ù'],
    ["\\\\'U", 'Ú'],
    ["\\\\\\^U", 'Û'],
    ["\\\\\"U", 'Ü'],
    ["\\\\'Y", 'Ý'],
    ["\\\\`a", 'à'],
    ["\\\\'a", 'á'],
    ["\\\\\\^a", 'â'],
    ["\\\\~a", 'ã'],
    ["\\\\\"a", 'ä'],
    ["\\\\aa", 'å'],
    ["\\\\ra", 'å'],
    ["\\\\cc", 'ç'],
    ["\\\\`e", 'è'],
    ["\\\\'e", 'é'],
    ["\\\\\\^e", 'ê'],
    ["\\\\\"e", 'ë'],
    ["\\\\`i", 'ì'],
    ["\\\\'i", 'í'],
    ["\\\\\\^i", 'î'],
    ["\\\\\"i", 'ï'],
    ["\\\\~n", 'ñ'],
    ["\\\\`o", 'ò'],
    ["\\\\'o", 'ó'],
    ["\\\\\\^o", 'ô'],
    ["\\\\~o", 'õ'],
    ["\\\\\"o", 'ö'],
    ["\\\\`u", 'ù'],
    ["\\\\'u", 'ú'],
    ["\\\\\\^u", 'û'],
    ["\\\\\"u", 'ü'],
    ["\\\\'y", 'ý'],
    ["\\\\\"y", 'ÿ'],
    ["\\\\=A", 'Ā'],
    ["\\\\=a", 'ā'],
    ["\\\\uA", 'Ă'],
    ["\\\\ua", 'ă'],
    ["\\\\kA", 'Ą'],
    ["\\\\ka", 'ą'],
    ["\\\\'C", 'Ć'],
    ["\\\\'c", 'ć'],
    ["\\\\\\^C", 'Ĉ'],
    ["\\\\\\^c", 'ĉ'],
    ["\\\\\\.C", 'Ċ'],
    ["\\\\\\.c", 'ċ'],
    ["\\\\vC", 'Č'],
    ["\\\\vc", 'č'],
    ["\\\\vD", 'Ď'],
    ["\\\\vd", 'ď'],
    ["\\\\=E", 'Ē'],
    ["\\\\=e", 'ē'],
    ["\\\\uE", 'Ĕ'],
    ["\\\\ue", 'ĕ'],
    ["\\\\\\.E", 'Ė'],
    ["\\\\\\.e", 'ė'],
    ["\\\\kE", 'Ę'],
    ["\\\\ke", 'ę'],
    ["\\\\vE", 'Ě'],
    ["\\\\ve", 'ě'],
    ["\\\\\\^G", 'Ĝ'],
    ["\\\\\\^g", 'ĝ'],
    ["\\\\uG", 'Ğ'],
    ["\\\\ug", 'ğ'],
    ["\\\\\\.G", 'Ġ'],
    ["\\\\\\.g", 'ġ'],
    ["\\\\cG", 'Ģ'],
    ["\\\\cg", 'ģ'],
    ["\\\\\\^H", 'Ĥ'],
    ["\\\\\\^h", 'ĥ'],
    ["\\\\~I", 'Ĩ'],
    ["\\\\~i", 'ĩ'],
    ["\\\\=I", 'Ī'],
    ["\\\\=i", 'ī'],
    ["\\\\uI", 'Ĭ'],
    ["\\\\ui", 'ĭ'],
    ["\\\\kI", 'Į'],
    ["\\\\ki", 'į'],
    ["\\\\\\.I", 'İ'],
    ["\\\\\\^J", 'Ĵ'],
    ["\\\\\\^j", 'ĵ'],
    ["\\\\cK", 'Ķ'],
    ["\\\\ck", 'ķ'],
    ["\\\\'L", 'Ĺ'],
    ["\\\\'l", 'ĺ'],
    ["\\\\cL", 'Ļ'],
    ["\\\\cl", 'ļ'],
    ["\\\\vL", 'Ľ'],
    ["\\\\vl", 'ľ'],
    ["\\\\L", 'Ł'],
    ["\\\\l", 'ł'],
    ["\\\\'N", 'Ń'],
    ["\\\\'n", 'ń'],
    ["\\\\cN", 'Ņ'],
    ["\\\\cn", 'ņ'],
    ["\\\\vN", 'Ň'],
    ["\\\\vn", 'ň'],
    ["\\\\=O", 'Ō'],
    ["\\\\=o", 'ō'],
    ["\\\\uO", 'Ŏ'],
    ["\\\\uo", 'ŏ'],
    ["\\\\HO", 'Ő'],
    ["\\\\Ho", 'ő'],
    ["\\\\'R", 'Ŕ'],
    ["\\\\'r", 'ŕ'],
    ["\\\\cR", 'Ŗ'],
    ["\\\\cr", 'ŗ'],
    ["\\\\vR", 'Ř'],
    ["\\\\vr", 'ř'],
    ["\\\\'S", 'Ś'],
    ["\\\\'s", 'ś'],
    ["\\\\\\^S", 'Ŝ'],
    ["\\\\\\^s", 'ŝ'],
    ["\\\\cS", 'Ş'],
    ["\\\\cs", 'ş'],
    ["\\\\vS", 'Š'],
    ["\\\\vs", 'š'],
    ["\\\\cT", 'Ţ'],
    ["\\\\ct", 'ţ'],
    ["\\\\vT", 'Ť'],
    ["\\\\vt", 'ť'],
    ["\\\\~U", 'Ũ'],
    ["\\\\~u", 'ũ'],
    ["\\\\=U", 'Ū'],
    ["\\\\=u", 'ū'],
    ["\\\\uU", 'Ŭ'],
    ["\\\\uu", 'ŭ'],
    ["\\\\HU", 'Ű'],
    ["\\\\Hu", 'ű'],
    ["\\\\kU", 'Ų'],
    ["\\\\ku", 'ų'],
    ["\\\\\\^W", 'Ŵ'],
    ["\\\\\\^w", 'ŵ'],
    ["\\\\\\^Y", 'Ŷ'],
    ["\\\\\\^y", 'ŷ'],
    ["\\\\\"Y", 'Ÿ'],
    ["\\\\'Z", 'Ź'],
    ["\\\\'z", 'ź'],
    ["\\\\\\.Z", 'Ż'],
    ["\\\\\\.z", 'ż'],
    ["\\\\vZ", 'Ž'],
    ["\\\\vz", 'ž'],
    ["\\\\vA", 'Ǎ'],
    ["\\\\va", 'ǎ'],
    ["\\\\vI", 'Ǐ'],
    ["\\\\vi", 'ǐ'],
    ["\\\\vO", 'Ǒ'],
    ["\\\\vo", 'ǒ'],
    ["\\\\vU", 'Ǔ'],
    ["\\\\vu", 'ǔ'],
    ["\\\\vG", 'Ǧ'],
    ["\\\\vg", 'ǧ'],
    ["\\\\vK", 'Ǩ'],
    ["\\\\vk", 'ǩ'],
    ["\\\\kO", 'Ǫ'],
    ["\\\\ko", 'ǫ'],
    ["\\\\vj", 'ǰ'],
    ["\\\\'G", 'Ǵ'],
    ["\\\\'g", 'ǵ'],
    ["\\\\\\.B", 'Ḃ'],
    ["\\\\\\.b", 'ḃ'],
    ["\\\\dB", 'Ḅ'],
    ["\\\\db", 'ḅ'],
    ["\\\\bB", 'Ḇ'],
    ["\\\\bb", 'ḇ'],
    ["\\\\\\.D", 'Ḋ'],
    ["\\\\\\.d", 'ḋ'],
    ["\\\\dD", 'Ḍ'],
    ["\\\\dd", 'ḍ'],
    ["\\\\bD", 'Ḏ'],
    ["\\\\bd", 'ḏ'],
    ["\\\\cD", 'Ḑ'],
    ["\\\\cd", 'ḑ'],
    ["\\\\\\.F", 'Ḟ'],
    ["\\\\\\.f", 'ḟ'],
    ["\\\\=G", 'Ḡ'],
    ["\\\\=g", 'ḡ'],
    ["\\\\\\.H", 'Ḣ'],
    ["\\\\\\.h", 'ḣ'],
    ["\\\\dH", 'Ḥ'],
    ["\\\\dh", 'ḥ'],
    ["\\\\\"H", 'Ḧ'],
    ["\\\\\"h", 'ḧ'],
    ["\\\\cH", 'Ḩ'],
    ["\\\\ch", 'ḩ'],
    ["\\\\'K", 'Ḱ'],
    ["\\\\'k", 'ḱ'],
    ["\\\\dK", 'Ḳ'],
    ["\\\\dk", 'ḳ'],
    ["\\\\bK", 'Ḵ'],
    ["\\\\bk", 'ḵ'],
    ["\\\\dL", 'Ḷ'],
    ["\\\\dl", 'ḷ'],
    ["\\\\bL", 'Ḻ'],
    ["\\\\bl", 'ḻ'],
    ["\\\\'M", 'Ḿ'],
    ["\\\\'m", 'ḿ'],
    ["\\\\\\.M", 'Ṁ'],
    ["\\\\\\.m", 'ṁ'],
    ["\\\\dM", 'Ṃ'],
    ["\\\\dm", 'ṃ'],
    ["\\\\\\.N", 'Ṅ'],
    ["\\\\\\.n", 'ṅ'],
    ["\\\\dN", 'Ṇ'],
    ["\\\\dn", 'ṇ'],
    ["\\\\bN", 'Ṉ'],
    ["\\\\bn", 'ṉ'],
    ["\\\\'P", 'Ṕ'],
    ["\\\\'p", 'ṕ'],
    ["\\\\\\.P", 'Ṗ'],
    ["\\\\\\.p", 'ṗ'],
    ["\\\\\\.R", 'Ṙ'],
    ["\\\\\\.r", 'ṙ'],
    ["\\\\dR", 'Ṛ'],
    ["\\\\dr", 'ṛ'],
    ["\\\\bR", 'Ṟ'],
    ["\\\\br", 'ṟ'],
    ["\\\\\\.S", 'Ṡ'],
    ["\\\\\\.s", 'ṡ'],
    ["\\\\dS", 'Ṣ'],
    ["\\\\ds", 'ṣ'],
    ["\\\\\\.T", 'Ṫ'],
    ["\\\\\\.t", 'ṫ'],
    ["\\\\dT", 'Ṭ'],
    ["\\\\dt", 'ṭ'],
    ["\\\\bT", 'Ṯ'],
    ["\\\\bt", 'ṯ'],
    ["\\\\~V", 'Ṽ'],
    ["\\\\~v", 'ṽ'],
    ["\\\\dV", 'Ṿ'],
    ["\\\\dv", 'ṿ'],
    ["\\\\`W", 'Ẁ'],
    ["\\\\`w", 'ẁ'],
    ["\\\\'W", 'Ẃ'],
    ["\\\\'w", 'ẃ'],
    ["\\\\\"W", 'Ẅ'],
    ["\\\\\"w", 'ẅ'],
    ["\\\\\\.W", 'Ẇ'],
    ["\\\\\\.w", 'ẇ'],
    ["\\\\dW", 'Ẉ'],
    ["\\\\dw", 'ẉ'],
    ["\\\\\\.X", 'Ẋ'],
    ["\\\\\\.x", 'ẋ'],
    ["\\\\\"X", 'Ẍ'],
    ["\\\\\"x", 'ẍ'],
    ["\\\\\\.Y", 'Ẏ'],
    ["\\\\\\.y", 'ẏ'],
    ["\\\\\\^Z", 'Ẑ'],
    ["\\\\\\^z", 'ẑ'],
    ["\\\\dZ", 'Ẓ'],
    ["\\\\dz", 'ẓ'],
    ["\\\\bZ", 'Ẕ'],
    ["\\\\bz", 'ẕ'],
    ["\\\\bh", 'ẖ'],
    ["\\\\\"t", 'ẗ'],
    ["\\\\dA", 'Ạ'],
    ["\\\\da", 'ạ'],
    ["\\\\dE", 'Ẹ'],
    ["\\\\de", 'ẹ'],
    ["\\\\~E", 'Ẽ'],
    ["\\\\~e", 'ẽ'],
    ["\\\\dI", 'Ị'],
    ["\\\\di", 'ị'],
    ["\\\\dO", 'Ọ'],
    ["\\\\do", 'ọ'],
    ["\\\\dU", 'Ụ'],
    ["\\\\du", 'ụ'],
    ["\\\\`Y", 'Ỳ'],
    ["\\\\`y", 'ỳ'],
    ["\\\\dY", 'Ỵ'],
    ["\\\\dy", 'ỵ'],
    ["\\\\~Y", 'Ỹ'],
    ["\\\\~y", 'ỹ'],
    ["\\\\pounds", '£'],
    ["\\\\glqq", '„'],
    ["\\\\grqq", '“'],
    ["\\\\`{A}", 'À'],
    ["\\\\'{A}", 'Á'],
    ["\\\\\\^{A}", 'Â'],
    ["\\\\~{A}", 'Ã'],
    ["\\\\\"{A}", 'Ä'],
    ["\\\\r{A}", 'Å'],
    ["\\\\c{C}", 'Ç'],
    ["\\\\`{E}", 'È'],
    ["\\\\'{E}", 'É'],
    ["\\\\\\^{E}", 'Ê'],
    ["\\\\\"{E}", 'Ë'],
    ["\\\\`{I}", 'Ì'],
    ["\\\\'{I}", 'Í'],
    ["\\\\\\^{I}", 'Î'],
    ["\\\\\"{I}", 'Ï'],
    ["\\\\~{N}", 'Ñ'],
    ["\\\\`{O}", 'Ò'],
    ["\\\\'{O}", 'Ó'],
    ["\\\\\\^{O}", 'Ô'],
    ["\\\\~{O}", 'Õ'],
    ["\\\\\"{O}", 'Ö'],
    ["\\\\`{U}", 'Ù'],
    ["\\\\'{U}", 'Ú'],
    ["\\\\\\^{U}", 'Û'],
    ["\\\\\"{U}", 'Ü'],
    ["\\\\'{Y}", 'Ý'],
    ["\\\\`{a}", 'à'],
    ["\\\\'{a}", 'á'],
    ["\\\\\\^{a}", 'â'],
    ["\\\\~{a}", 'ã'],
    ["\\\\\"{a}", 'ä'],
    ["\\\\r{a}", 'å'],
    ["\\\\c{c}", 'ç'],
    ["\\\\`{e}", 'è'],
    ["\\\\'{e}", 'é'],
    ["\\\\\\^{e}", 'ê'],
    ["\\\\\"{e}", 'ë'],
    ["\\\\`{i}", 'ì'],
    ["\\\\'{i}", 'í'],
    ["\\\\\\^{i}", 'î'],
    ["\\\\\"{i}", 'ï'],
    ["\\\\~{n}", 'ñ'],
    ["\\\\`{o}", 'ò'],
    ["\\\\'{o}", 'ó'],
    ["\\\\\\^{o}", 'ô'],
    ["\\\\~{o}", 'õ'],
    ["\\\\\"{o}", 'ö'],
    ["\\\\`{u}", 'ù'],
    ["\\\\'{u}", 'ú'],
    ["\\\\\\^{u}", 'û'],
    ["\\\\\"{u}", 'ü'],
    ["\\\\'{y}", 'ý'],
    ["\\\\\"{y}", 'ÿ'],
    ["\\\\={A}", 'Ā'],
    ["\\\\={a}", 'ā'],
    ["\\\\u{A}", 'Ă'],
    ["\\\\u{a}", 'ă'],
    ["\\\\k{A}", 'Ą'],
    ["\\\\k{a}", 'ą'],
    ["\\\\'{C}", 'Ć'],
    ["\\\\'{c}", 'ć'],
    ["\\\\\\^{C}", 'Ĉ'],
    ["\\\\\\^{c}", 'ĉ'],
    ["\\\\\\.{C}", 'Ċ'],
    ["\\\\\\.{c}", 'ċ'],
    ["\\\\v{C}", 'Č'],
    ["\\\\v{c}", 'č'],
    ["\\\\v{D}", 'Ď'],
    ["\\\\v{d}", 'ď'],
    ["\\\\={E}", 'Ē'],
    ["\\\\={e}", 'ē'],
    ["\\\\u{E}", 'Ĕ'],
    ["\\\\u{e}", 'ĕ'],
    ["\\\\\\.{E}", 'Ė'],
    ["\\\\\\.{e}", 'ė'],
    ["\\\\k{E}", 'Ę'],
    ["\\\\k{e}", 'ę'],
    ["\\\\v{E}", 'Ě'],
    ["\\\\v{e}", 'ě'],
    ["\\\\\\^{G}", 'Ĝ'],
    ["\\\\\\^{g}", 'ĝ'],
    ["\\\\u{G}", 'Ğ'],
    ["\\\\u{g}", 'ğ'],
    ["\\\\\\.{G}", 'Ġ'],
    ["\\\\\\.{g}", 'ġ'],
    ["\\\\c{G}", 'Ģ'],
    ["\\\\c{g}", 'ģ'],
    ["\\\\\\^{H}", 'Ĥ'],
    ["\\\\\\^{h}", 'ĥ'],
    ["\\\\~{I}", 'Ĩ'],
    ["\\\\~{i}", 'ĩ'],
    ["\\\\={I}", 'Ī'],
    ["\\\\={i}", 'ī'],
    ["\\\\u{I}", 'Ĭ'],
    ["\\\\u{i}", 'ĭ'],
    ["\\\\k{I}", 'Į'],
    ["\\\\k{i}", 'į'],
    ["\\\\\\.{I}", 'İ'],
    ["\\\\\\^{J}", 'Ĵ'],
    ["\\\\\\^{j}", 'ĵ'],
    ["\\\\c{K}", 'Ķ'],
    ["\\\\c{k}", 'ķ'],
    ["\\\\'{L}", 'Ĺ'],
    ["\\\\'{l}", 'ĺ'],
    ["\\\\c{L}", 'Ļ'],
    ["\\\\c{l}", 'ļ'],
    ["\\\\v{L}", 'Ľ'],
    ["\\\\v{l}", 'ľ'],
    ["\\\\L{}", 'Ł'],
    ["\\\\l{}", 'ł'],
    ["\\\\'{N}", 'Ń'],
    ["\\\\'{n}", 'ń'],
    ["\\\\c{N}", 'Ņ'],
    ["\\\\c{n}", 'ņ'],
    ["\\\\v{N}", 'Ň'],
    ["\\\\v{n}", 'ň'],
    ["\\\\={O}", 'Ō'],
    ["\\\\={o}", 'ō'],
    ["\\\\u{O}", 'Ŏ'],
    ["\\\\u{o}", 'ŏ'],
    ["\\\\H{O}", 'Ő'],
    ["\\\\H{o}", 'ő'],
    ["\\\\'{R}", 'Ŕ'],
    ["\\\\'{r}", 'ŕ'],
    ["\\\\c{R}", 'Ŗ'],
    ["\\\\c{r}", 'ŗ'],
    ["\\\\v{R}", 'Ř'],
    ["\\\\v{r}", 'ř'],
    ["\\\\'{S}", 'Ś'],
    ["\\\\'{s}", 'ś'],
    ["\\\\\\^{S}", 'Ŝ'],
    ["\\\\\\^{s}", 'ŝ'],
    ["\\\\c{S}", 'Ş'],
    ["\\\\c{s}", 'ş'],
    ["\\\\v{S}", 'Š'],
    ["\\\\v{s}", 'š'],
    ["\\\\c{T}", 'Ţ'],
    ["\\\\c{t}", 'ţ'],
    ["\\\\v{T}", 'Ť'],
    ["\\\\v{t}", 'ť'],
    ["\\\\~{U}", 'Ũ'],
    ["\\\\~{u}", 'ũ'],
    ["\\\\={U}", 'Ū'],
    ["\\\\={u}", 'ū'],
    ["\\\\u{U}", 'Ŭ'],
    ["\\\\u{u}", 'ŭ'],
    ["\\\\H{U}", 'Ű'],
    ["\\\\H{u}", 'ű'],
    ["\\\\k{U}", 'Ų'],
    ["\\\\k{u}", 'ų'],
    ["\\\\\\^{W}", 'Ŵ'],
    ["\\\\\\^{w}", 'ŵ'],
    ["\\\\\\^{Y}", 'Ŷ'],
    ["\\\\\\^{y}", 'ŷ'],
    ["\\\\\"{Y}", 'Ÿ'],
    ["\\\\'{Z}", 'Ź'],
    ["\\\\'{z}", 'ź'],
    ["\\\\\\.{Z}", 'Ż'],
    ["\\\\\\.{z}", 'ż'],
    ["\\\\v{Z}", 'Ž'],
    ["\\\\v{z}", 'ž'],
    ["\\\\v{A}", 'Ǎ'],
    ["\\\\v{a}", 'ǎ'],
    ["\\\\v{I}", 'Ǐ'],
    ["\\\\v{i}", 'ǐ'],
    ["\\\\v{O}", 'Ǒ'],
    ["\\\\v{o}", 'ǒ'],
    ["\\\\v{U}", 'Ǔ'],
    ["\\\\v{u}", 'ǔ'],
    ["\\\\v{G}", 'Ǧ'],
    ["\\\\v{g}", 'ǧ'],
    ["\\\\v{K}", 'Ǩ'],
    ["\\\\v{k}", 'ǩ'],
    ["\\\\k{O}", 'Ǫ'],
    ["\\\\k{o}", 'ǫ'],
    ["\\\\v{j}", 'ǰ'],
    ["\\\\'{G}", 'Ǵ'],
    ["\\\\'{g}", 'ǵ'],
    ["\\\\\\.{B}", 'Ḃ'],
    ["\\\\\\.{b}", 'ḃ'],
    ["\\\\d{B}", 'Ḅ'],
    ["\\\\d{b}", 'ḅ'],
    ["\\\\b{B}", 'Ḇ'],
    ["\\\\b{b}", 'ḇ'],
    ["\\\\\\.{D}", 'Ḋ'],
    ["\\\\\\.{d}", 'ḋ'],
    ["\\\\d{D}", 'Ḍ'],
    ["\\\\d{d}", 'ḍ'],
    ["\\\\b{D}", 'Ḏ'],
    ["\\\\b{d}", 'ḏ'],
    ["\\\\c{D}", 'Ḑ'],
    ["\\\\c{d}", 'ḑ'],
    ["\\\\\\.{F}", 'Ḟ'],
    ["\\\\\\.{f}", 'ḟ'],
    ["\\\\={G}", 'Ḡ'],
    ["\\\\={g}", 'ḡ'],
    ["\\\\\\.{H}", 'Ḣ'],
    ["\\\\\\.{h}", 'ḣ'],
    ["\\\\d{H}", 'Ḥ'],
    ["\\\\d{h}", 'ḥ'],
    ["\\\\\"{H}", 'Ḧ'],
    ["\\\\\"{h}", 'ḧ'],
    ["\\\\c{H}", 'Ḩ'],
    ["\\\\c{h}", 'ḩ'],
    ["\\\\'{K}", 'Ḱ'],
    ["\\\\'{k}", 'ḱ'],
    ["\\\\d{K}", 'Ḳ'],
    ["\\\\d{k}", 'ḳ'],
    ["\\\\b{K}", 'Ḵ'],
    ["\\\\b{k}", 'ḵ'],
    ["\\\\d{L}", 'Ḷ'],
    ["\\\\d{l}", 'ḷ'],
    ["\\\\b{L}", 'Ḻ'],
    ["\\\\b{l}", 'ḻ'],
    ["\\\\'{M}", 'Ḿ'],
    ["\\\\'{m}", 'ḿ'],
    ["\\\\\\.{M}", 'Ṁ'],
    ["\\\\\\.{m}", 'ṁ'],
    ["\\\\d{M}", 'Ṃ'],
    ["\\\\d{m}", 'ṃ'],
    ["\\\\\\.{N}", 'Ṅ'],
    ["\\\\\\.{n}", 'ṅ'],
    ["\\\\d{N}", 'Ṇ'],
    ["\\\\d{n}", 'ṇ'],
    ["\\\\b{N}", 'Ṉ'],
    ["\\\\b{n}", 'ṉ'],
    ["\\\\'{P}", 'Ṕ'],
    ["\\\\'{p}", 'ṕ'],
    ["\\\\\\.{P}", 'Ṗ'],
    ["\\\\\\.{p}", 'ṗ'],
    ["\\\\\\.{R}", 'Ṙ'],
    ["\\\\\\.{r}", 'ṙ'],
    ["\\\\d{R}", 'Ṛ'],
    ["\\\\d{r}", 'ṛ'],
    ["\\\\b{R}", 'Ṟ'],
    ["\\\\b{r}", 'ṟ'],
    ["\\\\\\.{S}", 'Ṡ'],
    ["\\\\\\.{s}", 'ṡ'],
    ["\\\\d{S}", 'Ṣ'],
    ["\\\\d{s}", 'ṣ'],
    ["\\\\\\.{T}", 'Ṫ'],
    ["\\\\\\.{t}", 'ṫ'],
    ["\\\\d{T}", 'Ṭ'],
    ["\\\\d{t}", 'ṭ'],
    ["\\\\b{T}", 'Ṯ'],
    ["\\\\b{t}", 'ṯ'],
    ["\\\\~{V}", 'Ṽ'],
    ["\\\\~{v}", 'ṽ'],
    ["\\\\d{V}", 'Ṿ'],
    ["\\\\d{v}", 'ṿ'],
    ["\\\\`{W}", 'Ẁ'],
    ["\\\\`{w}", 'ẁ'],
    ["\\\\'{W}", 'Ẃ'],
    ["\\\\'{w}", 'ẃ'],
    ["\\\\\"{W}", 'Ẅ'],
    ["\\\\\"{w}", 'ẅ'],
    ["\\\\\\.{W}", 'Ẇ'],
    ["\\\\\\.{w}", 'ẇ'],
    ["\\\\d{W}", 'Ẉ'],
    ["\\\\d{w}", 'ẉ'],
    ["\\\\\\.{X}", 'Ẋ'],
    ["\\\\\\.{x}", 'ẋ'],
    ["\\\\\"{X}", 'Ẍ'],
    ["\\\\\"{x}", 'ẍ'],
    ["\\\\\\.{Y}", 'Ẏ'],
    ["\\\\\\.{y}", 'ẏ'],
    ["\\\\\\^{Z}", 'Ẑ'],
    ["\\\\\\^{z}", 'ẑ'],
    ["\\\\d{Z}", 'Ẓ'],
    ["\\\\d{z}", 'ẓ'],
    ["\\\\b{Z}", 'Ẕ'],
    ["\\\\b{z}", 'ẕ'],
    ["\\\\b{h}", 'ẖ'],
    ["\\\\\"{t}", 'ẗ'],
    ["\\\\d{A}", 'Ạ'],
    ["\\\\d{a}", 'ạ'],
    ["\\\\d{E}", 'Ẹ'],
    ["\\\\d{e}", 'ẹ'],
    ["\\\\~{E}", 'Ẽ'],
    ["\\\\~{e}", 'ẽ'],
    ["\\\\d{I}", 'Ị'],
    ["\\\\d{i}", 'ị'],
    ["\\\\d{O}", 'Ọ'],
    ["\\\\d{o}", 'ọ'],
    ["\\\\d{U}", 'Ụ'],
    ["\\\\d{u}", 'ụ'],
    ["\\\\`{Y}", 'Ỳ'],
    ["\\\\`{y}", 'ỳ'],
    ["\\\\d{Y}", 'Ỵ'],
    ["\\\\d{y}", 'ỵ'],
    ["\\\\~{Y}", 'Ỹ'],
    ["\\\\~{y}", 'ỹ']
]
