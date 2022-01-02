<script lang="ts">
  import Button from '../../components/ui/Button.svelte';
  import Modal from '../../components/ui/Modal.svelte';
  let showHamburgerModal = false;
  let editNetwork = false;
  let showForm = false;
  let title = '';
  export let id = '';
  export let name = '';
  export let amountOfDisplays = 0;
  export let amountOfMerchants = 0;
  $: background = 'black';
  function loadMerchant() {}
</script>

<div class="resultWrapper">
  <p class="headerLabel50">Name</p>
  <p class="headerLabel15">Displays</p>
  <p class="headerLabel15">Merchants</p>
  <div class="entryWrapper">
    <a class="linkEntry" on:click={loadMerchant} href="/terms">{name}</a>
    <p class="headerLabel15">1</p>
    <p class="headerLabel15" style="margin-right: 5%;">57</p>
    <Button
      caption="Edit"
      on:click={() => ((showHamburgerModal = true), (editNetwork = true), (showForm = true), (title = 'Edit Merchant'))}
      {background}
    />
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
