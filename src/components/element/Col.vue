<template>
    <div
    :class="['el-col',classList]"
    :style = "style"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset'].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      return classList;
    },
  },

};
</script>

<style lang="scss" scoped>
.el-col {
    box-sizing: border-box;
    float :left;
}
@for $i from 0 through 24 {
    .el-col-#{$i} {
        width: $i / 24 * 100%;
    }
    .el-col-offset-#{$i} {
        margin-left: $i / 24 * 100%;
    }
}
</style>
