<template>
    <div
    class="el-row"
    :style = "style"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: string,
    justify: {
        type: string, 
        default: 'start',
        validator: val => ['start', 'end', 'center', 'space-between','space-around'].includes(val)
    }
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
    &::after,
    &::before {
        content: '';
        display: block;
    }
    &::after {
        clear:both;
    }
}
</style>
