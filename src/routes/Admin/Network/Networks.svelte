<script lang="ts">
  import Modal from '../../../components/ui/Modal.svelte';
  import Button from '../../../components/ui/Button.svelte';
  import AddMerchantToNetwork from '../network-merchant/addMerchantToNetwork.svelte';
  let showHamburgerModal = false;
  let createNetwork = false;
  let editNetwork = false;
  let showForm = false;
  let disabled = true;
  let title = 'Netzwerk anlegen';
  $: background = 'black';
  function loadNetwork() {}
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button
        on:click={() => (
          (showHamburgerModal = true), (createNetwork = true), (showForm = true), (title = 'Create Network')
        )}>+</Button
      >
    </h1>
    <a class="linkBackToHp" href="/">Zurück zur Startseite</a>
    <br />
    <div class="resultWrapper">
      <!-- label -->
      <p class="headerLabel50">Name</p>
      <p class="headerLabel15">Displays</p>
      <p class="headerLabel15">Merchants</p>
      <!-- network_entry -->
      <div class="entryWrapper">
        <a class="linkEntry" on:click={loadNetwork} href="../network/network">Network</a>
        <p class="headerLabel15">1</p>
        <p class="headerLabel15" style="margin-right: 5%;">57</p>
        <Button
          on:click={() => (
            (showHamburgerModal = true), (editNetwork = true), (showForm = true), (title = 'Edit Network')
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
