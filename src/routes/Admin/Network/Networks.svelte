<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/admin/network/networks`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Link from '../../../components/ui/Link.svelte';
  import EditNetworkItem from '../../../components/admin/EditNetworkItem.svelte';
  import NetworkItem from '../../../components/admin/NetworkItem.svelte';
  import networkItems from '../../../components/stores/network-items-store.js';
  let showModal = false;
  let title = '';
</script>

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button caption="+" on:click={() => ((showModal = true), (title = 'Netzwerk anlegen'))} />
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
          on:showdetails
          on:edit
        />
      {/each}
    </section>
  </div>
</div>

{#if showModal}
  <EditNetworkItem on:cancel={() => (showModal = false)} on:save={() => (showModal = false)} {showModal} {title} />
{/if}
