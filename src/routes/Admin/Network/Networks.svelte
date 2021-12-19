<script lang="ts">
  import Modal from '../../../components/ui/Modal.svelte';
  // import Link from '../../../components/ui/Link.svelte';
  // import Input from '../components/ui/Input.svelte';
  import Button from '../../../components/ui/Button.svelte';
  let showHamburgerModal = false;
  let createNetwork = false;
  let editNetwork = false;
  let showForm = false;
  let title = 'Netzwerk anlegen';
  $: background = 'black';
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">NETWORKS</h1>

    <b style="font-size: 2rem;">Hallo Admin</b>
    <br />
    <div style="background: red; width: 40vw; height: 20rem; overflow: auto;">
      <b style="float: left; width: calc(40vw - 50px); font-size: 2rem; margin-bottom: 15px;">Netwerk-Liste</b>
      <div style="float: right; padding: 10px; text-align: center;">
        <Button
          on:click={() => (
            (showHamburgerModal = true), (createNetwork = true), (showForm = true), (title = 'Create Network')
          )}>+</Button
        >
      </div>
      <p style="float: left; width: 30%;">Name</p>
      <p style="float: left; width: 30%;">Displays</p>
      <p style="float: left; width: 30%;">Merchants</p>
      <div style="float: left; background: lightblue; width: 100%; height: auto;">
        <p style="float: left; width: 30%;">Network</p>
        <p style="float: left; width: 30%;">1</p>
        <p style="float: left; width: 30%;">57</p>
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
