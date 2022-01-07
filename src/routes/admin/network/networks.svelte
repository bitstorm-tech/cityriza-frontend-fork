<script context="module">
  import http from '$lib/http.service';
  export async function load() {
    const response = await http.get('/api/networks');

    if (response.status === 200) {
      const networks = response.data;
      return { props: { networks } };
    }
  }
</script>

<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Link from '../../../components/ui/Link.svelte';
  import EditNetworkItem from '../../../components/admin/EditNetworkItem.svelte';
  import NetworkItem from '../../../components/admin/NetworkItem.svelte';
  import type Network from '$lib/network/network.model.js';
  export let networks: Network[] = [];
  let showModal = false;

  function addNewNetwork(event) {
    networks = [event.detail, ...networks];
    console.log(networks);
    showModal = false;
  }

  function deleteNetwork(event) {
    networks = networks.filter((network) => network.id !== event.detail.id);
  }
</script>

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button caption="+" on:click={() => (showModal = true)} />
    </h1>
    <Link caption="Zurück zur Startseite" cssClass="headerLinkBackTo" href="/" />
    <br />
    <section id="networks">
      <!-- label -->
      <div class="float-left w-full h-auto mb-2">
        <p class="float-left w-1/2 h-4 leading-4 text-left indent-10px text-xs">Name</p>
        <p class="float-left w-1/6 h-4 leading-4 text-center text-xs">Displays</p>
        <p class="float-left w-1/6 h-4 leading-4 text-center text-xs">Merchants</p>
      </div>
      <!-- network_entry -->
      {#each networks as networkItem}
        <NetworkItem
          id={networkItem.id}
          name={networkItem.name}
          amountOfDisplays={networkItem.amountOfDisplays}
          merchants={networkItem.merchants}
          on:delete={deleteNetwork}
        />
      {/each}
    </section>
  </div>
</div>

{#if showModal}
  <EditNetworkItem title="Netzwerk anlegen" on:cancel={() => (showModal = false)} on:save={addNewNetwork} />
{/if}
