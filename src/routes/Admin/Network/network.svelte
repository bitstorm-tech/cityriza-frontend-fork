<script lang="ts">
  import Button from '../../../components/ui/Button.svelte';
  import Link from '../../../components/ui/Link.svelte';
  import MerchantItem from '../../../components/admin/MerchantItem.svelte';
  import merchantItems from '../../../components/stores/merchant-items-store.js';
  import FormMerchantItem from '../../../components/admin/FormMerchantItem.svelte';

  let showHamburgerModal = false;
  let title = '';

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

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button caption="+" on:click={() => ((showHamburgerModal = true), (title = 'Merchant anlegen'))} />
    </h1>
    <Link caption="Zurück zur Netzwerk-Liste" cssClass="headerLinkBackTo" href="/" />
    <br />
    <section id="networks" class="resultWrapper">
      <!-- label -->
      <p class="headerLabel50">Name</p>
      <p class="headerLabel15">Displays</p>
      <p class="headerLabel15">Merchants</p>
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
