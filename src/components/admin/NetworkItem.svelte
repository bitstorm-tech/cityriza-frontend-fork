<script lang="ts">
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import networkItems from '../../components/stores/network-items-store.js';
  import FormNetworkItem from './FormNetworkItem.svelte';
  let showHamburgerModal = false;
  let title = '';
  export let id = '';
  export let name = '';
  export let amountOfDisplays = '0';
  export let merchants = '0';
  $: background = 'black';
  $: cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';
  function loadNetwork() {
    let nameNetwork = { name };
  }

  function addNetworkItem(event) {
    showHamburgerModal = false;
    const networkItemData = {
      name: event.detail.name,
      amountOfDisplays: event.detail.amountOfDisplays,
      merchants: event.detail.merchants
    };
    networkItems.addNetworkItem(networkItemData);
  }
</script>

<div class="float-left w-full h-auto p-1.5 mb-1 bg-gray-200" {id}>
  <Link
    cssClass="float-left w-1/2 h-4 leading-4 text-left indent-10px text-[#ff5f42] text-sm"
    href="../network/network"
    on:click={loadNetwork}
    caption={name}
  />
  <h4 class="float-left w-1/6 h-4 leading-4 text-center text-sm">
    {amountOfDisplays}
  </h4>
  <h4 class="float-left w-1/6 h-4 leading-4 text-center mr-1 text-sm">
    {merchants}
  </h4>
  <Button
    caption="Edit"
    {cssClass}
    on:click={() => ((showHamburgerModal = true), (title = 'Edit Network'))}
    {background}
  />
</div>
{#if showHamburgerModal}
  <FormNetworkItem
    on:cancel={() => (showHamburgerModal = false)}
    on:save={addNetworkItem}
    {showHamburgerModal}
    {title}
  />
{/if}
