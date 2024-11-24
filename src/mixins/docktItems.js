export default {
    data () {
        return {
            dockItems: [
                { name: 'controller', label: 'Controller', app: 'ControllerApp', iconType: 'img', src: "/img/controller.webp"  },
                { name: 'openWorld', label: 'Open World!', app: 'OpenWorldApp', icon: 'fa fa-earth-asia', iconType: 'i' },
                { name: 'chat', label: 'Chat', app: 'ChatApp', icon: 'fa-regular fa-comments', iconType: 'i' },
                { name: 'interact', label: 'Interact', app: 'InteractApp', icon: 'bi bi-pen', iconType: 'i' },
                { name: 'settings', label: 'Settings', app: 'SettingsApp', icon: 'fa fa-gear', iconType: 'i' },
            ],
        }
    }
}