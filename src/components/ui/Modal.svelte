<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../../components/ui/Button.svelte';
  export let title: string;
  const dispatch = createEventDispatcher();

  function cancel() {
    dispatch('cancel');
  }
</script>

<div class="modal-backdrop" on:click={cancel} />
<div class="modal">
  {#if title}
    <h1>{title}</h1>
  {/if}
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <Button caption="Schließen" type="button" on:click={cancel} />
    </slot>
  </footer>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: 'Roboto Slab', sans-serif;
    color: white;
    background: rgb(255, 95, 66);
  }
  .content {
    padding: 1rem;
  }
  footer {
    padding: 0 1rem 1rem 1rem;
  }
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
