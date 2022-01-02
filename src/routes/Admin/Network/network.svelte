<script lang="ts">
  import Modal from '../../../components/ui/Modal.svelte';
  import Button from '../../../components/ui/Button.svelte';
  let showHamburgerModal = false;
  let createNetwork = false;
  let editNetwork = false;
  let showForm = false;
  let title = 'Netzwerk anlegen';
  $: background = 'black';
  function loadMerchant() {}
  function loadNetworks() {}
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Name
      <Button
        on:click={() => (
          (showHamburgerModal = true), (createNetwork = true), (showForm = true), (title = 'Create Merchant')
        )}>+</Button
      >
    </h1>
    <a class="linkBackToHp" href="/admin/network/networks" on:click={loadNetworks}>Zurück zur Netzwerk-Liste</a>
    <!-- <b style="font-size: 2rem;">Hallo Admin</b> -->
    <br />
    <div class="resultWrapper">
      <!-- <b style="float: left; width: calc(40vw - 50px); font-size: 2rem; margin-bottom: 15px;">Netwerk-Name</b> -->
      <div style="float: right; padding: 10px; text-align: center;" />
      <p class="headerLabel50">Name</p>
      <p class="headerLabel15">Displays</p>
      <p class="headerLabel15">Merchants</p>
      <div class="float: left; background: lightblue; width: 100%; height: auto;">
        <a class="linkEntry" on:click={loadMerchant} href="/terms">Merchant</a>
        <p class="headerLabel15">1</p>
        <p class="headerLabel15" style="margin-right: 5%;">57</p>
        <Button
          on:click={() => (
            (showHamburgerModal = true), (editNetwork = true), (showForm = true), (title = 'Edit Merchant')
          )}
          {background}>EDIT</Button
        >
      </div>
    </div>
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
{#if showHamburgerModal && editNetwork}
  <Modal
    on:cancel={() => (showHamburgerModal = false)}
    on:submit={() => (showHamburgerModal = false)}
    {title}
    {showForm}
    {showHamburgerModal}
  />
{/if}

<style>
  .resultWrapper {
    background: red;
    width: 40vw;
    height: 20rem;
    overflow: auto;
  }
  .headerLabel15 {
    float: left;
    width: 15%;
    font-size: 0.8rem;
    text-align: center;
  }
  .headerLabel50 {
    float: left;
    width: 50%;
    font-size: 0.8rem;
  }
  .linkBackToHp {
    text-align: center;
    display: block;
    margin: 0;
    color: rgb(255, 95, 66);
    font-size: 0.8rem;
  }
  .entryWrapper {
    float: left;
    background: lightblue;
    width: 100%;
    height: auto;
  }
  .linkEntry {
    float: left;
    width: 50%;
    color: rgb(255, 95, 66);
  }
</style>
