<template lang="pug">
  button.button(
    :class="[`--${size}`]"
    @click="$emit('click')"
  )
    .button__icon(v-if="$slots.icon")
      slot(name="icon")
    .button__text
      slot
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * @values md, lg
     */
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 12px;
  font-size: 20px;
  color: $white;
  display: flex;
  align-items: center;
  background: $primary-color;
  border: 0;
  outline: none;
  border-radius: 6px;
  font-family: inherit;
  cursor: pointer;

  &.--lg {
    padding: 12px 16px;
  }

  &__icon {
    color: $white;
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
}
</style>
