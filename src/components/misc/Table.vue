<template>
  <div class="border border-gray-400 rounded-[5px]">
    <table class="w-full">
      <thead>
        <tr class="border-b border-gray-400 font-medium">
          <th class="p-4 text-left text-[14px]">TITLE</th>
          <th class="p-4 text-left text-[14px]">MESSAGE</th>
          <th class="p-4 text-left text-[14px]">SENT BY</th>
          <th class="p-4 text-left text-[14px]">SENT THROUGH</th>
          <th class="p-4 text-left text-[14px]">DATE CREATED</th>
          <th class="p-4 text-left text-[14px]">START DATE</th>
          <th class="p-4 text-left text-[14px]">END DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-gray-400 font-medium"
          v-for="(item, i) in tableData.items"
          :key="i"
        >
          <td class="px-4 py-2">
            <span class="block truncate w-[152px]">
              {{ item.title }}
            </span>
          </td>
          <td class="px-4 py-2">
            <span class="block truncate w-[152px]">{{ item.message }} </span>
          </td>
          <td class="px-4 py-2">{{ item.sent_by }}</td>
          <td class="px-4 py-2">
            <font-awesome-icon
              class="mr-4 text-[16px]"
              :icon="['fas', 'bookmark']"
              v-if="item.sent_through.web"
            />
            <font-awesome-icon
              class="text-[16px]"
              :icon="['fas', 'mobile-alt']"
              v-if="item.sent_through.mobile"
            />
          </td>
          <td class="px-4 py-2">{{ item.date_created }}</td>
          <td class="px-4 py-2">
            <span class="block">{{ item.start_date.date }}</span>
            <span class="block text-gray-400">{{ item.start_date.time }}</span>
          </td>
          <td class="px-4 py-2">
            <span class="block">{{ item.end_date.date }}</span>
            <span class="block text-gray-400">{{ item.end_date.time }}</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-medium">
          <td class="p-4" colspan="7">
            <div class="flex justify-between">
              <div class="block">
                <span class="mr-2 text-gray-500">Items per page</span>
                <select
                  class="select min-h-0 h-[28px] w-[74px] bg-transparent border border-gray-400 rounded-[5px] focus:outline-none sm:mb-3 sm:w-full"
                >
                  <option selected>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </select>
              </div>
              <div class="flex">
                <button class="btn btn-ghost btn-xs mr-1">
                  <font-awesome-icon
                    class="text-[16px] text-gray-400"
                    :icon="['fas', 'backward-step']"
                  />
                </button>
                <button class="btn btn-ghost btn-xs mr-1">
                  <font-awesome-icon
                    class="text-[16px] text-gray-400"
                    :icon="['fas', 'caret-left']"
                  />
                </button>
                <span class="mr-2 text-gray-500">Page</span>
                <button
                  class="btn bg-transparent min-h-0 border border-gray-400 rounded-[5px] h-[28px] w-[50px] hover:bg-transparent text-[16px] text-gray-400"
                >
                  1
                </button>
                <span class="ml-2 text-gray-500">of 1</span>
                <button class="btn btn-ghost btn-xs ml-1">
                  <font-awesome-icon
                    class="text-[16px] text-gray-400"
                    :icon="['fas', 'caret-right']"
                  />
                </button>
                <button class="btn btn-ghost btn-xs ml-1">
                  <font-awesome-icon
                    class="text-[16px] text-gray-400"
                    :icon="['fas', 'forward-step']"
                  />
                </button>
              </div>
              <div class="block">
                <span class="text-gray-500">Showing 1-10 of 1</span>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
// Set Props
const tableData = defineProps({
  headers: String,
  items: String,
});
</script>
