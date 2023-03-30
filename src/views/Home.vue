<template>
  <div class="mb-8 flex justify-between md:block">
    <div>
      <h1 class="text-2xl font-bold">Announcements</h1>
      <p class="mt-1 font-medium">
        View, create, or edit announcements for all employees of your company.
      </p>
    </div>
    <a href="#post-announcement-modal">
      <button
        class="btn min-h-0 h-[38px] mt-[22px] border-none rounded-[5px] text-lg text-white normal-case bg-primary-500 hover:bg-primary-700 sm:w-full"
      >
        <font-awesome-icon class="mr-2" :icon="['fas', 'plus']" />
        <span>Post an Announcement</span>
      </button>
    </a>
  </div>

  <div class="mb-5 flex justify-between md:block">
    <div class="block md:mb-5">
      <button
        :class="
          tableContent === 'all'
            ? 'btn btn-ghost px-[10px] min-h-0 h-[30px] mr-2 border-none rounded-[5px] normal-case hover:bg-slate-200 bg-[#e6ffee]'
            : 'btn btn-ghost px-[10px] min-h-0 h-[30px] mr-2 border-none rounded-[5px] normal-case hover:bg-slate-200'
        "
        @click="setTableContent('all')"
      >
        <span
          class="badge bg-primary-500 border-none text-white font-bold px-3 mr-2"
        >
          10
        </span>
        <span class="font-bold text-primary-500">All</span>
      </button>
      <button
        :class="
          tableContent === 'drafts'
            ? 'btn btn-ghost px-[10px] min-h-0 h-[30px] mr-2 border-none rounded-[5px] normal-case hover:bg-slate-200 bg-[#e6ffee]'
            : 'btn btn-ghost px-[10px] min-h-0 h-[30px] mr-2 border-none rounded-[5px] normal-case hover:bg-slate-200'
        "
        @click="setTableContent('drafts')"
      >
        <span
          class="badge bg-orange-500 border-none text-white font-bold px-3 mr-2"
        >
          10
        </span>
        <span>Drafts</span>
      </button>
    </div>
    <div class="flex sm:block">
      <select
        class="select mr-4 min-h-0 h-[42px] w-[300px] bg-transparent border border-gray-400 rounded-[5px] focus:outline-none sm:mb-3 sm:w-full"
      >
        <option disabled selected>Filter By</option>
      </select>
      <div class="flex">
        <input
          class="input min-h-0 h-[42px] w-[300px] bg-transparent border border-r-0 border-gray-400 rounded-tl-md rounded-bl-md rounded-r-none focus:outline-none sm:w-full"
          type="text"
          placeholder="Search..."
          v-model="search"
          @keyup="searchItem"
        />
        <button
          class="btn btn-ghost min-h-0 h-[42px] rounded-rl-md rounded-rl-md rounded-l-none text-lg border border-l-0 border-gray-400 hover:bg-slate-200 hover:border-gray-400"
        >
          <font-awesome-icon
            class="text-gray-500"
            :icon="['fas', 'magnifying-glass']"
          />
        </button>
      </div>
    </div>
  </div>

  <CMP_Table
    :headers="JSON.stringify(announcementData.headers)"
    :items="JSON.stringify(announcementData.items)"
  />

  <CMP_PostAnnouncementModal />
</template>

<script setup>
// Base Imports
import { ref } from 'vue';

// Import Raw Data
import announcementRawData from '../assets/raw-data/announcement.json';

// Import Components
import CMP_Table from '../components/misc/Table.vue';
import CMP_PostAnnouncementModal from '../components/feature/PostAnnouncementModal.vue';

// Set Datas
const tableContent = ref('all');
const search = ref();
const announcementData = ref({
  headers: [
    {
      title: 'TITLE',
      icon: null,
    },
    {
      title: 'MESSAGE',
      icon: null,
    },
    {
      title: 'SENT BY',
      icon: null,
    },
    {
      title: 'SENT THROUGH',
      icon: {
        type: 'fas',
        ico_name: 'circle-info',
      },
    },
    {
      title: 'DATE CREATED',
      icon: null,
    },
    {
      title: 'START DATE',
      icon: null,
    },
    {
      title: 'END DATE',
      icon: null,
    },
  ],
  items: announcementRawData,
});

// Set Functions
const setTableContent = (content) => {
  tableContent.value = content;

  let announcementItems = announcementData.value.items;
  if (content === 'drafts') {
    announcementData.value.items = announcementItems.slice(
      Math.max(announcementItems.length - 5, 0)
    );
  } else {
    announcementData.value.items = announcementRawData;
  }
};

function searchItem() {
  let announcementItems = announcementData.value.items;

  let searchedItems = announcementItems.filter((item) => {
    for (const value of Object.values(item)) {
      if (value.toString().toLowerCase().includes(search.value.toLowerCase()))
        return true;
    }
  });

  if (search.value) {
    announcementData.value.items = searchedItems;
  } else {
    announcementData.value.items = announcementRawData;
  }
}
</script>
