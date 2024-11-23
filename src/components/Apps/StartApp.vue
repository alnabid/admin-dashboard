<template>
    <section id="startApp" class="app-widget start-widget">
        <div class="start-container">
            <div class="start-content">
                <h1>See All Apps</h1>
                <div class="start-items">
                    <div class="item" @click="$emit('openApp', 'controllerApp')">
                        <p>Controller</p>
                        <img src="@/assets/img/controller.webp" alt="">
                    </div>
                    <div class="item" @click="$emit('openApp', 'openWorldApp')">
                        <p>Open World!</p>
                        <i class="fa fa-earth-asia"></i>
                    </div>
                    <div class="item" @click="$emit('openApp', 'chatApp')">
                        <p>Chat</p>
                        <i class="fa-regular fa-comments"></i>
                    </div>
                    <div class="item" @click="$emit('openApp', 'personalHubApp')">
                        <p>Personal Hub</p>
                        <i class="fa fa-house-lock"></i>
                    </div>
                    <div class="item" @click="$emit('openApp', 'settingsApp')">
                        <p>Settings</p>
                        <i class="fa fa-gear"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
@import url(../../assets/app-widget.css);

.start-widget {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.103);
    opacity: 100%;
    z-index: -1;
}
.start-items {
    display: flex;
    gap: 0.5rem;
}
.start-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.start-content {
    background: #1b1b1e59;
    height: 300px;
    width: 800px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
}
.start-content h1 {
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: white;
}
</style>
<script>
import appWidget from '@/mixins/appWidget';

export default {
    mixins: [appWidget]
}
</script>