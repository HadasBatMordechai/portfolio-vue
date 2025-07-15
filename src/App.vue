<script>
import 'animate.css';

import { register as registerSwiper } from 'swiper/element/bundle';

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import AppNav from './components/AppNav.vue';
import ObserveIntersection from './components/ObserveIntersection.vue';

export default {
  name: 'App',
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    AppNav,
    ObserveIntersection,
  },
  data() {
    return {
      swiperInstance: null,
      projects: [
        {
          name: 'Your Way - Ministry of Transport and Road Safety',
          link: 'https://your-way.org.il/he',
          content:
            "Special and complex website involving data extraction from the Jerusalem Municipality's GIS system and the Ministry of Transportation's GTFS and receiving real-time information. I was responsible for all frontend development on this website.",
        },
        {
          name: 'HARAMA Golan Heights Project',
          link: 'https://harama.co.il/en',
          content:
            'A luxury project with simple, fast and extremely accessible code (over 96% on the Lighthouse Accessibility Index), developed from scratch using the latest technologies and testing tools, with a fully customized CMS.',
        },
        {
          name: 'Feibel 15',
          link: 'https://feibel-15.co.il',
          content:
            'Showcase of over 100 static mini-sites and landing pages, all meticulously built with modern, cutting-edge web technologies, and best practices, ensuring high performance and a seamless user experience across all devices.',
        },
        {
          name: 'Country Park',
          link: 'https://country-park.co.il/he',
          content:
            'Marketing Website for a Country Club with Near-Perfect Accessibility - almoust 100% on the Lighthouse Accessibility Index! Developed from scratch with a fully customized CMS.',
        },
        {
          name: 'Taaman Real Estate',
          link: 'https://www.taaman-nadlan.com/he',
          content:
            'Real Estate Marketing Website featuring dynamic investor relations data pulled from the stock exchange. Developed from scratch using testing tools, with a fully customized CMS.',
        },
      ],
    };
  },

  beforeMount() {
    registerSwiper();
  },

  mounted() {
    const swiperEl = this.$refs.swiper;
    this.swiperInstance = {
      loop: true,
      navigation: true,
      spaceBetween: 20,
      slidesPerView: 1.5,
    };

    Object.assign(swiperEl, this.swiperInstance);

    swiperEl.initialize();
  },

  beforeUnmount() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
      this.swiperInstance = null;
    }
  },
};
</script>

<template>
  <AppNav />

  <div
    class="absolute top-0 right-0 z-50 p-3 md:px-5 xmd:mt-8 font-light text-xs lg:text-sm">
    More of a React person?
    <a
      href="https://hadasbatmordechai.github.io/react"
      class="block w-fit mx-auto mt-1 bg-indigo-200 hover:bg-indigo-300 transition-colors rounded-lg lg:rounded-xl px-1.5 py-0.5 lg:px-2.5 lg:py-1">
      Try React version
    </a>
  </div>

  <header
    class="bg-indigo-50 bg-[url('./assets/bg-pattern.png')] bg-size-[60px] px-8 md:px-10 lg:px-20 pb-8 md:pb-10 pt-16 md:pt-28 md:flex items-center">
    <div class="md:w-1/3">
      <img
        class="w-40 sm:w-48 lg:w-72 2xl:w-96 max-w-full mx-auto rounded-full aspect-square object-cover"
        src="./assets/me.jpg"
        alt="Hadas Ben Mordechai profile image"
        width="400"
        height="400" />
    </div>
    <ObserveIntersection
      v-slot="{ visible }"
      class="md:flex-1 max-md:text-center max-md:pt-5 md:ps-10 lg:ps-20">
      <h1
        class="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-indigo-950 font-bold"
        :class="{ 'animate__animated animate__fadeIn': visible }">
        Hadas Ben Mordechai
      </h1>
      <h2
        class="text-lg sm:text-xl lg:text-3xl py-1 md:py-2 lg:py-5"
        :class="{
          'animate__animated animate__fadeIn animate__delay-1s': visible,
        }">
        Frontend Developer
      </h2>
      <p
        class="font-light text-sm sm:text-base lg:text-lg 2xl:text-xl"
        :class="{
          'animate__animated animate__fadeIn animate__delay-2s': visible,
        }">
        Vue.js | JavaScript | Tailwind CSS
      </p>
      <div class="flex justify-center md:justify-start pt-5 lg:pt-10">
        <a
          href="#contact"
          class="text-sm lg:text-base hover:text-white bg-indigo-400 hover:bg-indigo-500 transition-colors rounded-lg lg:rounded-xl px-3 py-1 lg:px-5 lg:py-2.5 mx-2 md:mx-0"
          :class="{
            'animate__animated animate__fadeIn animate__delay-3s': visible,
          }">
          Contact Me
        </a>
        <a
          href="#projects"
          class="text-sm lg:text-base font-light bg-indigo-100 hover:bg-indigo-200 transition-colors rounded-lg lg:rounded-xl px-3 py-1 lg:px-5 lg:py-2.5 mx-2 md:ms-4"
          :class="{
            'animate__animated animate__fadeIn animate__delay-4s': visible,
          }">
          View Projects
        </a>
      </div>
    </ObserveIntersection>
  </header>

  <section id="about">
    <h3>My story</h3>
    <h4>About me</h4>
    <p class="max-w-[50rem] pb-2">
      I'm a Full Stack Web Developer (with a strong focus on Frontend) with
      almoust 5 years of experience and a B.Sc. in Software Engineering
      (graduated
      <em>cum laude</em>).
    </p>
    <h4>What is this page?</h4>
    <div class="md:flex justify-between items-start">
      <div class="flex-1 md:pe-10">
        <p class="max-w-[40rem]">
          This landing page showcases the core technologies I work with daily. I
          created it to document the knowledge I've gained at work and to
          demonstrate the structure and flow of the concise landing pages I
          typically build.
        </p>
        <ul
          class="list-image-[url(./assets/check.svg)] max-w-[40rem] py-1 [&_strong]:font-bold [&_li]:ms-6 [&_li]:ps-1 [&_li]:py-0.5">
          <li>
            The project was bootstrapped with <strong>Vite</strong>, using my
            favorite frontend framework: <strong>Vue.js</strong>, and written in
            <strong>JavaScript</strong>.
          </li>
          <li>
            In the past, we styled everything with pure CSS - today, we use
            <strong>Tailwind CSS</strong> (in this project I used version 4).
          </li>
          <li>
            For accessibility and effects, I also installed
            <strong>HeadlessUI</strong> and <strong>animate.css</strong>.
          </li>
          <li>
            We've recently started using <strong>Prettier</strong> (with custom
            formatting rules) and <strong>ESLint</strong> for code analysis - so
            of course, I added those too.
          </li>
          <li>
            Although I typically work with <strong>PhpStorm</strong> on Linux, I
            developed this page using <strong>VS Code</strong> on Windows.
          </li>
          <li>
            The project's codebase is managed with <strong>Git</strong> and
            hosted on GitHub Pages, with deployment automated by GitHub Actions.
          </li>
          <li>
            Typically, I implement Figma designs; Here, I used AI assistance.
          </li>
          <li>
            <strong>What's next?</strong>
            I plan to re-implement this page using React & TypeScript.
          </li>
        </ul>
      </div>
      <ObserveIntersection
        v-slot="{ visible }"
        class="md:w-1/4 grid grid-cols-4 md:grid-cols-2 gap-3 sm:gap-5 lg:gap-8 2xl:gap-10 pt-5 md:pt-0">
        <a
          class="aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8"
          :class="{ 'animate__animated animate__fadeIn': visible }"
          href="https://vite.dev"
          target="_blank">
          <img
            class="block w-20 h-auto"
            src="./assets/vite.svg"
            alt="Vite logo"
            loading="lazy" />
        </a>
        <a
          class="aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8"
          :class="{
            'animate__animated animate__fadeIn animate__delay-1s': visible,
          }"
          href="https://vuejs.org/"
          target="_blank">
          <img
            class="block w-20 h-auto"
            src="./assets/vue.svg"
            alt="Vue logo"
            loading="lazy" />
        </a>
        <a
          class="aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8"
          :class="{
            'animate__animated animate__fadeIn animate__delay-2s': visible,
          }"
          href="https://tailwindcss.com"
          target="_blank">
          <img
            class="block w-20 h-auto"
            src="./assets/tailwind.svg"
            alt="Tailwind CSS logo"
            loading="lazy" />
        </a>
        <a
          class="aspect-square flex items-center justify-center bg-gray-100 hover:shadow-lg rounded-xl p-3 sm:p-5 xl:p-8"
          :class="{
            'animate__animated animate__fadeIn animate__delay-3s': visible,
          }"
          href="https://headlessui.com/v1/vue"
          target="_blank">
          <img
            class="block w-20 h-auto"
            src="./assets/headlessui.svg"
            alt="HeadlessUI logo"
            loading="lazy" />
        </a>
      </ObserveIntersection>
    </div>
  </section>

  <section id="hobbies" class="bg-gradient-to-b from-indigo-50/10 via-white">
    <h3>Outside of code</h3>
    <h4>💖 My favorite things when I'm not coding:</h4>
    <ObserveIntersection
      is="ul"
      v-slot="{ visible }"
      class="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8 max-w-[39rem] lg:max-w-[44rem] text-center pt-3 md:pt-5">
      <li
        class="flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5"
        :class="{ 'animate__animated animate__fadeIn': visible }">
        <svg
          class="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto p-1.5 sm:p-2 lg:p-3"
          role="none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
        <span class="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
          Singing
        </span>
        <span
          class="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
          my #1 passion!
        </span>
      </li>
      <li
        class="flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5"
        :class="{
          'animate__animated animate__fadeIn animate__delay-1s': visible,
        }">
        <svg
          class="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto mt-1 -mb-1 lg:mt-2 lg:-mb-2"
          role="none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 17c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1m-9-5V5.75a1.75 1.75 0 013.5 0V12m0 0V5.75a1.75 1.75 0 013.5 0V12m-12 0h15" />
        </svg>

        <span class="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
          Swimming
        </span>
        <span
          class="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
          my newest obsession
        </span>
      </li>
      <li
        class="flex flex-col items-center justify-start bg-indigo-50 rounded-xl py-2 sm:p-5"
        :class="{
          'animate__animated animate__fadeIn animate__delay-2s': visible,
        }">
        <svg
          class="text-indigo-500 block w-9 sm:w-14 lg:w-20 h-auto p-1.5 sm:p-2 lg:p-3"
          role="none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>

        <span class="block font-normal text-sm lg:text-base pt-1 sm:pt-2">
          Writing
        </span>
        <span
          class="block text-[0.7rem]/tight sm:text-xs lg:text-sm px-3 pt-0.5">
          thoughts to paper
        </span>
      </li>
    </ObserveIntersection>
  </section>

  <section
    id="projects"
    class="text-[0.65rem] sm:text-xs lg:text-sm bg-indigo-50 pb-5">
    <h3 class="-mb-8 md:-mb-10">Selected projects</h3>
    <swiper-container ref="swiper">
      <template v-for="i in projects" :key="i.name">
        <swiper-slide
          class="mt-14 bg-white p-2 sm:p-5 lg:py-8 rounded-xl h-auto">
          <div class="text-sm sm:text-base lg:text-lg font-normal">
            {{ i.name }}
          </div>
          <p class="py-1">
            {{ i.content }}
          </p>
          <a
            :href="i.link"
            target="_blank"
            class="underline hover:text-blue-950">
            View Site
          </a>
        </swiper-slide>
      </template>
    </swiper-container>
  </section>

  <section id="why" class="md:flex">
    <div class="max-w-xl lg:max-w-3xl xl:max-w-4xl">
      <h3>Why me</h3>

      <TabGroup>
        <TabList
          class="flex justify-center sm:justify-start text-sm sm:text-base lg:text-lg mt-5">
          <Tab as="template" v-slot="{ selected }">
            <button
              class="w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#98FB98]"
              :class="{ 'hover:opacity-85': !selected }">
              Why work
              <br class="sm:hidden" />
              with me?
            </button>
          </Tab>

          <Tab as="template" v-slot="{ selected }">
            <button
              class="w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#FFDAB9]"
              :class="{ 'hover:opacity-85': !selected }">
              What am I
              <br class="sm:hidden" />
              looking for?
            </button>
          </Tab>

          <Tab as="template" v-slot="{ selected }">
            <button
              class="w-1/3 sm:w-auto cursor-pointer rounded-t-2xl px-3 lg:px-5 py-1 transition-opacity bg-[#B0E0E6]"
              :class="{ 'hover:opacity-85': !selected }">
              Final B.Sc.
              <br class="sm:hidden" />
              Project
            </button>
          </Tab>
        </TabList>
        <TabPanels
          class="text-sm sm:text-base/relaxed border-t border-[#808080]/30 px-1 sm:px-2 py-2 sm:py-3">
          <TabPanel>
            I'm passionate about writing clean code and have a sharp eye for
            detail. I care about crafting great user experiences - and an even
            better team vibe. I'm responsible and motivated, always learning,
            always growing, and above all: someone you can count on (just ask
            anyone I've worked with).
          </TabPanel>
          <TabPanel>
            A frontend position within a dynamic and innovative company, where I
            can continue to develop my skills, in a collaborative and supportive
            team that encourages growth. I want a role that makes me genuinely
            enthusiastic about my work and makes me excited to get out of bed in
            the morning.
          </TabPanel>
          <TabPanel>
            For my final project, I conducted research on anomaly detection. I
            developed and compared multiple methods for identifying anomalies
            and making the decisions according to the majority of votes. One of
            the main techniques I explored was machine learning - I was into AI
            long before it was cool!
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <ObserveIntersection
      v-slot="{ visible }"
      class="md:flex-1 flex justify-center items-center">
      <img
        class="hidden md:block w-24 h-auto"
        :class="{
          'animate__animated animate__pulse animate__delay-0s': visible,
        }"
        src="./assets/question-mark.png"
        alt=""
        loading="lazy" />
    </ObserveIntersection>
  </section>

  <section id="contact" class="bg-gradient-to-b from-indigo-50/50 via-white">
    <h3>Get in touch</h3>
    <h4>I'd love to hear from you!</h4>
    <p class="pt-3">
      Feel free to connect with me on
      <a
        href="https://www.linkedin.com/in/hadas-ben-mordechai/"
        target="_blank"
        class="mx-1.5 inline-block underline hover:text-blue-950">
        LinkedIn
      </a>
      or send me an email to hadasi135 at gmail.com.
    </p>
  </section>

  <footer
    class="p-5 md:px-10 text-center text-xs lg:text-sm font-light bg-indigo-100">
    Copyright © {{ new Date().getFullYear() }} All rights reserved
    <span class="max-sm:hidden"> | </span>
    <br class="sm:hidden" />
    Hadas Ben Mordechai
  </footer>
</template>

<style scoped>
swiper-container {
  --swiper-navigation-color: #808080;
  --swiper-navigation-size: 25px;
  --swiper-navigation-top-offset: 15px;
  height: auto;
}

swiper-container::part(button-prev) {
  left: auto;
  right: 45px;
}

swiper-container::part(button-next) {
  left: auto;
  right: 0;
}
</style>
