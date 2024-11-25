<template>
    <div class="dock-container">
        <div
            class="item start"
            :class="{ active: activeItem === 'start' }"
            @click="setActive('start', 'startApp')"
        >
            <p>Start</p>
            <img src="@/assets/img/logo.png" alt="Logo">
        </div>
        <div class="divider"></div>
        <div class="dock-items">
            <div
                v-for="dockItem in dockItems"
                :key="dockItem.name"
                class="item"
                :class="{ active: activeItems.includes(dockItem.name) }"
                @click="setActive(dockItem.name, dockItem.app)"
            >
                <p>{{ dockItem.label }}</p>
                <component
                    :is="dockItem.iconType"
                    :class="dockItem.icon"
                    :src="dockItem.src"
                ></component>
            </div>
        </div>
    </div>
</template>

<script>
import docktItems from '@/mixins/docktItems';
export default {
    mixins: [docktItems],
    props: {
        openApp: Function,
    },
    data() {
        return {
            activeItems: [],
        };
    },
    methods: {
        setActive(name, app) {
            const exists = this.activeItems.findIndex(p => p === name);
            if(exists === -1) {
                this.activeItems.push(name)
            }
            this.$emit('openApp', app);
        },
    },
};
</script>

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
    z-index: 100;
    opacity: 80%;
    transition: 0.5s;
}
.dock-container:hover {
    opacity: 100%;
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
    cursor: pointer;
    text-align: center;
}

.active {
    outline: 2px solid var(--secondary-color-v2);
}
</style>
