<script lang="ts">
  import WarningIcon from '../icons/WarningIcon.svelte';

  export let show = false;
</script>

{#if show}
  <div class="flex border border-primary p-4 space-x-4">
    <WarningIcon size={10} />
    <span><slot /> </span>
  </div>
{/if}
