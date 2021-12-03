<script lang="ts">
  import { goto } from '$app/navigation';
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  import Link from '../ui/Link.svelte';
  import WarningMessage from '../ui/WarningMessage.svelte';
  import { createUser } from '$lib/user.service';

  let isError = false;
  let email = '';
  let password = '';

  async function register() {
    isError = email.length === 0 || password.length === 0;
    if (!isError) {
      const response = await createUser(email, password);
      if (response.ok) {
        goto('/');
      } else {
        isError = true;
      }
    }
  }
</script>

<div class="flex flex-col space-y-4">
  <WarningMessage show={isError}>Leider ist bei der Registrierung etwas schief gegangen :(</WarningMessage>
  <Input label="E-Mail" type="email" bind:value={email} />
  <Input label="Passwort" type="password" bind:value={password} />
  <div class="flex flex-col space-y-2 justify-between">
    <Button on:click={register}>Registrieren</Button>
    <div class="flex space-x-1 text-xs">
      <span>Bereits registriert?</span>
      <Link href="/login">Anmelden</Link>
    </div>
  </div>
</div>
