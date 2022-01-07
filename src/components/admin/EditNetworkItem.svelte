<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Modal from '../../components/ui/Modal.svelte';
  import Input from '../../components/ui/Input.svelte';
  import Button from '../../components/ui/Button.svelte';
  import { isEmpty } from '../../helpers/validation';
  import { createNetwork, deleteNetwork, updateNetwork } from '$lib/network/network.service';

  export let title: string;
  export let id = null;
  export let name = '';
  export let amountOfDisplays = '';
  export let merchants = '';
  const dispatch = createEventDispatcher();

  $: nameValid = !isEmpty(name);
  $: amountOfDisplaysValid = !isEmpty(amountOfDisplays);
  $: merchantsValid = !isEmpty(merchants);
  $: formIsValid = nameValid && amountOfDisplaysValid && merchantsValid;

  function cancel() {
    dispatch('cancel');
  }

  async function del() {
    try {
      if (id) {
        await deleteNetwork(id);
        dispatch('delete', { id });
      }
    } catch (error) {}
  }

  async function save() {
    try {
      if (!id) {
        id = await createNetwork(name, amountOfDisplays, merchants);
      } else {
        await updateNetwork(id, name, amountOfDisplays, merchants);
      }
      dispatch('save', { id, name, amountOfDisplays, merchants });
    } catch (error) {}
  }
</script>

<Modal {title} on:cancel>
  <Input id="name" type="text" label="Name des Netzwerks" placeholder="Name des Netzwerks" bind:value={name} />
  <Input
    bind:value={amountOfDisplays}
    id="amountOfDisplays"
    type="number"
    label="Anzahl der Displays"
    placeholder="Anzahl der Displays"
  />
  <Input
    bind:value={merchants}
    id="merchants"
    type="number"
    label="Anzahl der Merchants"
    placeholder="Anzahl der Merchants"
  />
  <div slot="footer">
    <Button type="button" caption="Abbrechen" on:click={cancel} />
    <Button type="button" caption="Sichern" on:click={save} disabled={!formIsValid} {formIsValid} />
    {#if id}
      <Button type="button" caption="Löschen" on:click={del} />
    {/if}
  </div>
</Modal>
