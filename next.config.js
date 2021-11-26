const nextTranslate = require('next-translate');

module.exports = {
    images:{
        domains:[]
    },
    env:{
        RECAPTCHA_SITE_KEY:'6LeW_1kdAAAAANyU93I2sc690ScfYeYgJUxWjLAq',
        RECAPTCHA_SECRET_KEY:'6LeW_1kdAAAAAPk7Qpikoo5yh1f6RCg9i3SMEBGz',
    },
    ...nextTranslate()
}