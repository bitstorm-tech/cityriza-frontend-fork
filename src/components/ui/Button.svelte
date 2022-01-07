<script lang="ts">
  export let type = '';
  export let background = '';
  export let formIsValid = true;
  export let disabled = false;
  export let caption: string;
  export let cssClass = 'bg-primary text-white p-2 border border-white rounded-md hover:shadow-lg';
</script>

{#if caption === 'Sichern'}
  <button
    class={!formIsValid
      ? 'buttonDisabled text-white p-2 border border-white rounded-md'
      : 'submitOk text-white p-2 border border-white rounded-md hover:shadow-lg'}
    {type}
    {disabled}
    on:click>{caption}</button
  >
{:else}
  <button class={cssClass} {disabled} {type} style="background: {background}" on:click>{caption}</button>
{/if}

<style>
  .buttonDisabled {
    background: rgba(177, 177, 177, 0.3);
  }
  .submitOk {
    background: black;
  }
</style>
