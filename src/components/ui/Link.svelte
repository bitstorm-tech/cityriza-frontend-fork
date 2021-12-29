<script lang="ts">
  export let href: string;
  import { createEventDispatcher } from 'svelte';
  export let hoverUnderline = false;
  const hoverEffect = hoverUnderline ? 'hover:underline' : 'hover:text-primary';
</script>

<a class={hoverEffect} {href} on:click><slot /></a>
