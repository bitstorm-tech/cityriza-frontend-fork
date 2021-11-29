<script lang="ts">
  import Link from '../components/ui/Link.svelte';
  import Input from '../components/ui/Input.svelte';
  import Button from '../components/ui/Button.svelte';
</script>

<div class="flex items-center justify-center h-96">
  <div class="w-1/3 space-y-3">
    <h1 class="text-center">Bei Cityriza anmelden</h1>
    <Input label="E-Mail" type="email" />
    <Input label="Passwort" type="password" />
    <div class="flex justify-between">
      <Button>Anmelden</Button>
      <div class="flex space-x-1 text-xs">
        <span>Noch keinen Account?</span>
        <Link href="/register">Registrieren</Link>
      </div>
    </div>
  </div>
</div>
