<script lang="ts">
  export let type = '';
</script>

<button class="bg-primary text-white p-2 border border-white rounded-md hover:shadow-lg" {type} on:click>
  <slot />
</button>
