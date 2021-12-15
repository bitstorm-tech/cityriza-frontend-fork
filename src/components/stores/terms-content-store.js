import { readable } from 'svelte/store';

const terms = readable([
  {
    title: '1. Geltungsbereich, Begriffsbestimmungen und Nutzungsberechtigung',
    position: '',
    subtitle: '',
    content: ''
  },
  {
    title: '',
    position: '1.1',
    subtitle: '',
    content:
      'Diese Nutzungsbedingungen gelten für die Nutzung des von der Cloudriza UG (haftungsbeschränkt), Wasserturmstraße 23, 85737 Ismaning (nachfolgend „Betreiber“) etwa unter der Internetadresse www.cityriza.com bereitgestellten Online-Portals (nachfolgend „Cityriza“), sowie der darin enthaltenen Anwendungssoftware. Die vom Betreiber erbrachten Leistungen werden unter Ziffer 4 näher spezifiziert.'
  },
  {
    title: '',
    position: '1.2',
    subtitle: '',
    content:
      'Nutzer im Sinne dieser Nutzungsbedingungen ist der Oberbegriff für registrierte Nutzer und Gäste. Nutzer können sowohl Verbraucher als auch Unternehmer sein. '
  }
]);

export default terms;
