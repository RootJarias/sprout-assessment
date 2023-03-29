<template>
  <div class="drawer z-40">
    <input id="side-drawer" class="drawer-toggle" type="checkbox" />
    <div class="drawer-side">
      <label class="drawer-overlay" for="side-drawer"></label>
      <ul class="menu pt-[90px] p-4 w-80 text-base-content bg-[#4b4d52]">
        <div class="mb-5 flex justify-between">
          <input
            class="input mt-[4px] bg-transparent rounded-none border-[#666c71] focus:outline-none focus:border-primary-500"
            type="text"
            placeholder="employee search"
          />
          <button
            class="btn btn-ghost text-center mt-1 ml-2 text-[26px] text-[#666c71] focus:text-primary-500"
          >
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
        <li class="mb-3">
          <div class="p-0 h-[1px] w-full bg-slate-500"></div>
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="my-requests"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="My Requests"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="my-team"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="My Team"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="company"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="Company"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="administration-tools"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="Administration Tools"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="maintenance"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="Maintenance"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <div class="p-0 h-[1px] w-full bg-slate-500"></div>
        </li>
        <li class="mb-3">
          <CMP_Dropdown
            name="notifications"
            dropdown-align="dropdown-right"
            btn-class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
            title="Notifications"
            icon-type="fas"
            icon="caret-down"
          />
        </li>
        <li class="mb-3">
          <div class="dropdown dropdown-right p-0 bg-transparent">
            <button
              class="btn btn-ghost w-full flex justify-between rounded-btn capitalize text-lg text-[#5fc5d8] no-underline font-light"
              tabindex="0"
            >
              <div class="flex w-[238px] text-left">
                <img
                  class="h-[35px] w-[35px] mr-3 rounded-full object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg"
                  alt="user-avatar"
                />
                <span class="mt-1">Admin</span>
              </div>
              <div>
                <font-awesome-icon
                  class="ml-2 h-[12px]"
                  :icon="['fas', 'caret-down']"
                />
              </div>
            </button>
            <ul
              tabindex="0"
              class="menu dropdown-content p-2 shadow bg-[#333] rounded-box w-52 mt-4"
            >
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Import Components
import CMP_Dropdown from './Dropdown.vue';
</script>
