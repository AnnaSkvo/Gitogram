<template>
    <button :class="['button', { 'hover-text': withHoverText }]" :text="text" :hover-text="hoverText" @click="buttonClick">
        <span class="button_text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'xButton',
    props: {
        text: {
            type: String,
            required: true
        },
        hoverText: {
            type: String
        }
    },
    data() {
        return {
            withHoverText: this.hoverText ? true : false,
        }
    },
}
</script>

<style scoped>
.button {
    width: 270px;
    height: 44px;
    color: #fff;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #31AE54;

}

.button:hover {
    background-color: gray;
}

.button_text {
    font-size: 16px;
    font-weight: 700;
}


.hover-text::before {
    content: attr(text);
    font-size: 16px;
    font-weight: 700;
}

.hover-text:hover::before {
    content: attr(hover-text);
}
</style>

