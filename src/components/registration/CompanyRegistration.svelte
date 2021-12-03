<script lang="ts">
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  import Link from '../ui/Link.svelte';
  let isError = true;
</script>

<Input label="Firmenname" type="text" />
<Input label="E-Mail" type="email" />
<Input label="Passwort" type="password" />
<Input label="USt ID (optional)" type="text" />
<div class="flex justify-between">
  <Button>Registrieren</Button>
  <div class="flex space-x-1 text-xs">
    <span>Bereits registriert?</span>
    <Link href="/login">Anmelden</Link>
  </div>
</div>
