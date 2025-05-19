<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import NavList from './NavList.vue';

export default {
  name: 'AppNav',
  components: { Popover, PopoverButton, PopoverPanel, NavList },
};
</script>

<template>
  <div class="fixed md:absolute inset-x-0 top-0 w-full z-40">
    <Popover v-slot="{ open, close }" class="md:hidden relative">
      <div class="p-2" :class="{ 'bg-indigo-50': open }">
        <PopoverButton
          class="cursor-pointer text-gray-800 hover:text-black hover:bg-gray-200 transition-colors rounded-full p-0.5 aspect-square">
          <svg
            v-if="open"
            aria-label="Close navbar"
            class="block w-8 m-0.5 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12" />
          </svg>
          <template v-else>
            <span
              aria-label="Open navbar"
              class="block w-7 h-0.5 m-1 rounded-full bg-current"
              v-for="i in 3"
              xkey="i" />
          </template>
        </PopoverButton>
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0">
          <PopoverPanel
            as="nav"
            class="absolute inset-x-0 top-full w-full pb-5 z-30 bg-indigo-50">
            <NavList class="text-center" @clicked="close" />
          </PopoverPanel>
        </transition>
      </div>
    </Popover>
    <nav class="hidden md:block pt-8">
      <NavList class="flex justify-center" />
    </nav>
  </div>
</template>

<style scoped></style>
