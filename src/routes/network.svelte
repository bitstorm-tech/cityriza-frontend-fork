<script>
  const videos = [
    'https://cityriza-space-dev.fra1.digitaloceanspaces.com/cityriza-clip-1.mp4',
    'https://cityriza-space-dev.fra1.digitaloceanspaces.com/cityriza-clip-2.mp4',
    'https://cityriza-space-dev.fra1.digitaloceanspaces.com/cityriza-clip-3.mp4',
    'https://cityriza-space-dev.fra1.digitaloceanspaces.com/cityriza-clip-4.mp4',
    'https://cityriza-space-dev.fra1.digitaloceanspaces.com/cityriza-clip-5.mp4'
  ];
</script>

<div class="flex gap-64 w-full overflow-x-auto snap-x snap-mandatory p-8">
  <div class="snap-center min-w-[30%]" />
  {#each videos as video}
    <div class="snap-center snap-always min-w-[30%] bg-red-600">
      <video controls>
        <source src={video} />
        <track kind="captions" />
      </video>
    </div>
  {/each}
  <div class="snap-center min-w-[30%]" />
</div>
