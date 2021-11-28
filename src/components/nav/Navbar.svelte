<script lang="ts">
  import HamburgerIcon from '../ui/HamburgerIcon.svelte';
  import Link from '../ui/Link.svelte';
</script>

<nav class="flex bg-primary place-content-between p-4 text-white">
  <Link href="/" hoverUnderline>CITIRIZA</Link>
  <div class="flex space-x-3">
    <Link href="/login" hoverUnderline>LOGIN</Link>
    <HamburgerIcon />
  </div>
</nav>
