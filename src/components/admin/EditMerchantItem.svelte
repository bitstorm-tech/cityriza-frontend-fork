<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Modal from '../../components/ui/Modal.svelte';
  import merchantItems from '../../components/stores/merchant-items-store.js';
  import Input from '../../components/ui/Input.svelte';
  import Button from '../../components/ui/Button.svelte';
  import { isEmpty, isValidEmail } from '../../helpers/validation';
  export let showModal: boolean;
  export let id = null;
  export let title = '';
  let name = '';
  let startDate = '';
  let endDate = '';
  let formIsValid = false;

  if (id) {
    const unsubscribe = merchantItems.subscribe((items) => {
      const selectedMerchant = items.find((i) => i.id === id);
      name = selectedMerchant.name;
      startDate = selectedMerchant.startDate;
      endDate = selectedMerchant.endDate;
    });
    unsubscribe();
  }
  const dispatch = createEventDispatcher();

  $: nameValid = !isEmpty(name);
  $: startDateValid = !isEmpty(startDate);
  $: endDateValid = !isEmpty(endDate);
  $: formIsValid = nameValid && startDateValid && endDateValid;

  function deleteMerchantItem() {
    merchantItems.removeMerchantItem(id);
    dispatch('save');
  }

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
    if (id) {
      merchantItems.updateMerchantItem(id, merchantItemData);
    } else {
      merchantItems.addMerchantItem(merchantItemData);
    }
    dispatch('save');
  }
</script>

<Modal {title} on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <Input id="name" type="text" label="Name des Merchants" placeholder="Name des Merchants" bind:value={name} />
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
  </form>
  <div slot="footer">
    <Button type="button" caption="Abbrechen" on:click={cancel} />
    <Button type="button" caption="Sichern" on:click={submitForm} disabled={!formIsValid} {formIsValid} />
    {#if id}
      <Button type="button" caption="Löschen" on:click={deleteMerchantItem} />
    {/if}
  </div>
</Modal>
