<script lang="ts">
  export let label: string;
  export let options: string[] = [];
  export let selectedOption = '';
  let isOpen = false;
</script>

<div class="relative inline-block text-left">
  <div on:click={() => (isOpen = !isOpen)}>
    <button
      type="button"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      {label}
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        {#if isOpen}
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        {:else}
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        {/if}
      </svg>
    </button>
  </div>
  {#if isOpen}
    <div
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      on:click={() => (isOpen = false)}
    >
      <div class="py-1" role="none">
        {#each options as option, i}
          <div
            class="text-gray-700 block px-4 py-1 text-sm hover:bg-primary hover:text-white cursor-pointer"
            role="menuitem"
            tabindex="-1"
            id="menu-item-{i}"
            on:click={() => (selectedOption = option)}
          >
            {option}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
