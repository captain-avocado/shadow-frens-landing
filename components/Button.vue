<template lang="pug">
  component.button(
    :is="component"
    :href="href"
    :class="[`--${size}`, `--${type}`, disabled ? `--disabled` : '']"
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
    },
    href: {
      type: String,
      default: ''
    }
  },
  computed: {
    component () {
      return this.href ? 'a' : 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  width: fit-content;
  height: 36px;
  text-decoration: none;
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
    opacity: .6;
    pointer-events: none;
  }
}
</style>
