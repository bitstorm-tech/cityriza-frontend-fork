<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Modal from '../../components/ui/Modal.svelte';
  import networkItems from '../../components/stores/network-items-store.js';
  import Input from '../../components/ui/Input.svelte';
  import Button from '../../components/ui/Button.svelte';
  import { isEmpty, isValidEmail } from '../../helpers/validation';
  // DATABASE
  import { goto } from '$app/navigation';
  import { createNetwork, getInvalidNetworkFormFields } from '$lib/network/network.service';

  export let showModal: boolean;
  export let id = null;
  export let title = '';
  let name = '';
  let amountOfDisplays = '';
  let merchants = '';
  let formIsValid = false;

  if (id) {
    const unsubscribe = networkItems.subscribe((items) => {
      const selectedNetwork = items.find((i) => i.id === id);
      name = selectedNetwork.name;
      amountOfDisplays = selectedNetwork.amountOfDisplays;
      merchants = selectedNetwork.merchants;
    });
    unsubscribe();
  }
  const dispatch = createEventDispatcher();

  $: nameValid = !isEmpty(name);
  $: amountOfDisplaysValid = !isEmpty(amountOfDisplays);
  $: merchantsValid = !isEmpty(merchants);
  $: formIsValid = nameValid && amountOfDisplaysValid && merchantsValid;

  // function deleteNetworkItem() {
  //   networkItems.removeNetworkItem(id);
  //   dispatch('save');
  // }

  function deleteNetworkItem() {
    fetch(`/admin/network/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('An error occurred, please try again!');
        }
        networkItems.removeNetworkItem(id);
      })
      .catch((err) => console.log(err));
    dispatch('save');
  }

  function cancel() {
    dispatch('cancel');
    showModal = false;
  }

  // DATABASE_JOSEF
  let errorMessage: string;

  async function submit(event) {
    errorMessage = null;
    const form = event.target;
    const invalidFields = getInvalidNetworkFormFields(form);

    if (invalidFields.length > 0) {
      errorMessage = 'Folgende Eingabefelder sind nicht korrekt: ' + invalidFields.join(', ');
      return;
    }

    const response = await createNetwork(form.name.value, form.amountOfDisplays.value, form.merchants.value);
    if (response.ok) {
      goto('/');
    } else {
      errorMessage = 'Fehler beim Anlegen des neuen Netzwerks';
    }
  }

  function submitForm() {
    const networkItemData = {
      name: name,
      amountOfDisplays: amountOfDisplays,
      merchants: merchants
    };
    // EDIT
    if (id) {
      fetch(`/admin/network/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(networkItemData),
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('An error occurred, please try again!');
          }
          networkItems.updateNetworkItem(id, networkItemData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // CREATE
      fetch('/admin/network/networks', {
        method: 'POST',
        body: JSON.stringify({ ...networkItemData }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Fehler - bitte versuche es noch einmal!');
          }
          return res.json();
        })
        .then((data) => {
          networkItems.addNetworkItem({
            ...networkItemData,
            id: data.name
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    dispatch('save');
  }
  // OLD_CODE_WITHOUT_DATABASE
  // function submitForm() {
  //   const networkItemData = {
  //     name: name,
  //     amountOfDisplays: amountOfDisplays,
  //     merchants: merchants
  //   };
  //   if (id) {
  //     networkItems.updateNetworkItem(id, networkItemData);
  //   } else {
  //     networkItems.addNetworkItem(networkItemData);
  //   }
  //   dispatch('save');
  // }
</script>

<Modal {title} on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <Input id="name" type="text" label="Name des Netzwerks" placeholder="Name des Netzwerks" bind:value={name} />
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
  </form>
  <div slot="footer">
    <Button type="button" caption="Abbrechen" on:click={cancel} />
    <Button type="button" caption="Sichern" on:click={submitForm} disabled={!formIsValid} {formIsValid} />
    {#if id}
      <Button type="button" caption="Löschen" on:click={deleteNetworkItem} />
    {/if}
  </div>
</Modal>
