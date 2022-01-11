<script lang="ts">
  import http from '$lib/http.service';
  import CampaignStatus from '../components/campaign/CampaignStatus.svelte';
  import CalendarWeekChooser from '../components/campaign/CalendarWeekChooser.svelte';
  import Button from '../components/ui/Button.svelte';
  import MediaPicker from '../components/ui/MediaPicker.svelte';
  import YearChooser from '../components/campaign/YearChooser.svelte';

  let selectedCalendarWeek: number;
  let selectedYear: number;
  let selectedFile: File;
  $: isValid = selectedFile && selectedCalendarWeek > 0;

  function save() {
    const formData = new FormData();
    formData.append('calendarweek', selectedCalendarWeek.toString());
    formData.append('year', selectedYear.toString());
    formData.append('file', selectedFile);
    http.post('/api/campaigns', formData);
  }
</script>

<h1 class="text-4xl font-caveat text-center mt-3">
  Verwalte deine Kampagnie für KW {selectedCalendarWeek} / {selectedYear}
</h1>
<div class="flex flex-col m-4 gap-2">
  <div class="flex gap-4 justify-between items-center">
    <CalendarWeekChooser bind:selectedCalendarWeek />
    <YearChooser bind:selectedYear />
    <Button caption="Speichern" on:click={save} disabled={!isValid} />
  </div>
  <div class="flex gap-4 justify-between items-start">
    <MediaPicker bind:selectedFile />
    <CampaignStatus />
  </div>
</div>
