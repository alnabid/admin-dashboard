export default {
    data () {
        return {
            dockItems: [
                { name: 'controller', label: 'Controller', app: 'ControllerApp', iconType: 'img', src: "/img/controller.webp"  },
                { name: 'openWorld', label: 'Open World!', app: 'openWorldApp', icon: 'fa fa-earth-asia', iconType: 'i' },
                { name: 'chat', label: 'Chat', app: 'chatApp', icon: 'fa-regular fa-comments', iconType: 'i' },
                { name: 'personalHub', label: 'Personal Hub', app: 'personalHubApp', icon: 'fa fa-house-lock', iconType: 'i' },
                { name: 'settings', label: 'Settings', app: 'settingsApp', icon: 'fa fa-gear', iconType: 'i' },
            ],
        }
    }
}