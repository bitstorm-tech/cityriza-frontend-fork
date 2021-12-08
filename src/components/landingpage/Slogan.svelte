<script lang="ts">
  import Button from '../ui/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<div class="relative">
  <img src="images/cityriza_logoAndCityImage_munich_landscape.png" alt="Slogan" />
  <div class="grid grid-rows-2 absolute top-6 left-1/3 font-caveat">
    <span class="text-8xl justify-self-start">Werde sichtbar</span>
    <span class="text-4xl text-primary justify-self-end">und erlebe Dein Netzwerk</span>
  </div>

  <div class="absolute bottom-16 left-16">
    <Button on:click={() => goto('/registration?type=company')}>
      JETZT WERBEKUNDE ODER <br /> STANDORTPARTNER WERDEN
    </Button>
  </div>
</div>
