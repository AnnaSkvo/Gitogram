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
.headerline{
  background-color: #FAFAFA;
  border-bottom: 1px solid #eeeeee;
  height: 276px;
}
.navigate{
  display: flex;
  justify-content: space-between;
  padding: 43px 0;
}


</style>