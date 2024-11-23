<template>
    <section id="startApp" class="app-widget">
        <div class="app-topbar">
            <h1>Start</h1>
            <div class="options">
                <i class="bi bi-x-lg" @click="closeApp()"></i>
            </div>
        </div>
        Im still working on it bozo
    </section>
</template>
<style>
@import url(../../assets/app-widget.css);
</style>
<script>
import appWidget from '@/mixins/appWidget';

export default {
    mixins: [appWidget]
}
</script>