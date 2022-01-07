<script lang="ts">
  export let href: string;
  export let hoverUnderline = false;
  export let cssClass = '';
  export let caption: string;
  const hoverEffect = hoverUnderline ? 'hover:underline' : 'hover:text-primary';
</script>

{#if cssClass}
  <a class={cssClass} {href} on:click target="_self">{caption}</a>
{:else}
  <a class={hoverEffect} {href} on:click target="_self"><slot />{caption}</a>
{/if}
