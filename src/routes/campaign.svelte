<script>
  import Input from '../components/ui/Input.svelte';
  import MediaPicker from '../components/ui/MediaPicker.svelte';
  let file;
  let startDate;
  let endDate;
</script>

<h1 class="text-6xl font-caveat text-center mt-3">Erstelle eine neue Kampagnie!</h1>
<div class="m-4 flex flex-col space-y-4">
  <div class="flex space-x-4">
    <Input label="Kampagnienstart" type="date" />
    <Input label="Kampagnienende" type="date" />
  </div>
  <MediaPicker on:fileSelected={(event) => (file = event.detail.file)} />
</div>
