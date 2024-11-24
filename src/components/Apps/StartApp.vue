<template>
    <section id="startApp" class="app-widget start-widget">
        <div class="start-container">
            <div class="start-content">
                <h1>See All Apps</h1>
                <div class="start-items">
                    <div v-for="dockItem in dockItems" :key="dockItem.name" class="item" @click="setActive(dockItem.app)">
                        <p>{{ dockItem.label }}</p>
                        <component :is="dockItem.iconType" :class="dockItem.icon" :src="dockItem.src"></component>
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
import docktItems from '@/mixins/docktItems';

export default {
    mixins: [docktItems],

    methods: {
        setActive(name) {
            this.$emit('openApp', name);
        },
    },
}
</script>