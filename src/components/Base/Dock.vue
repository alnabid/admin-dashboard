<template>
    <div class="dock-container">
        <div class="start item" @click="$emit('openApp', 'startApp')">
            <p>Start</p>
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="divider"></div>
        <div class="dock-items">
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
</template>
<style scoped>
.dock-container {
    position: fixed;
    max-width: 600px;
    bottom: 2rem;
    transform: translate(-50%, 0);
    left: 50%;
    display: flex;
    padding: 0.5rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
    gap: 0.5rem;
}
.divider {
    width: 1px;
    height: 50px;
    border-radius: 0.2rem;
    background-color: var(--least-color);
}
.dock-items {
    display: flex;
    gap: 0.5rem;
}
.active {
    position: absolute;
    bottom: -10px;
}
.active i {
    color: var(--secondary-color);
    font-size: 2rem;
    -webkit-text-stroke: 0.5px var(--opposite-color);
}
</style>