<script lang="ts">
  import Link from '../components/ui/Link.svelte';
  import Button from '../components/ui/Button.svelte';
  import Checkbox from '../components/ui/Checkbox.svelte';
  import UserRegistration from '../components/registration/UserRegistration.svelte';
  import CompanyRegistration from '../components/registration/CompanyRegistration.svelte';
  let userRegistration = true;
</script>

<div class="flex items-center justify-center mt-10 mb-32">
  <div class="w-1/3 space-y-3">
    <h1 class="text-center">Bei Cityriza registrieren</h1>
    <Checkbox label="Sie sind eine Firma?" on:ontoggle={() => (userRegistration = !userRegistration)} />
    {#if userRegistration}
      <UserRegistration />
    {:else}
      <CompanyRegistration />
    {/if}
    <div class="flex justify-between">
      <Button>Registrieren</Button>
      <div class="flex space-x-1 text-xs">
        <span>Bereits registriert?</span>
        <Link href="/login">Anmelden</Link>
      </div>
    </div>
  </div>
</div>
