bamApp.factory('localStorageService', function () {
    return {

        model: {
            siteContext: null,
        },

        save(tabName, object) {
            eval(`this.model.${tabName}Context = object`)
        },

        read(tabName) {
            eval(`return this.model.${tabName}`)
        }

    }
})