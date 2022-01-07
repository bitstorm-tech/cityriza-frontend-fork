<script lang="ts">
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import EditNetworkItem from './EditNetworkItem.svelte';
  import { createEventDispatcher } from 'svelte';

  let showModal = false;
  export let id: string;
  export let name = '';
  export let amountOfDisplays = '0';
  export let merchants = '0';
  const dispatch = createEventDispatcher();
  const cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';

  function update(event) {
    name = event.detail.name;
    amountOfDisplays = event.detail.amountOfDisplays;
    merchants = event.detail.merchants;
    showModal = false;
  }

  function del(event) {
    dispatch('delete', event.detail);
    showModal = false;
  }
</script>

<div class="float-left w-full h-auto p-1.5 mb-1 bg-gray-200" {id}>
  <Link
    cssClass="float-left w-1/2 h-4 leading-4 text-left indent-10px text-[#ff5f42] text-sm"
    href="../network/network/"
    caption={name}
  />
  <h4 class="float-left w-1/6 h-4 leading-4 text-center text-sm">
    {amountOfDisplays}
  </h4>
  <h4 class="float-left w-1/6 h-4 leading-4 text-center mr-1 text-sm">
    {merchants}
  </h4>
  <Button caption="Edit" {cssClass} on:click={() => (showModal = true)} background="black" />
</div>

{#if showModal}
  <EditNetworkItem
    title="Netzwerk editieren"
    on:cancel={() => (showModal = false)}
    on:save={update}
    on:delete={del}
    {id}
    {name}
    {amountOfDisplays}
    {merchants}
  />
{/if}
