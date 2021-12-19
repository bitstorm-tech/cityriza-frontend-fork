<script lang="ts">
  export let type = '';
  export let background = '';
</script>

<button
  class="bg-primary text-white p-2 border border-white rounded-md hover:shadow-lg"
  {type}
  style="background: {background}"
  on:click
>
  <slot />
</button>
