<template lang="pug">
  button.button(
    :class="[`--${size}`, `--${type}`, disabled ? `--disabled` : '']"
    @click="$emit('click')"
  )
    .button__icon(v-if="$slots.icon")
      slot(name="icon")
    .button__text
      slot
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    /**
     * @values md, lg
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * @values primary, outline
     */
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
  padding: 8px 12px;
  font-size: 14px;
  color: $white;
  display: flex;
  align-items: center;
  background: $primary-color;
  border: 0;
  outline: none;
  border-radius: 6px;
  font-family: inherit;
  cursor: pointer;

  transition: box-shadow .2s ease-in-out, transform .2s ease-in-out;
  &:hover {
    box-shadow: 0px 15px 20px rgba($bg-dark, 0.4);
    transform: translateY(-5px);
  }

  &.--lg {
    padding: 12px 16px;
  }

  &.--outline {
    background: inherit;
    border: 1px solid $primary-color;
  }

  &__icon {
    color: $white;
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  &.--disabled {
    background-color: #c4c4c4;
    pointer-events: none;
  }
}
</style>
