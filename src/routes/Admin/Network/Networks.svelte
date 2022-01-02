<script lang="ts">
  import Modal from '../../../components/ui/Modal.svelte';
  import Button from '../../../components/ui/Button.svelte';
  import Link from '../../../components/ui/Link.svelte';
  import Network from '../../../components/admin/Network.svelte';
  let showHamburgerModal = false;
  let createNetwork = false;
  let showForm = false;
  let title = 'Netzwerk anlegen';
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-3/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">
      Netzwerk-Liste
      <Button
        caption="+"
        on:click={() => (
          (showHamburgerModal = true), (createNetwork = true), (showForm = true), (title = 'Create Network')
        )}
      />
    </h1>
    <Link caption="Zurück zur Startseite" cssClass="headerLinkBackTo" href="/" />
    <br />
    <Network />
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
