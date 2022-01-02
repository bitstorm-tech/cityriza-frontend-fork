<script lang="ts">
  import HamburgerIcon from '../icons/HamburgerIcon.svelte';
  import Link from '../ui/Link.svelte';
  import Modal from '../ui/Modal.svelte';
  let title = 'Willkommen bei Cityriza';
  let showHamburgerModal = false;
  let showForm = false;
</script>

<nav class="flex bg-primary place-content-between p-4 text-white sticky top-0">
  <Link caption="CITYRIZA" href="/" hoverUnderline />
  <div class="flex space-x-3">
    <Link caption="Kampagnie erstellen" href="/campaign" hoverUnderline />
    <span>|</span>
    <Link caption="LOGIN" href="/login" hoverUnderline />
    <div on:click={() => (showHamburgerModal = true)}>
      <HamburgerIcon />
    </div>
  </div>
  {#if showHamburgerModal}
    <Modal on:cancel={() => (showHamburgerModal = false)} {title} {showHamburgerModal} {showForm}>
      <ul>
        <h1>Konto</h1>
        <li>
          <Link caption="Login" on:click={() => (showHamburgerModal = false)} href="/login" hoverUnderline />
        </li>
        <h1>Settings</h1>
        <li>
          <Link caption="AGB" on:click={() => (showHamburgerModal = false)} href="/terms" hoverUnderline />
        </li>
        <li>
          <Link caption="Datenschutz" on:click={() => (showHamburgerModal = false)} href="/privacy" hoverUnderline />
        </li>
        <li>
          <Link caption="Impressum" on:click={() => (showHamburgerModal = false)} href="/imprint" hoverUnderline />
        </li>
        <li>
          <Link
            caption="Admin"
            on:click={() => (showHamburgerModal = false)}
            href="admin/network/networks"
            hoverUnderline
          />
        </li>
      </ul>
    </Modal>
  {/if}
</nav>

<style>
  h1 {
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: 'Roboto Slab', sans-serif;
    color: rgb(255, 95, 66);
    color: rgb(255, 95, 66);
    font-size: 1.5rem;
    margin-top: 15px;
  }
  li {
    color: #000;
    font-size: 1.15rem;
    margin-top: 10px;
  }
</style>
