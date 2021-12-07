<script lang="ts">
  import { goto } from '$app/navigation';
  import Input from '../ui/Input.svelte';
  import WarningMessage from '../ui/WarningMessage.svelte';
  import { createUser } from '$lib/user.service';
  import RegisterButton from './RegisterButton.svelte';

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
  <RegisterButton on:register={register} />
</div>
