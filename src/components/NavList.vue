<script>
export default {
  name: 'NavList',
  data() {
    return {
      links: [
        { link: 'about' },
        { link: 'hobbies' },
        { link: 'projects' },
        { link: 'why', txt: 'why me' },
        { link: 'contact' },
      ],
    };
  },
  emits: ['clicked'],
};
</script>

<template>
  <ul class="capitalize font-light">
    <li v-for="l in links" :key="l.link" class="py-1 px-3">
      <a
        @click="$emit('clicked')"
        class="block hover:text-indigo-800 transition-colors p-2"
        :href="'#' + l.link"
      >
        {{ l.txt || l.link }}
      </a>
    </li>
  </ul>
</template>

<style scoped></style>
