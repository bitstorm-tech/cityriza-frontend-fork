<script lang="ts">
  import Link from '../../../components/ui/Link.svelte';
  import Input from '../../../components/ui/Input.svelte';
  import Button from '../../../components/ui/Button.svelte';
</script>

<div class="flex items-center justify-center mt-10 mb-32" style="padding-top: 3rem;">
  <div class="w-5/6 lg:w-1/3 space-y-3">
    <h1 class="text-center font-caveat text-4xl mb-4">Bei Cityriza anmelden</h1>
    <Input label="E-Mail" type="email" />
    <Input label="Passwort" type="password" />
    <div class="flex flex-col space-y-2">
      <Button>Anmelden</Button>
      <div class="flex text-xs space-x-1">
        <span>Noch keinen Account?</span>
        <Link href="/registration">Registrieren</Link>
      </div>
    </div>
  </div>
</div>
