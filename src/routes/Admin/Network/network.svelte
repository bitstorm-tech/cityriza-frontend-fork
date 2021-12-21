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
    <a
      style="text-align: center; display: block;margin: 0; color: rgb(255, 95, 66); font-size: 0.8rem;"
      on:click={loadNetworks}
      href="/admin/network/networks"
    >
      Zurück zur Netzwerk-Liste
    </a>
    <!-- <b style="font-size: 2rem;">Hallo Admin</b> -->
    <br />
    <div style="background: red; width: 40vw; height: 20rem; overflow: auto;">
      <!-- <b style="float: left; width: calc(40vw - 50px); font-size: 2rem; margin-bottom: 15px;">Netwerk-Name</b> -->
      <div style="float: right; padding: 10px; text-align: center;" />
      <p style="float: left; width: 50%; font-size: 0.8rem;">Name</p>
      <p style="float: left; width: 15%;font-size: 0.8rem;text-align: center;">Displays</p>
      <p style="float: left; width: 15%;font-size: 0.8rem;text-align: center;">Merchants</p>
      <div style="float: left; background: lightblue; width: 100%; height: auto;">
        <a style="float: left; width: 50%;color: rgb(255, 95, 66);" on:click={loadMerchant} href="/terms">Merchant</a>
        <p style="float: left; width: 15%;text-align: center;">1</p>
        <p style="float: left; width: 15%;text-align: center;margin-right: 5%;">57</p>
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
