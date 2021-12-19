<script lang="ts">
  import HamburgerIcon from '../icons/HamburgerIcon.svelte';
  import Link from '../ui/Link.svelte';
  import Modal from '../ui/Modal.svelte';
  let title = 'Willkommen bei Cityriza';
  let showHamburgerModal = false;
</script>

<nav
  class="flex bg-primary place-content-between p-4 text-white"
  style="z-index: 10; position:fixed; top:0; width: 100vw;"
>
  <Link href="/" hoverUnderline {showHamburgerModal}>CITYRIZA</Link>
  <div class="flex space-x-3">
    <!-- <Link href="/campaign" hoverUnderline>Kampagnie erstellen</Link>
    <span>|</span> -->
    <Link href="/login" hoverUnderline {showHamburgerModal}>LOGIN</Link>
    <div on:click={() => (showHamburgerModal = true)}>
      <HamburgerIcon />
    </div>
  </div>
  {#if showHamburgerModal}
    <Modal on:cancel={() => (showHamburgerModal = false)} {title} {showHamburgerModal}>
      <ul>
        <h1>Konto</h1>
        <li>
          <Link on:cancel={() => (showHamburgerModal = false)} {showHamburgerModal} href="/login" hoverUnderline
            >Login</Link
          >
        </li>
        <h1>Settings</h1>
        <li>
          <Link on:cancel={() => (showHamburgerModal = false)} {showHamburgerModal} href="/terms" hoverUnderline
            >AGB</Link
          >
        </li>
        <li>
          <Link on:cancel={() => (showHamburgerModal = false)} {showHamburgerModal} href="/privacy" hoverUnderline
            >Datenschutz</Link
          >
        </li>
        <li>
          <Link on:cancel={() => (showHamburgerModal = false)} {showHamburgerModal} href="/imprint" hoverUnderline
            >Impressum</Link
          >
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
