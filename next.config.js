const nextTranslate = require('next-translate');

module.exports = {
    images:{
        domains:[]
    },
    env:{
        RECAPTCHA_SITE_KEY:'6Le5eV4dAAAAAJCr4xsxTcTh5fYsefHQO3778MIt',
        RECAPTCHA_SECRET_KEY:'6Le5eV4dAAAAALysWh3g4_0-RPJ-k8xQWnCU_6hQ',
    },
    ...nextTranslate()
}