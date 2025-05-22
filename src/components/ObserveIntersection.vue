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
    return {
      visible: null,
      internalObserver: null, // אחסון ה-observer בתוך ה-data של המופע
    };
  },
  methods: {
    /**
     * פונקציה להפסקת הצפייה באלמנט הספציפי.
     * @param {HTMLElement} element - האלמנט שעליו מפסיקים לצפות.
     */
    unobserve(element) {
      if (this.internalObserver && element) {
        this.internalObserver.unobserve(element);
      }
    },
    /**
     * מטפל באינטרסקשן.
     * @param {Array<IntersectionObserverEntry>} entries
     */
    handleIntersection(entries) {
      const entry = entries[0];
      this.visible = entry.isIntersecting;
      // פולט את האירוע, מעביר את ה-entry ואת פונקציית ה-unobserve המקושרת למופע הספציפי
      this.$emit('change', entry, () =>
        this.unobserve(this.$refs.observedElementRef),
      );
    },
  },
  mounted() {
    // בודקים שהרפרנס לאלמנט קיים לפני יצירת ה-Observer
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

    // יצירת Observer חדש עבור מופע הרכיב הספציפי
    this.internalObserver = new IntersectionObserver(
      this.handleIntersection,
      options,
    );
    this.internalObserver.observe(this.$refs.observedElementRef); // צופים באלמנט ה-ref
  },
  beforeUnmount() {
    // Vue 3 Lifecycle Hook
    if (this.internalObserver) {
      this.internalObserver.disconnect(); // מנתק את כל התצפיות של ה-Observer הספציפי הזה
      this.internalObserver = null; // מאפס את המשתנה
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
