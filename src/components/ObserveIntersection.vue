<script>
export default {
  name: 'ObserveIntersection',
  props: {
    is: { type: String, default: 'div' },
    root: { type: [Object, HTMLElement], default: null },
    rootMargin: { type: String, default: '0px' },
    threshold: { type: [Array, Number], default: 0 },
  },
  emits: ['change'],
  data() {
    return { visible: null, internalObserver: null };
  },
  methods: {
    /**
     * @param {HTMLElement} element
     */
    unobserve(element) {
      if (this.internalObserver && element) {
        this.internalObserver.unobserve(element);
      }
    },
    /**
     * @param {Array<IntersectionObserverEntry>} entries
     */
    handleIntersection(entries) {
      const entry = entries[0];
      this.visible = entry.isIntersecting;
      this.$emit('change', entry, () =>
        this.unobserve(this.$refs.observedElementRef),
      );
    },
  },
  mounted() {
    if (!this.$refs.observedElementRef) {
      console.warn(
        'ObserveIntersection: Element ref not found. Cannot observe.',
      );
      return;
    }

    const options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this.internalObserver = new IntersectionObserver(
      this.handleIntersection,
      options,
    );
    this.internalObserver.observe(this.$refs.observedElementRef);
  },
  beforeUnmount() {
    if (this.internalObserver) {
      this.internalObserver.disconnect();
      this.internalObserver = null;
    }
  },
};
</script>

<template>
  <component :is="is" ref="observedElementRef">
    <slot :visible="visible" />
  </component>
</template>

<style scoped></style>
