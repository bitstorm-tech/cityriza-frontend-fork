<script lang="ts">
  import Button from './Button.svelte';

  export let selectedFile: File;
  let fileInput;
  let imagePreview;

  function fileSelected(event) {
    const file = event.srcElement.files[0];

    if (!file) {
      return;
    }

    const URL = window.URL || window.webkitURL;
    imagePreview = URL.createObjectURL(file);
    selectedFile = file;
  }
</script>

<Button caption="Bild auswählen" on:click={() => fileInput.click()} />
<input bind:this={fileInput} on:change={fileSelected} type="file" hidden />
{#if imagePreview}
  <img src={imagePreview} alt="Gewähltes Bild" class="w-screen md:w-2/3 self-center" />
{/if}
