<template>
  <div :class="`dropdown ${dropdownAlign} p-0 bg-transparent`">
    <button :class="btnClass" tabindex="0">
      <img
        class="h-[35px] w-[35px] mr-3 rounded-full object-cover"
        :src="userAvatar"
        alt="user-avatar"
        v-if="userAvatar"
      />
      <span>{{ title }}</span>
      <font-awesome-icon class="ml-2 h-[12px]" :icon="[iconType, icon]" />
    </button>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-[#333] rounded-box w-52 mt-4"
    >
      <li v-for="(item, i) in dropdownLinks[name]" :key="i">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Base Imports
import { ref } from 'vue';

// Set Props
const props = defineProps({
  name: String,
  dropdownAlign: String,
  btnClass: String,
  title: String,
  iconType: String,
  icon: String,
  userAvatar: String,
});

// Set Datas
const dropdownLinks = ref({
  'user-menu': [
    {
      link: '/',
      title: 'Profile',
    },
    {
      link: '/',
      title: 'Settings',
    },
    {
      link: '/',
      title: 'Logout',
    },
  ],
  maintenance: [
    {
      link: '/',
      title: 'Link 1',
    },
    {
      link: '/',
      title: 'Link 2',
    },
    {
      link: '/',
      title: 'Link 3',
    },
  ],
  'administration-tools': [
    {
      link: '/',
      title: 'Link 1',
    },
    {
      link: '/',
      title: 'Link 2',
    },
  ],
  company: [
    {
      link: '/',
      title: 'Link 1',
    },
  ],
  'my-team': [
    {
      link: '/',
      title: 'Link 1',
    },
    {
      link: '/',
      title: 'Link 2',
    },
    {
      link: '/',
      title: 'Link 3',
    },
  ],
  'my-requests': [
    {
      link: '/',
      title: 'Link 1',
    },
    {
      link: '/',
      title: 'Link 2',
    },
  ],
  notifications: [
    {
      link: '/',
      title: 'Link 1',
    },
    {
      link: '/',
      title: 'Link 2',
    },
  ],
});
</script>
