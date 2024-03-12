<template>
    <div class="spinner_container">
        <img src="./Spinner.svg" alt="spinner">
    </div>
</template>

<script>
export default {
    name: 'SpinnerItem',
}
</script>

<style scoped>
.spinner_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

img {
    animation: spin 1s linear 0s infinite;
}
</style>