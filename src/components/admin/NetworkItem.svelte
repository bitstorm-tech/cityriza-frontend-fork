<script lang="ts">
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import Modal from '../../components/ui/Modal.svelte';
  function loadNetwork() {}
  let showHamburgerModal = false;
  let editNetwork = false;
  let showForm = false;
  let title = '';
  export let id = '';
  export let name = '';
  export let amountOfDisplays = 0;
  export let amountOfMerchants = 0;
  $: background = 'black';
  $: cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';
  $: cssClassLink = '';
</script>

<!-- network_entry -->
<div class="float-left w-full h-auto p-1.5 bg-gray-200" {id}>
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
    {amountOfMerchants}
  </h4>
  <Button
    caption="Edit"
    {cssClass}
    on:click={() => ((showHamburgerModal = true), (editNetwork = true), (showForm = true), (title = 'Edit Network'))}
    {background}
  />
</div>
<!-- Edit Network -->
{#if showHamburgerModal && editNetwork}
  <Modal
    on:cancel={() => (showHamburgerModal = false)}
    on:submit={() => (showHamburgerModal = false)}
    {title}
    {showForm}
    {showHamburgerModal}
  />
{/if}
