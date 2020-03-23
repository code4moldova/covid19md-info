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

    let i18n = $.i18n();
    i18n.locale = locale;
    i18n.load( 'newdesign/i18n/' + locale + '/' + 'translations.json', locale ).done(function () {
        $('html').i18n();
    });
    $('#language').text(supportLanguages.get(locale));
    $('#language').attr("href", "#".concat(locale));
    Cookies.set('lang', locale, { expires: 7 });
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
        updateText(Cookies.get("lang"))
    }

} );

$('.langs a').click(function () {
    'use strict';
    updateText(null)
});