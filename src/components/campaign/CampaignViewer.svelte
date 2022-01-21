<script lang="ts">
  import ArrowDown from '../icons/ArrowDown.svelte';
  import ArrowUp from '../icons/ArrowUp.svelte';
  import Information from '../icons/Information.svelte';
  import Reload from '../icons/Reload.svelte';
  import Search from '../icons/Search.svelte';
  import VolumeOff from '../icons/VolumeOff.svelte';
  import VolumeOn from '../icons/VolumeOn.svelte';
  export let videoUrls: string[];

  let video: HTMLVideoElement;
  let currentIndex = 0;
  let muted = true;

  function down() {
    currentIndex++;
    if (currentIndex > videoUrls.length - 1) {
      currentIndex = 0;
    }
    video.load();
  }

  function up() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = videoUrls.length - 1;
    }
    video.load();
  }

  function toggleMute() {
    muted = !muted;
  }

  function reload() {
    video.currentTime = 0;
  }
</script>

{#if videoUrls}
  <div class="flex flex-col gap-2">
    <div class="flex justify-around">
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary">
        <Search />
      </div>
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary" on:click={toggleMute}>
        {#if muted}
          <VolumeOff />
        {:else}
          <VolumeOn />
        {/if}
      </div>
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary" on:click={up}>
        <ArrowUp />
      </div>
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary" on:click={reload}>
        <Reload />
      </div>
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary">
        <Information />
      </div>
    </div>
    <video bind:this={video} width="350" autoplay {muted}>
      <source src={videoUrls[currentIndex]} />
      <track kind="captions" />
    </video>
    <div class="flex justify-around">
      <div class="bg-neutral-400 opacity-75 rounded-full cursor-pointer p-2 hover:bg-primary" on:click={down}>
        <ArrowDown />
      </div>
    </div>
  </div>
{/if}
