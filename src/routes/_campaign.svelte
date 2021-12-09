<script lang="ts">
  import { post } from '$lib/http.service';
  import Button from '../components/ui/Button.svelte';
  import Input from '../components/ui/Input.svelte';
  import MediaPicker from '../components/ui/MediaPicker.svelte';
  import WarningMessage from '../components/ui/WarningMessage.svelte';

  let file: File;
  let startDate: string;
  let endDate: string;
  $: errorMessage = endDate && startDate > endDate ? 'Das Startdatum muss vor dem Endedatum liegen' : '';

  function save() {
    post('/api/campaigns', { startDate, endDate, file });
  }

  function fileSelected(event) {
    console.log('File:', event.detail.file);
  }
</script>

<h1 class="text-6xl font-caveat text-center mt-3">Erstelle eine neue Kampagnie!</h1>
<div class="m-4 flex flex-col space-y-4">
  <WarningMessage show={errorMessage.length > 0}>{errorMessage}</WarningMessage>
  <form on:submit|preventDefault={save}>
    <div class="flex space-x-4">
      <Input label="Kampagnienstart" type="date" bind:value={startDate} />
      <Input label="Kampagnienende (inklusive)" type="date" bind:value={endDate} />
    </div>
    <MediaPicker on:fileSelected={fileSelected} />
    <Button type="submit">Speichern</Button>
  </form>
</div>
