<template>
  <input
    id="post-announcement-modal"
    class="modal-toggle block"
    type="checkbox"
    v-model="postAnnouncementModal"
  />

  <div class="modal cursor-pointer" @click="postAnnouncementModal = false">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-center">CREATE A NEW ANNOUNCEMENT</h3>
      <div class="mt-4 py-4">
        <div class="mb-5">
          <label class="block mb-2 text-md font-medium" for="title-input">
            Title
          </label>
          <input
            id="title-input"
            class="input w-full border-slate-300 focus:outline-primary-500"
            type="text"
            placeholder="Enter a title here..."
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-md font-medium" for="title-input">
            Message
          </label>
          <textarea
            class="textarea textarea-bordered textarea-lg w-full border-slate-300 focus:outline-primary-500"
            placeholder="Enter a message here..."
          ></textarea>
        </div>
        <div class="mb-5 flex justify-between"></div>
      </div>
      <div class="modal-action flex justify-between">
        <a
          href="#"
          class="btn bg-transparent text-black border-none hover:bg-slate-200"
          @click="postAnnouncementModal = false"
        >
          Close
        </a>
        <a
          href="#"
          class="btn bg-primary-500 border-none hover:bg-primary-700"
          @click="postAnnouncementModal = false"
        >
          Create
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Base Imports
import { ref } from 'vue';

const postAnnouncementModal = ref(false);
</script>
