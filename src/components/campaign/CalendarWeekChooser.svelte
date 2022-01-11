<script>
  export let selectedCalendarWeek = 1;
</script>

<div class="flex flex-col border-2">
  <p class="bg-gray-200 text-primary px-2">Kalender Woche auswählen</p>
  <div class="flex flex-wrap gap-2 p-2">
    {#each Array(52) as _, i}
      <div
        on:click={() => (selectedCalendarWeek = i + 1)}
        class="cursor-pointer hover:text-primary"
        class:text-primary={selectedCalendarWeek === i + 1}
        class:font-bold={selectedCalendarWeek === i + 1}
      >
        {i + 1}
      </div>
    {/each}
  </div>
</div>
