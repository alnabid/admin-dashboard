<template>
    <section 
        :id="appId" 
        class="app-widget" 
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <!-- <div class="left-edge"></div>
        <div class="top-left"></div> -->
        <!-- <div class="top-right"></div> -->
        <slot></slot>
        <!-- <div class="right-edge"></div> -->
        <!-- <div class="bottom-left"></div> -->
        <div class="bottom-right" @mousedown="initResize($event, 'bottom-right')"></div>
    </section>
</template>

<style>
@import url(../../assets/app-widget.css);

.app-widget {
    position: relative;
    overflow: hidden;
}

.bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background-color: #888;
    cursor: nwse-resize;
}
</style>

<script>
export default {
    props: {
        appId: {
            type: String,
        },
    },

    data() {
        return {
            width: 500,
            height: 500,
            resizing: false,
            resizeDirection: null,
            initialMouseX: 0,
            initialMouseY: 0,
            initialWidth: 0,
            initialHeight: 0,
        };
    },

    methods: {
        initResize(event, direction) {
            this.$emit('freeze')
            this.resizing = true;
            this.resizeDirection = direction;
            this.initialMouseX = event.clientX;
            this.initialMouseY = event.clientY;
            this.initialWidth = this.width;
            this.initialHeight = this.height;
            window.addEventListener("mousemove", this.handleResize);
            window.addEventListener("mouseup", this.stopResize);
            event.preventDefault();
        },

        handleResize(event) {
            if (!this.resizing) return;

            const dx = event.clientX - this.initialMouseX;
            const dy = event.clientY - this.initialMouseY;

            if (this.resizeDirection === "bottom-right") {
                this.width = Math.max(100, this.initialWidth + dx);
                this.height = Math.max(100, this.initialHeight + dy);
            }
        },

        stopResize() {
            this.$emit('unFreeze')
            this.resizing = false;
            this.resizeDirection = null;
            window.removeEventListener("mousemove", this.handleResize);
            window.removeEventListener("mouseup", this.stopResize);
        },
    },
};
</script>
