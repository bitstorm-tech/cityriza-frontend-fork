<script>
  import Input from '../components/ui/Input.svelte';
  import MediaPicker from '../components/ui/MediaPicker.svelte';
  import WarningMessage from '../components/ui/WarningMessage.svelte';

  let file;
  let startDate;
  let endDate;
  $: errorMessage = endDate && startDate > endDate ? 'Das Startdatum muss vor dem Endedatum liegen' : '';
</script>

<h1 class="text-6xl font-caveat text-center mt-3">Erstelle eine neue Kampagnie!</h1>
<div class="m-4 flex flex-col space-y-4">
  <WarningMessage show={errorMessage.length > 0}>{errorMessage}</WarningMessage>
  <div class="flex space-x-4">
    <Input label="Kampagnienstart" type="date" bind:value={startDate} />
    <Input label="Kampagnienende (inklusive)" type="date" bind:value={endDate} />
  </div>
  <MediaPicker on:fileSelected={(event) => (file = event.detail.file)} />
</div>
