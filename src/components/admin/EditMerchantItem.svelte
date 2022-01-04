<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import merchantItems from '../../components/stores/merchant-items-store.js';
  import Input from '../../components/ui/Input.svelte';
  import Button from '../../components/ui/Button.svelte';
  export let showModal: boolean;
  export let title = '';
  let formIsValid = false;
  let name = '';
  let startDate = '';
  let endDate = '';
  const dispatch = createEventDispatcher();

  function cancel() {
    dispatch('cancel');
    showModal = false;
  }

  function submitForm() {
    const merchantItemData = {
      name: name,
      startDate: startDate,
      endDate: endDate
    };
    merchantItems.addMerchantItem(merchantItemData);
    dispatch('save');
  }

  $: if (name.length > 0 && startDate.length > 0 && endDate.length > 0) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
</script>

<div class="modal-backdrop" on:click={cancel} />
<div class="modal">
  {#if title}
    <h1>{title}</h1>
  {/if}
  <div class="content">
    <form on:submit|preventDefault={submitForm}>
      <Input bind:value={name} id="name" type="text" label="Name des Merchants" placeholder="Name des Merchants" />
      <Input
        bind:value={startDate}
        id="startDate"
        type="text"
        label="Start der Mitgliedschaft"
        placeholder="Start der Mitgliedschaft dd-mm-yyyy"
      />
      <Input
        bind:value={endDate}
        id="endDate"
        type="text"
        label="Ende der Mitgliedschaft"
        placeholder="Ende der Mitgliedschaft dd-mm-yyyy"
      />
      <footer>
        <slot name="footer">
          <Button caption="Schließen" type="button" on:click={cancel} />
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
