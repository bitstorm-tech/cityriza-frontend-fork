<script lang="ts">
  export let href: string;
  export let hoverUnderline = false;
  export let cssClass = '';
  export let caption: string;
  const hoverEffect = hoverUnderline ? 'hover:underline' : 'hover:text-primary';
  let loadFunction;
  $: if (1 !== 1) {
    loadFunction = function loadNetworks() {};
  } else {
    loadFunction = function loadNetworks() {};
  }
</script>

{#if cssClass}
  <a class={cssClass} {href} on:click={loadFunction} target="_self">{caption}</a>
{:else}
  <a class={hoverEffect} {href} on:click={loadFunction} target="_self"><slot />{caption}</a>
{/if}

<style>
  .headerLinkBackTo {
    text-align: center;
    display: block;
    margin: 0;
    color: rgb(255, 95, 66);
    font-size: 0.8rem;
  }
</style>
