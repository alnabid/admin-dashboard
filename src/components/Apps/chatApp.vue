<template>
    <BaseApp appId="chatApp">
        <div class="app-topbar">
            <h1>Chat</h1>
            <div class="options">
                <i class="bi bi-x-lg" @click="$emit('closeApp')"></i>
            </div>
        </div>
        <div class="app-content">
            kya karo
        </div>
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