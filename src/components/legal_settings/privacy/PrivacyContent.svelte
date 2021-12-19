<script lang="ts">
  import privacys from '../../stores/privacy-content-store';
  import PrivacyContentHeader from './PrivacyContentHeader.svelte';
</script>

<PrivacyContentHeader />
<section class="mainPadding">
  <ul>
    {#each $privacys as privacy}
      {#if privacy.title}
        <b class="title">{@html privacy.title}</b>
      {/if}
      {#if privacy.position}
        <h2 style="margin-top: 10px;">{privacy.position}</h2>
      {/if}
      {#if privacy.subtitle}
        <h2 style="margin-bottom: 25px;">{privacy.subtitle}</h2>
      {/if}
      {#if privacy.content}
        <h3 style="margin-bottom: 25px;">{@html privacy.content}</h3>
      {/if}
    {/each}
  </ul>
</section>

<style>
  .mainPadding {
    padding: 2rem 3rem;
  }
  .title {
    font-size: 2rem;
    color: rgb(255, 95, 66);
  }
</style>
