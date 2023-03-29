<template>
  <nav
    class="h-[76px] top-0 fixed w-full bg-[#333] flex justify-between drop-shadow-md z-50 pt-[14px] pb-[20px] pl-[30px] pr-[30px]"
  >
    <router-link class="flex" :to="{ name: 'BaseRoute::home' }">
      <img
        class="h-full"
        src="../../assets/images/sprout-logo.png"
        alt="sprout-logo"
      />
      <div class="h-full w-[2px] bg-[#484848] ml-3"></div>
      <span class="mt-[-10px] ml-3 text-[40px] text-white font-light">
        HR
      </span>
    </router-link>
    <div id="desktop-menu" class="flex justify-end">
      <CMP_Dropdown
        name="my-requests"
        dropdown-align="dropdown-end"
        btn-class="btn btn-link rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
        title="My Requests"
        icon-type="fas"
        icon="caret-down"
      />
      <CMP_Dropdown
        name="my-team"
        dropdown-align="dropdown-end"
        btn-class="btn btn-link rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
        title="My Team"
        icon-type="fas"
        icon="caret-down"
      />
      <CMP_Dropdown
        name="company"
        dropdown-align="dropdown-end"
        btn-class="btn btn-link rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
        title="Company"
        icon-type="fas"
        icon="caret-down"
      />
      <CMP_Dropdown
        name="administration-tools"
        dropdown-align="dropdown-end"
        btn-class="btn btn-link rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
        title="Administration Tools"
        icon-type="fas"
        icon="caret-down"
      />
      <CMP_Dropdown
        name="maintenance"
        dropdown-align="dropdown-end"
        btn-class="btn btn-link rounded-btn capitalize text-lg text-[#dddddd] no-underline font-light"
        title="Maintenance"
        icon-type="fas"
        icon="caret-down"
      />
      <input
        class="input mt-[4px] mr-3 h-[38px] bg-transparent rounded-none border-0 border-b-2 border-[#666c71] focus:outline-none focus:border-primary-500"
        type="text"
        placeholder="employee search"
      />
      <button
        class="btn btn-ghost text-center mt-1 ml-2 text-[26px] text-[#666c71] focus:text-primary-500"
      >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <button
        class="btn btn-ghost text-center mt-1 ml-2 text-[26px] text-[#666c71] focus:text-primary-500"
      >
        <font-awesome-icon :icon="['far', 'bell']" />
      </button>
      <CMP_Dropdown
        name="user-menu"
        dropdown-align="dropdown-end"
        btn-class="btn btn-ghost rounded-btn capitalize text-lg text-[#5fc5d8] font-light"
        title="Admin"
        icon-type="fas"
        icon="caret-down"
        user-avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg"
      />
    </div>
    <label
      id="mobile-menu-btn"
      class="btn btn-ghost text-center hidden"
      for="side-drawer"
    >
      <font-awesome-icon
        class="h-[28px] mt-2 text-white"
        :icon="['fas', 'bars']"
      />
    </label>
  </nav>
</template>

<script setup>
// Import Components
import CMP_Dropdown from './Dropdown.vue';
</script>

<style>
@media only screen and (max-width: 1499px) {
  #desktop-menu .btn {
    font-size: 14px;
  }
}

@media only screen and (max-width: 1399px) {
  #desktop-menu {
    display: none;
  }

  #mobile-menu-btn {
    display: block;
  }
}
</style>
