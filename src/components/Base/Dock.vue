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
.item {
    width: 50px;
    height: 50px;
    position: relative;
    cursor: pointer;
    transition: 0.2s;
    background: var(--basic-color);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    background: var(--basic-color);
}
.item i {
    font-size: 1.2rem;
    color: var(--secondary-color-v2);
}
.item:hover {
    transform: scale(1.1);
}
.item p {
    position: absolute;
    top: -2rem;
    background: white;
    text-align: center;
    left: -50%; 
    right: 0; 
    margin-inline: auto; 
    width: 100px;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 1.5rem;
    opacity: 0;
    border-radius: 0.5rem;
    transition: 0.2s;
}
.item:hover p {
    opacity: 100%;
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