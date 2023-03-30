<template>
  <div id="post-announcement-modal" class="modal">
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
      <div class="modal-action">
        <a href="#" class="btn bg-primary-500 border-none hover:bg-primary-700">
          Create
        </a>
      </div>
    </div>
  </div>
</template>
