<script lang="ts">
  import terms from '../../stores/terms-content-store';
  import extendedTerms from '../../stores/terms-content-extended-store';
  import TermsContentHeader from './TermsContentHeader.svelte';
  import TermsContentExtendedHeader from './TermsContentExtendedHeader.svelte';
</script>

<TermsContentHeader />
<section class="mainPadding">
  <ul>
    {#each $terms as term}
      {#if term.title}
        <b class="title">{@html term.title}</b>
      {/if}
      {#if term.position}
        <h2 style="margin-top: 10px;">{term.position}</h2>
      {/if}
      {#if term.subtitle}
        <h2 style="margin-bottom: 25px;">{term.subtitle}</h2>
      {/if}
      {#if term.content}
        <h3 style="margin-bottom: 25px;">{term.content}</h3>
      {/if}
    {/each}
  </ul>
</section>

<TermsContentExtendedHeader />
<section class="mainPadding">
  <ul>
    {#each $extendedTerms as extendedTerm}
      {#if extendedTerm.title}
        <b class="title">{@html extendedTerm.title}</b>
      {/if}
      {#if extendedTerm.position}
        <h2 style="margin-top: 10px;">{extendedTerm.position}</h2>
      {/if}
      {#if extendedTerm.subtitle}
        <h2 style="margin-bottom: 25px;">{extendedTerm.subtitle}</h2>
      {/if}
      {#if extendedTerm.content}
        <h3 style="margin-bottom: 25px;">{extendedTerm.content}</h3>
      {/if}
    {/each}
  </ul>
</section>

<style>
  .mainPadding {
    padding: 5rem 3rem;
  }
  .title {
    font-size: 2rem;
    color: rgb(255, 95, 66);
  }
</style>
