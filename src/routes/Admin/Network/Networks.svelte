<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Link from '../../../components/ui/Link.svelte';
  import NetworkItem from '../../../components/admin/NetworkItem.svelte';
  import networkItems from '../../../components/stores/network-items-store.js';
  import FormNetworkItem from '../../../components/admin/FormNetworkItem.svelte';

  let showHamburgerModal = false;
  let title = '';

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

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button caption="+" on:click={() => ((showHamburgerModal = true), (title = 'Netzwerk anlegen'))} />
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
      {#each $networkItems as networkItem}
        <NetworkItem
          id={networkItem.id}
          name={networkItem.name}
          amountOfDisplays={networkItem.amountOfDisplays}
          merchants={networkItem.merchants}
        />
      {/each}
    </section>
  </div>
</div>

{#if showHamburgerModal}
  <FormNetworkItem
    on:cancel={() => (showHamburgerModal = false)}
    on:save={addNetworkItem}
    {showHamburgerModal}
    {title}
  />
{/if}
