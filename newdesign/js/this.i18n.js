function updateText(byDefault) {
    'use strict';

    let locale,
        language,
        langValue,
        supportLanguages = new Map()
            .set('ru', 'ROMÂNA')
            .set('ro', "РУССКИЙ");

    if (byDefault != null) {
        locale = byDefault;
    } else {
        langValue = $('#language').text();
        language = getKeyByValue(supportLanguages, langValue);
        locale = (language[0] === 'ro' ? 'ru' : 'ro');
    }

    $('#language').text(supportLanguages.get(locale));
    $('#language').attr("href", "?lang=".concat(locale));
    Cookies.set('clang', locale, { expires: 7 });
}
function getKeyByValue(object, value) {
    'use strict';
    return [...object.entries()]
        .filter(({ 1: v }) => v === value)
        .map(([k]) => k);
}

$( document ).ready( function ( $ ) {
    'use strict';
    if (! Cookies.get("firstLoad")) {
        updateText('ro');
        Cookies.set("firstLoad", true)
    } else {
        updateText(Cookies.get("clang"))
    }

} );

$('.langs a').click(function () {
    'use strict';
    updateText(null)
});