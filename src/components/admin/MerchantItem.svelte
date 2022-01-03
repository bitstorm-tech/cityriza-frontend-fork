<script lang="ts">
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import merchantItems from '../../components/stores/merchant-items-store.js';
  import FormMerchantItem from './FormMerchantItem.svelte';
  let showHamburgerModal = false;
  let title = '';
  export let id = '';
  export let name = '';
  export let startDate = '0';
  export let endDate = '0';
  $: background = 'black';
  $: cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';
  function loadMerchant() {}

  function addMerchantItem(event) {
    showHamburgerModal = false;
    const merchantItemData = {
      name: event.detail.name,
      startDate: event.detail.startDate,
      endDate: event.detail.endDate
    };
    merchantItems.addMerchantItem(merchantItemData);
  }
</script>

<div class="float-left w-full h-auto p-1.5 bg-gray-200" {id}>
  <Link
    cssClass="float-left w-1/2 h-4 leading-4 text-left indent-10px text-[#ff5f42] text-sm"
    href="../merchant/merchant"
    on:click={loadMerchant}
    caption={name}
  />
  <h4 class="float-left w-1/6 h-4 leading-4 text-center text-sm">
    {startDate}
  </h4>
  <h4 class="float-left w-1/6 h-4 leading-4 text-center mr-1 text-sm">
    {endDate}
  </h4>
  <Button
    caption="Edit"
    {cssClass}
    on:click={() => ((showHamburgerModal = true), (title = 'Edit Merchant'))}
    {background}
  />
</div>
{#if showHamburgerModal}
  <FormMerchantItem
    on:cancel={() => (showHamburgerModal = false)}
    on:save={addMerchantItem}
    {showHamburgerModal}
    {title}
  />
{/if}
