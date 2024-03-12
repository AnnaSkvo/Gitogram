<template>
    <div class="container_progress">
        <div id="indicator" class="line_progress">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LineProgress',
    emits: ["onFinish"],
    methods: {
        emitOnFinish() {
            this.$emit('onFinish')
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(this.emitOnFinish, 5000)
        })
    }
}
</script>

<style scoped>
.container_progress {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #31AE544D;
}

.line_progress {
    animation-duration: 5s;
    animation-name: slidein;
    position: absolute;
    height: 2px;
    background-color: #31AE54;
}

@keyframes slidein {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}
</style>
