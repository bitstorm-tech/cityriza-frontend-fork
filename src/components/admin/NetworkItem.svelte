<!-- <script context="module">
  export function preload(page) {
    const networkId = page.params.id;

    return this.fetch(`https://svelte-course.firebaseio.com/meetups/${networkId}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Fetching meetups failed, please try again later!');
        }
        return res.json();
      })
      .then((networkData) => {
        return { loadedNetwork: { ...networkData, id: networkId } };
      })
      .catch((err) => {
        this.error(404, 'Could not fetch meetup!');
      });
  }
</script> -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../../components/ui/Button.svelte';
  import Link from '../../components/ui/Link.svelte';
  import EditNetworkItem from './EditNetworkItem.svelte';
  let showModal = false;
  let title = '';
  export let id;
  export let name = '';
  export let amountOfDisplays = '0';
  export let merchants = '0';
  // let networkId = id;
  $: background = 'black';
  $: cssClass = 'float-right text-white px-1.5 mr-1 border border-white rounded-md hover:shadow-lg text-xs';
  const dispatch = createEventDispatcher();
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
  <Button
    caption="Edit"
    {cssClass}
    on:click={() => (dispatch('edit', id), (showModal = true), (title = 'Edit Network'))}
    {background}
  />
</div>

{#if showModal}
  <EditNetworkItem on:cancel={() => (showModal = false)} on:save={() => (showModal = false)} {showModal} {title} {id} />
{/if}
