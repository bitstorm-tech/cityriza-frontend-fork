<script lang="ts">
  export let href: string;
  import { createEventDispatcher } from 'svelte';
  export let hoverUnderline = false;
  const hoverEffect = hoverUnderline ? 'hover:underline' : 'hover:text-primary';
  export let showHamburgerModal = '';
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('cancel');
    showHamburgerModal = false;
  }
</script>

<a on:click={closeModal} class={hoverEffect} {href}><slot /></a>
