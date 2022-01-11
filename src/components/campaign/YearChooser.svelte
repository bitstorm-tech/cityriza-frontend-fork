<script>
  const yearNow = new Date().getFullYear();
  export let selectedYear = yearNow;
</script>

<div class="flex flex-col border-2">
  <p class="bg-gray-200 text-primary px-2">Jahr auswählen</p>
  <div class="flex flex-wrap gap-2 p-2">
    {#each Array(3) as _, i}
      <div
        on:click={() => (selectedYear = yearNow + i)}
        class="cursor-pointer hover:text-primary"
        class:text-primary={selectedYear === yearNow + i}
        class:font-bold={selectedYear === yearNow + i}
      >
        {yearNow + i}
      </div>
    {/each}
  </div>
</div>
