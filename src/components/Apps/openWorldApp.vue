<template>
    <BaseApp appId="openWorldApp">
        <div class="app-topbar">
            <h1>Open World</h1>
            <div class="options">
                <i class="bi bi-x-lg" @click="$emit('closeApp')"></i>
            </div>
        </div>
        Im still working on it bozo
    </BaseApp>    
</template>
<script>
import BaseApp from './BaseApp.vue';

export default {
    components: {
        BaseApp
    }
}
</script>