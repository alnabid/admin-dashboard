export default {
    methods: {
        closeApp() {
            let app = this.$el
            app.classList.remove('showApp')
        }
    }
}