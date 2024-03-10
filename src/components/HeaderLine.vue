<template>
    <div class="headerline">
      <div class="x-container">
        <div class="navigate">
          <slot name="navigate"></slot>
        </div>
        <div class="stories" v-if="$slots.stories">
          <slot name="stories"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderLine'
}
</script>

<style scoped>

.navigate{
  display: flex;
  justify-content: space-between;
  padding: 43px 0;
}


</style>