<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/admin/network/network`);
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
  import MerchantItem from '../../../components/admin/MerchantItem.svelte';
  import merchantItems from '../../../components/stores/merchant-items-store.js';
  import FormMerchantItem from '../../../components/admin/EditMerchantItem.svelte';
  let showModal = false;
  let title = '';
  // export let networkId;
  export let nameNetwork;
</script>

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      {nameNetwork}MISSING - script context="module"
      <Button caption="+" on:click={() => ((showModal = true), (title = 'Merchant anlegen'))} />
    </h1>
    <Link caption="Zurück zur Netzwerk-Liste" cssClass="headerLinkBackTo" href="/admin/network/networks/" />
    <br />
    <section id="networks" class="resultWrapper">
      <!-- label -->
      <div class="float-left w-full h-auto mb-2">
        <p class="float-left w-1/2 h-4 leading-4 text-left indent-10px text-xs">Name</p>
        <p class="float-left w-1/6 h-4 leading-4 text-center text-xs">Displays</p>
        <p class="float-left w-1/6 h-4 leading-4 text-center text-xs">Merchants</p>
      </div>
      <!-- network_entry -->
      {#each $merchantItems as merchantItem}
        <MerchantItem
          id={merchantItem.id}
          name={merchantItem.name}
          startDate={merchantItem.startDate}
          endDate={merchantItem.endDate}
        />
      {/each}
    </section>
  </div>
</div>

{#if showModal}
  <svelte:component
    this={FormMerchantItem}
    on:cancel={() => (showModal = false)}
    on:save={() => (showModal = false)}
    {showModal}
    {title}
  />
{/if}
