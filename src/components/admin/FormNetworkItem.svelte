<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Input from '../../components/ui/Input.svelte';
  import Button from '../../components/ui/Button.svelte';
  export let showHamburgerModal: boolean;
  export let title = '';
  let formIsValid = false;
  let name = '';
  let amountOfDisplays = '';
  let merchants = '';
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('cancel');
    showHamburgerModal = false;
  }

  function submitForm() {
    dispatch('save', {
      name: name,
      amountOfDisplays: amountOfDisplays,
      merchants: merchants
    });
  }

  $: if (name.length > 0 && amountOfDisplays.length > 0 && merchants.length > 0) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
</script>

<div class="modal-backdrop" on:click={closeModal} />
<div class="modal">
  {#if title}
    <h1>{title}</h1>
  {/if}
  <div class="content">
    <form on:submit|preventDefault={submitForm}>
      <Input bind:value={name} id="name" type="text" label="Name des Netzwerks" placeholder="Name des Netzwerks" />
      <Input
        bind:value={amountOfDisplays}
        id="amountOfDisplays"
        type="text"
        label="Anzahl der Displays"
        placeholder="Anzahl der Displays"
      />
      <Input
        bind:value={merchants}
        id="merchants"
        type="text"
        label="Anzahl der Merchants"
        placeholder="Anzahl der Merchants"
      />
      <footer>
        <slot name="footer">
          <Button caption="Schließen" type="button" on:click={closeModal} />
        </slot>
        <slot name="submit">
          <Button caption="Sichern" {formIsValid} type="submit" />
        </slot>
      </footer>
    </form>
  </div>
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
    padding: 1rem 1rem 1rem 0;
  }
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
