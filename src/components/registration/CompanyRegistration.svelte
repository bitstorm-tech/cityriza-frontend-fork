<script lang="ts">
  import Input from '../ui/Input.svelte';
  import RegisterButton from './RegisterButton.svelte';
  let isError = true;
</script>

<Input label="Firmenname" type="text" />
<Input label="Straße und Hausnummer" type="text" />
<div class="flex space-x-2">
  <Input label="PLZ" type="text" />
  <Input label="Stadt" type="text" />
</div>
<Input label="E-Mail" type="email" />
<Input label="Passwort" type="password" />
<Input label="USt ID (optional)" type="text" />
<RegisterButton />
