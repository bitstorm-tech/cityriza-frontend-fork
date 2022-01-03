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
    <section id="networks" class="resultWrapper">
      <!-- label -->
      <p class="headerLabel50">Name</p>
      <p class="headerLabel15">Displays</p>
      <p class="headerLabel15">Merchants</p>
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

<style>
  .resultWrapper {
    background: red;
    width: 40vw;
    height: 20rem;
    overflow: auto;
  }
  .headerLabel50 {
    float: left;
    width: 50%;
    font-size: 0.8rem;
  }
  .headerLabel15 {
    float: left;
    width: 15%;
    font-size: 0.8rem;
    text-align: center;
  }
</style>
