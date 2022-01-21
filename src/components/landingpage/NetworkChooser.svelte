<script>
  import ArrowDown from '../icons/ArrowDown.svelte';
  import Triangle from './Triangle.svelte';
  let isOpen = false;
</script>

<div class="font-caveat text-white bg-primary p-8">
  <div class="text-4xl">ERLEBE DAS NETZWERK</div>
  <div class="flex space-x-4 items-center cursor-pointer" on:click={() => (isOpen = !isOpen)}>
    <div class="text-2xl">Unterföhring - Ismaning - Garching</div>
    <ArrowDown />
  </div>
  {#if isOpen}
    <ul />
  {/if}
</div>
