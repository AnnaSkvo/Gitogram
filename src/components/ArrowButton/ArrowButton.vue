<template>
  <button :class="['button', { 'active': isOpened }]" @click="toggle">
        <span class="text">{{ isOpened ? "Hide" : "View" }} issues</span>
        <span class="icon">
            <IconComponent name="IconArrowToggle" />
        </span>
    </button>
</template>

<script>
import IconComponent from '../../icons/IconComponent.vue'


export default {
    name: 'ArrowButton',
    components: {
        IconComponent,
    },
    emits: ['onToggle'],
    data() {
        return {
            isOpened: false,
        }
    },
    methods: {
        toggle() {
            this.isOpened = !this.isOpened
            this.$emit("onToggle", this.isOpened)
        }
    }
}
</script>

<style scoped>
.button {
    display: inline-flex;
    align-items: center;
    padding: 0 0 10px 0;
    cursor: pointer;
}

.icon {
    width: 10px;
    transform: rotate(180deg);
    line-height: 0;
    margin-left: 5px;

}

.button.active .icon {
    transform: rotate(0deg);
}
</style>

