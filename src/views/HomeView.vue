<template>
  <div>
    <Dock @openApp="openApp" ref="dock" />

    <div v-for="(app, index) in activeApps" :key="index" :class="{ 'draggable-app': app.draggable }"
      :style="{ top: app.position.y + 'px', left: app.position.x + 'px', zIndex: app.zIndex }"
      @mousedown="app.draggable ? startDrag(index, $event) : () => { }" @click="bringToFront(index, app.name)">
      <component :ref="app.name" @freeze="freeze(index)" @unFreeze="unFreeze(index)" @addApp="addApp" :is="app.name"
        @openApp="openApp" @closeApp="() => closeApp(index)" />
    </div>
  </div>
</template>
<script>
import Dock from '@/components/Base/Dock.vue';
import ChatApp from '@/components/Apps/ChatApp.vue';
import ControllerApp from '@/components/Apps/ControllerApp.vue';
import SettingsApp from '@/components/Apps/SettingsApp.vue';
import InteractApp from '@/components/Apps/InteractApp.vue';
import StartApp from '@/components/Apps/StartApp.vue';
import OpenWorldApp from '@/components/Apps/OpenWorldApp.vue';

export default {
  components: {
    Dock,
    ChatApp,
    ControllerApp,
    SettingsApp,
    InteractApp,
    StartApp,
    OpenWorldApp
  },

  data() {
    return {
      activeApps: [],
      draggingApp: null,
      offset: { x: 0, y: 0 }
    };
  },

  methods: {

    addApp(appName) {
      const appIndex = this.activeApps.findIndex(app => app.name === appName);
      this.activeApps.push({
        name: appName,
        position: { x: 0, y: 0 },
        draggable: appName !== 'startApp',
        zIndex: 0,
        freezed: false,
      });

    },
    openApp(appName) {
      const appIndex = this.activeApps.findIndex(app => app.name === appName);

      if (appIndex !== -1) {
        this.activeApps.splice(appIndex, 1);
      } else {
        const newApp = {
          name: appName,
          position: { x: 0, y: 0 },
          draggable: appName !== 'startApp',
          zIndex: 0,
          freezed: false,
        };

        this.activeApps = [...this.activeApps, newApp];
      }
    },

    freeze(index) {
      this.activeApps[index].freezed = true;
    },

    unFreeze(index) {
      this.activeApps[index].freezed = false;
    },

    closeApp(index) {
      this.activeApps.splice(index, 1);
    },

    startDrag(index, event) {
      const app = this.activeApps[index];

      if (app.freezed) return;

      this.draggingApp = index;
      this.offset.x = event.clientX - app.position.x;
      this.offset.y = event.clientY - app.position.y;

      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },

    drag(event) {
      if (this.draggingApp !== null) {
        const app = this.activeApps[this.draggingApp];
        app.position.x = event.clientX - this.offset.x;
        app.position.y = event.clientY - this.offset.y;
      }
    },

    stopDrag() {
      this.draggingApp = null;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },

    bringToFront(index, appName) {
      if (this.activeApps[index]?.freezed) return;

      if (appName === 'startApp') {
        this.activeApps = this.activeApps.filter(x => x.name !== appName);
      } else {
        this.activeApps.forEach((app, i) => {
          app.zIndex = 0;

          if (index === i) {
            app.zIndex = 10;
          }
        });
      }
    }

  },
};
</script>

<style>
.draggable-app {
  position: absolute;
  cursor: move;
  z-index: 10;
}
</style>
