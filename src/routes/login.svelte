<script lang="ts">
  import Link from '../components/ui/Link.svelte';
  import Input from '../components/ui/Input.svelte';
  import Button from '../components/ui/Button.svelte';
  import { post } from '$lib/http.service';
  import { goto } from '$app/navigation';
  import WarningMessage from '../components/ui/WarningMessage.svelte';

  let email: string;
  let password: string;
  let error = false;

  async function signIn() {
    const response = await post('/api/auth/signin', { email, password });
    if (response.ok) {
      goto('/');
    } else {
      error = true;
    }
  }
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-1/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">Bei Cityriza anmelden</h1>
    <WarningMessage show={error}>Falsche E-Mail oder falsches Passwort</WarningMessage>
    <Input label="E-Mail" type="email" bind:value={email} />
    <Input label="Passwort" type="password" bind:value={password} />
    <div class="flex flex-col space-y-2">
      <Button caption="Anmelden" on:click={signIn} />
      <div class="flex text-xs space-x-1">
        <span>Noch keinen Account?</span>
        <Link caption="Registrieren" href="/registration" />
      </div>
    </div>
  </div>
</div>
