<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import EditMerchantItem from './EditMerchantItem.svelte';
  let showModal = false;
  let title = '';
  export let id = '';
  export let name = '';
  export let startDate = '0';
  export let endDate = '0';
  $: background = 'black';
  $: cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';
  const dispatch = createEventDispatcher();
  function showDetail() {
    // let nameNetwork = { name };
  }
</script>

<div class="float-left w-full h-auto p-1.5 mb-1 bg-gray-200" {id}>
  <Link
    cssClass="float-left w-1/2 h-4 leading-4 text-left indent-10px text-[#ff5f42] text-sm"
    href="../merchant/merchant"
    on:click={() => dispatch('showdetails', id)}
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
    on:click={() => (dispatch('edit', id), (showModal = true), (title = 'Edit Merchant'))}
    {background}
  />
</div>

{#if showModal}
  <EditMerchantItem
    on:cancel={() => (showModal = false)}
    on:save={() => (showModal = false)}
    {showModal}
    {title}
    {id}
  />
{/if}
