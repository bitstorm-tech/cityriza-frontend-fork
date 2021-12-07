<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Link from '../ui/Link.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col space-y-2 justify-between">
  <Button on:click={() => dispatch('register')}>Registrieren</Button>
  <div class="flex space-x-1 text-xs">
    <span>Bereits registriert?</span>
    <Link href="/login">Anmelden</Link>
  </div>
</div>
