<script context="module">
  import http from '$lib/http.service';
  export async function load() {
    const response = await http.get('/api/campaigns/a');

    if (response.status === 200) {
      const videoUrls = response.data;
      return { props: { videoUrls } };
    }
  }
</script>

<script lang="ts">
  import CampaignViewer from '../components/campaign/CampaignViewer.svelte';
  import Button from '../components/ui/Button.svelte';
  import { goto } from '$app/navigation';
  import NetworkChooser from '../components/landingpage/NetworkChooser.svelte';

  export let videoUrls: string[];
</script>

<div class="relative mt-4 mb-8 h-[95vh]">
  <img src="images/cityriza_logoAndCityImage_munich_landscape.png" alt="Slogan" />
  <div class="grid grid-rows-2 absolute top-2 left-10 font-caveat">
    <span class="text-8xl justify-self-start">Werde sichtbar</span>
    <span class="text-4xl text-primary justify-self-end">und erlebe Dein Netzwerk</span>
  </div>
  <NetworkChooser />

  <div class="absolute bottom-10 right-10">
    <Button on:click={() => goto('/registration?company')}>
      JETZT WERBEKUNDE ODER <br /> STANDORTPARTNER WERDEN
    </Button>
  </div>

  <div class="absolute top-2 right-[25%]">
    <CampaignViewer {videoUrls} />
  </div>
</div>
