<script>
  import Button from '../../components/ui/Button.svelte';
  import Modal from '../../components/ui/Modal.svelte';
  function loadNetwork() {}
  let showHamburgerModal = false;
  let editNetwork = false;
  let showForm = false;
  let title = 'Netzwerk anlegen';
  $: background = 'black';
</script>

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
      on:click={() => ((showHamburgerModal = true), (editNetwork = true), (showForm = true), (title = 'Edit Network'))}
      {background}>EDIT</Button
    >
  </div>
</div>
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
