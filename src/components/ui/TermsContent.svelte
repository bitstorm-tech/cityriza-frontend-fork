<script lang="ts">
  import terms from '../stores/terms-content-store';
  export let title = '';
  export let subtitle = '';
  export let position = '';
  export let content = '';
</script>

<section>
  <ul>
    {#each $terms as term}
      {#if term.title}
        <h1>{term.title}</h1>
      {/if}
      <br />
      {#if term.position}
        <h2>{term.position}</h2>
      {/if}
      <br />
      {#if term.subtitle}
        <h2>{term.subtitle}</h2>
      {/if}
      {#if term.content}
        <h3>{term.content}</h3>
      {/if}
    {/each}
  </ul>
</section>
