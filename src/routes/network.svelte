<script context="module">
  import http from '$lib/http.service';
  export async function load() {
    const response = await http.get('/api/campaigns/a');

    if (response.status === 200) {
      const campaignUrls = response.data;
      return { props: { campaignUrls } };
    }
  }
</script>

<script lang="ts">
  export let campaignUrls: string[];
</script>

<div class="flex gap-64 w-full overflow-x-auto snap-x snap-mandatory p-8">
  <div class="snap-center min-w-[30%]" />
  {#each campaignUrls as url}
    <div class="snap-center snap-always min-w-[30%] bg-red-600">
      <video controls>
        <source src={url} />
        <track kind="captions" />
      </video>
    </div>
  {/each}
  <div class="snap-center min-w-[30%]" />
</div>
