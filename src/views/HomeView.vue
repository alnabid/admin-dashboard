<template>
  <div>
    <Dock @openApp="openApp" />
    <ControllerApp />
    <SettingsApp />
    <ChatApp />
    <PersonalHubApp />
    <StartApp />
    <OpenWorldApp />
  </div>
</template>

<script>
import Dock from '@/components/Base/Dock.vue';
import ChatApp from '@/components/Apps/chatApp.vue';
import ControllerApp from '@/components/Apps/ControllerApp.vue';
import SettingsApp from '@/components/Apps/SettingsApp.vue';
import PersonalHubApp from '@/components/Apps/personalHubApp.vue';
import StartApp from '@/components/Apps/StartApp.vue';
import OpenWorldApp from '@/components/Apps/openWorldApp.vue';

export default {
  components: {
    Dock,
    ControllerApp,
    SettingsApp,
    ChatApp,
    PersonalHubApp,
    StartApp,
    OpenWorldApp
  },

  methods: {
    openApp(appName) {
        let selectedApp = document.getElementById(appName)

        if (appName) {
          selectedApp.classList.add('showApp')
          console.log(appName)
        }
    }
  }
};
</script>