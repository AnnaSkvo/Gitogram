<template>
    <div class="placeholder_container">
        <div class="placeholder_img"></div>
        <div class="placeholder_text">
            <div class="text text1"></div>
            <div class="text text2"></div>
            <div class="text text3"></div>
        </div>
        <div class="placeholder_text">
            <div class="text text1"></div>
            <div class="text text2"></div>
            <div class="text text3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlaceholderComponent',
}
</script>

<style scoped>
.placeholder_container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.placeholder_img {
    width: 100%;
    height: 136px;
    background-color: #DEDEDE;
    border-radius: 4px;
    margin-bottom: 20px;
}

.placeholder_text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 10px;
}

.text {
    height: 14px;
    background-color: #DEDEDE;
    border-radius: 4px;
    margin-bottom: 10px;
}

.text1 {
    width: 70%;
}

.text2 {
    width: 80%;
}

.text3 {
    width: 50%;
}
</style>