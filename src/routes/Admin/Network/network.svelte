<script lang="ts">
  import Modal from '../../../components/ui/Modal.svelte';
  import Button from '../../../components/ui/Button.svelte';
  import Merchant from '../../../components/admin/Merchant.svelte';
  let showHamburgerModal = false;
  let createNetwork = false;
  let showForm = false;
  let title = 'Netzwerk anlegen';
  function loadNetworks() {}
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Name
      <Button
        caption="+"
        on:click={() => (
          (showHamburgerModal = true), (createNetwork = true), (showForm = true), (title = 'Create Merchant')
        )}
      />
    </h1>
    <a class="headerLinkBackTo" href="/admin/network/networks" on:click={loadNetworks}>Zurück zur Netzwerk-Liste</a>
    <br />
    <Merchant />
  </div>
</div>
{#if showHamburgerModal && createNetwork}
  <Modal
    on:cancel={() => (showHamburgerModal = false)}
    on:submit={() => (showHamburgerModal = false)}
    {title}
    {showForm}
    {showHamburgerModal}
  />
{/if}

<style>
  .headerLinkBackTo {
    text-align: center;
    display: block;
    margin: 0;
    color: rgb(255, 95, 66);
    font-size: 0.8rem;
  }
</style>
