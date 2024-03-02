<template>
    <div class="container_progress">
        <div id="indicator" class="line_progress" :style="{
            'animation-duration': this.second + 's',
            'animation-name': 'slidein',
            'position': 'absolute',
            'height': '2px',
            'background-color': '#31AE54'
        }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LineProgress',
    props: {
        second: {
            type: Number,
            required: true
        },
    },
    emits: ["onFinish"],
    methods: {
        emitOnFinish() {
            this.$emit('onFinish')
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(this.emitOnFinish, this.second * 1000)
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
</style>

