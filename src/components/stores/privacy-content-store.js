import { readable } from 'svelte/store';

const privacys = readable([
  { title: 'Gegenstand dieser Erklärung und Altersfreigabe <br/>', position: '', subtitle: '', content: '' },
  { title: '1.1 Gegenstand dieser Datenschutzerklärung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Diese Datenschutzerklärung gilt für alle Dienstleistungen von Cityriza, die insbesondere über die Cityriza-App oder die Cityriza-Webseite erbracht werden. Die Datenschutzerklärung regelt, wie wir mit Deinen personenbezogenen Daten umgehen.'
  },
  { title: '1.2 Altersfreigabe und die Privatsphäre von Kindern', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Unsere Dienste sind auf Benutzer beschränkt, die mindestens 18 Jahre alt sind und erfassen somit wissentlich keinerlei Daten von Minderjährigen. Falls Du den Verdacht hast, dass ein Nutzer minderjährig ist, melde dies bitte unter Angabe dessen Nutzernamens an folgende E-Mail-Adresse: jugendschutz@Cityriza.com.'
  },
  { title: 'Cookies und Links <br/>', position: '', subtitle: '', content: '' },
  { title: '2.1 Cookies', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Um Deinen Besuch auf unserer Webseite so angenehm wie möglich zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, setzen wir wie viele andere Unternehmen auch, so genannte Cookies (Textdateien, die auf Deinem Computer gespeichert werden). Hierbei handelt es sich um kleine Textdateien, die auf Deinem Endgerät abgelegt werden. Einige der von uns verwendeten Cookies werden nach dem Ende der Browser-Sitzung, also nach Schließen Deines Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Deinem Endgerät und ermöglichen uns oder unseren Partnerunternehmen (Cookies von Drittanbietern), Deinen Browser beim nächsten Besuch wieder zu erkennen (persistente Cookies). Werden Cookies gesetzt, erheben und verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen wie Browser- und Standortdaten sowie IP-Adresswerte. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann.'
  },
  {
    title: '',
    position: '2.1.1',
    subtitle: '',
    content:
      'Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen den Bestellprozess zu vereinfachen (z.B. Merken des Inhalts eines virtuellen Warenkorbs für einen späteren Besuch auf der Website). Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.'
  },
  {
    title: '',
    position: '2.1.2',
    subtitle: '',
    content:
      'Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns helfen, unser Internetangebot für Dich interessanter zu gestalten. Zu diesem Zweck werden bei Deinem Besuch unserer Website gegebenenfalls auch Cookies von Partnerunternehmen auf Deiner Festplatte gespeichert (Cookies von Drittanbietern). Über den Einsatz derartiger Cookies und den Umfang der jeweils erhobenen Informationen wirst Du innerhalb der nachstehenden Absätze individuell und gesondert informiert.'
  },
  {
    title: '',
    position: '2.1.3',
    subtitle: '',
    content:
      'Bitte beachte, dass Du Deinen Browser so einstellen kannst, dass Du über das Setzen von Cookies informiert wirst und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen kannst. Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemenü jedes Browsers beschrieben, welches Dir erläutert, wie Du Deine Cookie-Einstellungen ändern kannst. Diese findest Du für die jeweiligen Browser unter den folgenden Links: <br/><br/>Internet Explorer: http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies<br/>Firefox: https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen<br/>Chrome: http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647<br/>Safari: https://support.apple.com/kb/ph21411?locale=de_DE<br/>Opera: http://help.opera.com/Windows/10.20/de/cookies.html'
  },
  {
    title: '',
    position: '2.1.4',
    subtitle: '',
    content:
      'Bitte beachte, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt und somit aus technischen Gründen zu Funktionseinschränkungen unseres Dienstleistungsangebots führen kann.'
  },
  { title: '2.2 Links', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Soweit unsere Internetseite Links zu anderen Web-Seiten enthält, weisen wir darauf hin, dass wir keinen Einfluss darauf haben, dass deren Betreiber die Datenschutzbestimmungen einhalten. Die vorliegende Datenschutzerklärung bezieht sich daher ausschließlich auf die Inhalte dieser Web-Seite.'
  },
  { title: 'Personenbezogene Daten, Erhebung und Nutzung<br/>', position: '', subtitle: '', content: '' },
  {
    title: '3.1 Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen',
    position: '',
    subtitle: '',
    content: ''
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wir, die Cloudriza UG (haftungsbeschränkt), Wasserturmstrasse 23, 85737 Ismaning, Deutschland, Tel.: +49 89 96 053 807, E-Mail: support@Cityriza.com (nachfolgend „Betreiber“), als Betreiber der Internetadresse www.cityriza.com und dem darauf bereitgestellten Online-Portal (nachfolgend „Cityriza“), freuen uns, dass Du unsere Website besuchst und bedanken uns für Dein Interesse. Im Folgenden informieren wir Dich über den Umgang mit Deinen personenbezogenen Daten bei Nutzung unserer Website bzw. unserer App. Personenbezogene Daten sind hierbei alle Daten, mit denen Du persönlich identifiziert werden kannst.<br/><br/>Wir nehmen den Schutz Deiner Daten sehr ernst und möchten Dir erklären, welche Daten wir erheben und wozu wir sie nutzen. Mit der Zustimmung zu der nachfolgenden Datenschutzerklärung willigst Du gegenüber Cityriza in die Erhebung, Verarbeitung und Nutzung Deiner personenbezogenen Daten unter Beachtung der Datenschutz-Grundverordnung (DSGVO) und den nachfolgenden Bestimmungen ein.'
  },
  {
    title: '',
    position: '3.1.1',
    subtitle: '',
    content:
      'Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist der Betreiber. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.'
  },
  {
    title: '',
    position: '3.1.2',
    subtitle: '',
    content:
      'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Du kannst eine verschlüsselte Verbindung an der Zeichenfolge "https://" und dem Schloss-Symbol in Deiner Browserzeile erkennen.'
  },
  {
    title:
      '3.2 Erhebung und Nutzung von Daten beim Besuch unserer Website, bei der Eröffnung eines Nutzerkontos, zur Vertragsabwicklung und bei der Übermittlung an Dritte',
    position: '',
    subtitle: '',
    content: ''
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst unsere Webseiten grundsätzlich besuchen, ohne dass wir personenbezogene Daten von Dir erheben. Bei der bloß informatorischen Nutzung unserer Website, also wenn Du dich nicht registrierst oder uns anderweitig Informationen übermittelst, erheben wir nur solche Daten, die Dein Browser an unseren Server übermittelt (sog. "Server-Logfiles"). Wenn Du unsere Website aufrufst, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Dir die Website anzuzeigen:<br/><br/>Unsere besuchte Website<br/>Datum und Uhrzeit zum Zeitpunkt des Zugriffes<br/>Menge der gesendeten Daten in Byte<br/>Quelle/Verweis, von welchem Sie auf die Seite gelangten<br/>Verwendeter Browser<br/>Verwendetes Betriebssystem<br/>Verwendete IP-Adresse (ggf.: in anonymisierter Form)'
  },
  {
    title: '',
    position: '3.2.1',
    subtitle: '',
    content:
      'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.'
  },
  {
    title: '',
    position: '3.2.2.1',
    subtitle: '',
    content:
      'Gemäß Art. 6 Abs. 1 lit. b DGSVO werden personenbezogene Daten nur erhoben und verarbeitet, wenn Du uns diese von Dir aus zur<br/><br/>• Durchführung eines Vertrages<br/>• bei der Eröffnung eines Nutzerkontos<br/>• oder im Rahmen der Kontaktaufnahme<br/><br/>mitteilst.'
  },
  {
    title: '',
    position: '3.2.2.2',
    subtitle: '',
    content:
      'Diese Daten werden ohne Deine ausdrückliche Einwilligung jeweils allein zur Vertragsabwicklung und Bearbeitung Deiner Anfragen genutzt. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.'
  },
  {
    title: '',
    position: '3.2.2.3',
    subtitle: '',
    content:
      'Eine Löschung Deines Nutzerkontos ist jederzeit möglich und kann durch eine Nachricht an die o.g. Adresse des Verantwortlichen erfolgen.'
  },
  {
    title: '',
    position: '3.2.2.4',
    subtitle: '',
    content: 'Wir speichern und verwenden die von Dir mitgeteilten Daten zur Vertragsabwicklung.'
  },
  {
    title: '',
    position: '3.2.2.5',
    subtitle: '',
    content:
      'Nach vollständiger Abwicklung des Vertrages oder Löschung Deines Nutzerkontos werden Deine Daten mit Rücksicht auf steuer- und handelsrechtliche Aufbewahrungsfristen gesperrt und nach Ablauf dieser Fristen gelöscht, sofern Du nicht ausdrücklich in eine weitere Nutzung Deiner Daten eingewilligt hast oder eine gesetzlich erlaubte weitere Datenverwendung von unserer Seite vorbehalten wurde, über die wir Dich nachstehend entsprechend informieren.'
  },
  {
    title: '',
    position: '3.2.3',
    subtitle: '',
    content: 'Um die Nutzung unseres Dienstleistungsangebots zu ermöglichen, erheben wir und verwenden Daten wie folgt:'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'a. Registrierung<br/>Bei der Registrierung für die Dienste von Cityriza erheben wir Deinen Nutzernamen, ein Passwort und Deine Email-Adresse.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Dein Nutzername ist über Cityriza für eingeloggte Mitglieder immer öffentlich sichtbar und erscheint auf Deiner Profilseite und in den zugehörigen Suchergebnissen. Du kannst sowohl Deinen richtigen Namen, als auch ein Pseudonym verwenden. Für einige unserer Dienste, wie z.B. das Ansehen der Startseite, ist es nicht erforderlich, ein Nutzerkonto zu erstellen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'b. Von der Cityriza-App eingeholte Berechtigungen zum Zugriff auf Systemfunktionen Deines Smartphones<br/>• Netzwerkstatus anzeigen, vollständiger Internetzugriff: Ermöglicht die Übertragung der zum Betrieb der Cityriza-App erforderlichen Daten für eine serverseitige Auswertung.<br/>• Allgemeiner (netzwerkbasierter) Standort und genauer Standort (GPS): erforderlich zur Standortfeststellung.<br/>• Push-Notifications: Übermittlung von Information zur Cityriza-App einschließlich Statusinformationen, wie neue Bilder, Kommentare von Freunden, Freundschaftsanfragen oder neuen Freunden.<br/>• Bilder und Videos aufnehmen.<br/>• Speicherinhalte ändern oder löschen, Speicherinhalte lesen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'c. Erhobene Daten im Zusammenhang mit der Nutzung der Cityriza-App<br/>• GPS-Koordinaten einschließlich Zeitpunkt<br/>• Orte in deiner Nähe<br/>• Die Nutzereingaben in der Cityriza-App, z.B. wenn Du Dich registrierst, die Angaben zu Deinem Profil aktualisierst oder ein Bild kommentierst<br/>• Zugriff und Nutzung der Cityriza-App, z.B. wenn Du ein Bild aufnimmst, dieses teilst oder kommentierst, nach Freunden suchst oder Dich mit diesen verbindest. Speicherung des Nutzerverhaltens, einschließlich gegebenenfalls der IP-Adresse für maximal eine Woche zur Missbrauchsbekämpfung. Danach werden die in diesem Zusammenhang erhobenen Daten anonymisiert oder gelöscht.<br/>• Darüber hinaus können gegebenenfalls anonymisierte Tracking-Daten zum Nutzerverhalten gesammelt werden.'
  },
  { title: '', position: '', subtitle: '', content: 'd. Umfang der Verarbeitung und Nutzung personenbezogener Daten' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wir nutzen die personenbezogenen Daten,<br/>• um unser Dienstleistungsangebot zu erbringen, dieses laufend auszuweiten und die Anforderungen unserer Nutzer zu erfüllen;<br/>• um die Cityriza-App zu betreiben, zu schützen, zu verbessern und zu optimieren und um das Nutzererlebnis zu schützen, zu verbessern und zu optimieren, beispielsweise durch Analysen und Recherche, Personalisierung oder anderweitige Individualisierung Ihrer Erfahrungen und für Werbemaßnahmen;<br/>• um unseren rechtlichen Pflichten nachzukommen;<br/>• um Dir schnell Informationen zu Deiner unmittelbaren Umgebung geben zu können. Daten zu Deinem Standort werden nur für die Aktionen, Marketing-Botschaften oder die Bearbeitung Deiner Anfrage genutzt. Die Übertragung Deiner Standortdaten erfolgt über eine verschlüsselte Verbindung. Deine Standortdaten werden nach Beendigung der Anfrage anonymisiert und zur Verbesserung unseres Services statistisch ausgewertet Die GPS-Koordinaten werden von Cityriza jedoch weder gesondert ausgelesen noch sonst genutzt. Du kannst die Erhebung der GPS-Daten im Rahmen der Kameraeinstellungen Deines Smartphones unterbinden. Einzelheiten hierzu findest Du in der Bedienungsanleitung.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Des Weiteren ziehen wir Deine Daten zur Kommunikation mit Dir heran. Die von uns ausgesendeten Mitteilungen können Informationen über neue Funktionen der Cityriza-App, Produkte und Dienstleistungen bzw. Informationen über bestimmte Aktionen umfassen. Im Rahmen dieser Mitteilung werden wir Dich davon in Kenntnis setzen, dass Du den Bezug der Mitteilung jederzeit kündigen kannst.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'e. Newsletter<br/>Soweit nicht bereits nach vorstehenden Regelungen zulässig, versenden wir Newsletter per E-Mail mit aktuellen Informationen, neue Features von Cityriza und weitere interessante Angebote im Zusammenhang mit Cityriza nur nach vorheriger Anmeldung über die Cityriza-App bzw. die Cityriza-Webseite. Die Anmeldung ist freiwillig. Im Rahmen der Anmeldung willigst Du in die Verarbeitung der angegebenen Daten zum Versand der E-Mails ein. Ferner willigst Du ein, dass Daten über Dein Nutzungsverhalten (nämlich das Öffnen und Anklicken von Links in der E-Mail, von Cityriza erhoben und verarbeitet werden, um damit die Inhalte der Mailings auf Deinen Bedarf abzustimmen, z.B. wenn Du mehrfach Links zu einem Thema anklickst, können wir dies in den künftigen Mailings berücksichtigen. Solltest Du später keine Newsletter mehr von uns erhalten wollen, kannst Du dem jederzeit widersprechen. Dies kann über eine Mitteilung in Textform (email, Brief, Fax) an unsere im Impressum angegebene Adresse erfolgen, ohne dass hierfür andere als die Übermittlungskosten nach den Basistarifen entstehen. Selbstverständlich findest Du auch in jedem Newsletter einen Abmelde-Link.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'f. Systembedingt übermittelte Daten bei Besuch der Cityriza-Webseite, einschließlich Cookies und deren Nutzung personenbezogener Daten, wie etwa<br/>• Browser/Version<br/>• Betriebssystem<br/>• Referrer-URL (die zuvor besuchte Seite)<br/>• Hostname des zugreifenden Computers (IP-Adresse)<br/>• Uhrzeit der Serveranfrage'
  },
  { title: '3.3 Übermittlung personenbezogener Daten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Cityriza übermittelt Deine personenbezogenen Daten in folgendem Umfang: Wir kooperieren mit Anbietern, die Statistiken erstellen und zusammenstellen, sowie Anbietern von IT-Dienstleistungen (z. B. Rechenzentren, Anbieter von Hosting-, Sicherungs- und Datenbankdiensten). Diese technischen Dienstleister haben nur in dem Ausmaß auf Deine Daten Zugriff, das für die Erfüllung ihrer Aufgaben erforderlich ist. Die technischen Dienstleister sind dazu verpflichtet, Deine Daten in Übereinstimmung mit dieser Datenschutzerklärung und den geltenden Datenschutzgesetzen zu behandeln.'
  },
  {
    title: '',
    position: '3.3.1',
    subtitle: '',
    content:
      'Außerdem übermitteln wir deine personenbezogenen Daten an Dritte, sofern Du in die Übermittlung ausdrücklich eingewilligt hast, wobei wir Dich über den Zweck der Weitergabe und die Nutzung der Daten durch den/die Dritten informieren werden.'
  },
  {
    title: '',
    position: '3.3.2',
    subtitle: '',
    content:
      'Von den Fällen der Ziffern 3.3 und 3.3.1 abgesehen, übermitteln wir Deine Daten grundsätzlich nicht an Dritte. Ausnahmen gelten,<br/>• wenn und soweit es zur Durchführung der bestehenden Vertragsverhältnisse oder zur Durchsetzung uns zustehender Ansprüche notwendig ist,<br/>• wenn wir gesetzlich dazu verpflichtet sind, insbesondere wenn wir durch ein Gericht oder zuständige Behörde entsprechend verpflichtet werden,<br/>• wenn es sich um Anfragen von behördlichen Organen, insbesondere Strafverfolgungs- und Aufsichtsbehörden, handelt, wenn und soweit dies zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung sowie zur Verfolgung von Straftaten erforderlich ist.<br/>• wenn Daten in anonymisierter Form zu statistischen Zwecken an Dritte übermittelt werden.'
  },
  { title: '3.4 Personenbezogene Daten in unserem Social Media Bereich', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Daten, die Du uns als normales Mitglied zur Verfügung stellst<br/>Du hast die Möglichkeit im Chat andere freigeschaltete Nutzer im persönlichen Chat zu kontaktieren. Um diese Dienste zu ermöglichen speichern wir die uns von Dir freiwillig in Deinem Nutzerprofil angegebenen Daten und geben diese auch im Rahmen der zugehörigen Interaktion und Notwendigkeit, nach Deinen Freigabekriterien an mit Dir interagierende Nutzer weiter.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Bitte gehe immer achtsam mit Deinen Daten um und stelle sicher, dass Du nur Inhalte freigibst, deren Veröffentlichung nicht unangenehm für Dich ist, da weder Du noch wir kontrollieren können, was andere mit Deinen Informationen tun, sobald Du diese freigegeben hast.'
  },
  {
    title: '',
    position: '3.4.1',
    subtitle: '',
    content:
      'Wenn Du Dein Mitgliedskonto erstellst, gibst Du mindestens Deine Anmeldedaten an, wie<br/>• Nutzername<br/>• E-Mail<br/>• Passwort'
  },
  {
    title: '',
    position: '3.4.2',
    subtitle: '',
    content:
      'Wenn Du Dein Profil erstellst, gibst Du einige grundlegende Details an, wie z.B.<br/>• Dein Geschlecht (optional)<br/>• Dein Geburtsdatum'
  },
  {
    title: '',
    position: '3.4.3',
    subtitle: '',
    content:
      'Darüber hinaus kannst Du zusätzlich und freiwillig weitere Daten in Deinem Nutzerprofil angeben, wie z.B.<br/>• Informationen zu Deiner Person, z.B Kurzbiographie (optional)'
  },
  {
    title: '',
    position: '3.4.4',
    subtitle: '',
    content: 'Du kannst aber auch Bilder und Videos hochladen, wie z.B.<br/>• Dein Profilfoto (optional)'
  },
  {
    title: '',
    position: '3.4.5',
    subtitle: '',
    content:
      'Einige Deiner uns freiwillig zur Verfügung gestellten Persönlichkeitsdaten, werden in einigen Rechtsordnungen ggf. als „speziell“ oder „vertraulich“ erachtet, wie z.B.<br/>• Daten zu Deiner Rasse (optional)<br/>• Volkszugehörigkeit (optional)<br/>• Deiner sexuellen Orientierung (optional)<br/>• Deinen Glaubensgrundsätzen (optional)'
  },
  {
    title: '',
    position: '3.4.6',
    subtitle: '',
    content:
      'Wenn Du Einträge erstellst, gibst Du Daten an, wie z.B.<br/>• Bild<br/>• Video<br/>• Animiertes Gif<br/>• Überschrift<br/>• Text<br/>• Suchmaschinenrelevante Meta-Daten, wie Keywords, Titel, Beschreibung (im Fall der Trauerkarte)'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Indem Du Dich dazu entscheidest, diese Informationen zu Verfügung zu stellen, stimmst Du der Verarbeitung dieser Daten durch uns zu.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Für bestimmte Datenfelder Deiner Nutzerprofildaten bieten wir Dir Sichtbarkeitseinstellungen, in denen Du auswählen kannst, ob diese Daten im Book „öffentlich“ sichtbar sind oder nicht. Wenn Du uns Nutzerprofil-Informationen gibst und für diese keine Sichtbarkeitseinstellung von Dir eingestellt wurden, sind diese Informationen öffentlich.'
  },
  { title: '3.5 Personenbezogene Kommunikationsdaten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Für den Fall, dass Du<br/>• Dich mit unserem Kundendienst in Verbindung setzt, erfassen wir die Daten, die Du uns während der Interaktion zur Verfügung stellst. Zu Schulungszwecken und zur Gewährleistung hochwertiger Dienste überwachen wir diese Interaktionen von Zeit zu Zeit oder zeichnen sie auf, sofern Du dem vor Beginn der Interaktion zustimmst.<br/>• uns darum bittest, mit anderen Personen zu kommunizieren, z.B., wenn Du uns bittest, in deinem Namen eine E-Mail an einen Deiner Freunde zu senden, erfassen wir die Daten, die Du uns über andere Personen zur Verfügung stellst, um Deiner Bitte nachzukommen.<br/>Des weiteren verarbeiten wir im Rahmen unserer Dienste auch die Inhalte, die Du veröffentlichst, sowie die Chats, die Du mit anderen Personen führst.'
  },
  { title: '3.6 Weitergabe personenbezogener Daten an Dritte', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn<br/>• dies ist für die Erfüllung vertraglicher Pflichten erforderlich,<br/>• Du hast der Übermittlung zugestimmt oder<br/>• es liegt eine behördliche oder gerichtliche Anordnung vor.'
  },
  {
    title: '',
    position: '3.6.1',
    subtitle: '',
    content:
      'Datenverarbeitung zur Bestellabwicklung<br/>Die von uns erhobenen personenbezogenen Daten werden im Rahmen der Vertragsabwicklung an das mit der Lieferung beauftragte Transportunternehmen weitergegeben, soweit dies zur Lieferung der Ware erforderlich ist. Ihre Zahlungsdaten geben wir im Rahmen der Zahlungsabwicklung an das beauftragte Kreditinstitut weiter, sofern dies für die Zahlungsabwicklung erforderlich ist. Sofern Zahlungsdienstleister eingesetzt werden, informieren wir hierüber nachstehend explizit. Die Rechtsgrundlage für die Weitergabe der Daten ist hierbei Art. 6 Abs. 1 lit. b DSGVO.'
  },
  {
    title: '',
    position: '3.6.2',
    subtitle: '',
    content:
      'Verwendung von Paymentdienstleistern (Zahlungsdienstleister)<br/>Wir verwenden auf unserer Website Komponenten von Stripe (nachfolgend „Stripe“). Stripe ist ein Online-Zahlungsdienstleister, über welchen es uns möglich ist, unseren Kunden verschiedene Zahlarten wie z.B. Kreditkartenzahlung oder Lastschrift anzubieten. Stripe bietet in diesem Zusammenhang Software-Schnittstellen an, um diese Zahlungen in unsre Website zu integrieren.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Sofern Du kostenpflichtige Leistungen von uns in Anspruch nimmst, erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister Stripe, an den wir Deine im Rahmen des Bestellvorgangs mitgeteilten Informationen nebst den Informationen über Deine Bestellung ggf. gemäß Art. 6 Abs. 1 lit. b DSGVO weitergeben.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die Betreibergesellschaft von Stripe hat ihren Hauptsitz in 185 Berry Street, Suite 550, San Francisco, CA 94107, USA.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die Weitergabe Deiner Daten erfolgt ausschließlich zum Zwecke der Zahlungsabwicklung mit dem Zahlungsdienstleister Stripe und nur insoweit, als sie hierfür erforderlich ist.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst dieser Verarbeitung Deiner Daten jederzeit durch eine Nachricht an Stripe widersprechen. Jedoch bleibt Stripe ggf. weiterhin berechtigt, Deine personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Mit der Auswahl dieser Zahlungsoption willigt die betroffene Person in die zur Zahlungsabwicklung erforderliche Übermittlung personenbezogener Daten ein.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Bei den an Stripe übermittelten personenbezogenen Daten handelt es sich in der Regel um Vorname, Nachname, Adresse, E-Mail-Adresse, IP-Adresse, Telefonnummer, Mobiltelefonnummer oder andere Daten sowie finanztechnische Transaktionsdaten, wie Kreditkartennummer oder Kontodaten, die zur Zahlungsabwicklung notwendig sind. Zur Abwicklung des Kaufvertrages notwendig sind auch solche personenbezogenen Daten, die im Zusammenhang mit der jeweiligen Bestellung stehen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die Übermittlung der Daten bezweckt die Zahlungsabwicklung und die Betrugsprävention. Der für die Verarbeitung Verantwortliche wird Stripe personenbezogene Daten insbesondere dann übermitteln, wenn ein berechtigtes Interesse für die Übermittlung gegeben ist. Die zwischen Stripe und dem für die Verarbeitung Verantwortlichen ausgetauschten personenbezogenen Daten werden von Stripe unter Umständen an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die geltenden Datenschutzbestimmungen von Stripe können abgerufen werden unter: https://stripe.com/de/privacy.'
  },
  { title: '3.7 Dauer der Speicherung personenbezogener Daten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen). Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.'
  },
  { title: '3.8 Sicherheit Deiner personenbezogenen Daten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die von Dir erhobenen Daten werden von uns gemäß dem deutschen Datenschutzgesetz und gemäß der DSGVO verarbeitet. Durch Ergreifung aller technischen sowie organisatorischen Sicherheitsmaßnahmen, werden Deine uns zur Verfügung gestellten persönlichen Daten so gesichert, dass sie für den Zugriff unberechtigter Dritter unzugänglich sind. Unsere Datensicherheitsmaßnahmen werden regelmäßig überprüft, bewertet und evaluiert, um diese und immer auf dem neuesten Stand der Technik zu halten und deren Wirksamkeit zu gewährleisten.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Alle Mitarbeiter sind zur Wahrung des Datengeheimnisses und zur Einhaltung der Datenschutzbestimmungen verpflichtet und wurden dementsprechend angewiesen. Bitte nimm zur Kenntnis, dass Websites oder Apps Dritter, die über mit unserem Dienstleistungsangebot verknüpfte Links zugänglich sind, unter Umständen anderen, von dieser Datenschutzerklärung abweichenden Bestimmungen unterliegen.'
  },
  { title: 'Löschung, Schutz und Vertraulichkeit von Daten<br/>', position: '', subtitle: '', content: '' },
  { title: '4.1 Löschung von Daten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Deine Daten nicht mehr für die oben genannten Zwecke oder aus anderen Rechtsgründen benötigt werden, werden sie gelöscht. Verfasste Beiträge des Nutzers im Bereich Condolence oder Chat werden nicht von Cityriza gelöscht, es sei denn, das diese Daten beinhaltende Book wird gelöscht.'
  },
  { title: '4.2 Schutz Deiner Daten', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Der Schutz Deiner personenbezogenen Daten vor unbefugtem Zugriff, einer Veränderung, Offenlegung oder Zerstörung ist uns sehr wichtig und wir tun alles, um dies zu gewährleisten, jedoch versprechen wir, wie alle Technologieunternehmen, nicht, dass Deine persönlichen Informationen immer sicher bleiben werden und Du solltest dies auch nicht erwarten.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Zur Aktualisierung unsere physischen, technischen und organisatorischen Sicherheitsmaßnahmen kontrollieren wir unsere Systeme regelmäßig auf mögliche Schwachstellen und Angriffe und überprüfen auch regelmäßig unsere Methoden zur Erfassung, Speicherung und Verarbeitung von Daten.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wir können Deine Nutzung einiger oder aller unserer Dienste ohne Ankündigung aussetzen, falls wir irgendeine Sicherheitsverletzung vermuten oder entdecken. Falls Du glaubst, dass Dein Konto oder Deine Daten nicht mehr sicher sind, informiere uns bitte unverzüglich unter support@cityriza.com.'
  },
  {
    title: '4.3 Zugriffskontrollen für Mitarbeiter und Wahrung der Vertraulichkeit',
    position: '',
    subtitle: '',
    content: ''
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Cityriza stuft alle Daten als sehr vertraulich ein. Zum Schutz dieser Daten gibt es bei Cityriza Zugriffskontrollen für Mitarbeiter, um diese Daten, z.B. personenbezogene Nutzerdaten, vor unberechtigten Zugriffen zu schützen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Cityriza setzt bei der Durchführung der Arbeiten von zugriffsberechtigten Mitarbeitern nur Mitarbeiter ein, die auf die Vertraulichkeit verpflichtet und zuvor mit den für sie relevanten Bestimmungen zum Datenschutz vertraut gemacht wurden. Die Mitarbeiter, die Zugang zu personenbezogenen Daten haben, dürfen diese Daten ausschließlich entsprechend der Weisung von Cityriza verarbeiten.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Mitarbeiter erhalten nur dann Zugriff auf personenbezogene Daten, sofern sie diese zur Durchführung ihrer Tätigkeit bei Cityriza benötigen und beschränken sich bei der Verarbeitung und Auswertung auf die Berichte, die sie für die Durchführung ihrer Aufgaben benötigen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Kundenservicemitarbeiter und Mitarbeiter des Supportteams dürfen nur nach ausdrücklicher vorheriger Genehmigung des Kunden auf dessen Daten zugreifen, sofern sie hierfür Zugriffsrechte besitzen.'
  },
  { title: '4.4 Betriebssicherheit und Notfallplan', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Cityriza arbeitet mit der Firma DigitalOcean, LLC, 101 Avenue of the Americas 10th Floor New York, NY 10013, USA (nachfolgend „DigitalOcean“) zusammen, in deren Rechenzentren unsere Server betrieben und gewartet werden.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern von DigitalOcean gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über unsere Website generiert werden, handeln. Der Einsatz von DigitalOcean erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'DigitalOcean wird Deine Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen. Rechenzentrum: Frankfurt am Main - Deutschland. DigitalOcean LLC sichert zum Zweck der Auftragsverarbeitung Kunden eine Datenverarbeitungsvereinbarung (Data Processing Agreement) zu, die den Anforderungen der DSGVO entsprechen. Der Datenverarbeitungsvereinbarung von DigitalOcean stimmt der Betreiber ausdrücklich zu.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Aus technischen und rechtlichen Gründen werden in Server-Log-Dateien folgende Daten, die Ihr Browser beim Aufruf der Website an den Server übermittelt: Browsertyp und die verwendete Version, Betriebssystem des Nutzers, IP-Adresse des Nutzers, Datum und Uhrzeit des Zugriffs, Websites, von denen das System des Nutzers auf unsere Internetseite gelangt und Websites, die vom System des Nutzers über unsere Website aufgerufen werden.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Diese Daten werden nach spätestens sieben Tagen gelöscht. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Gemäß unseres Vertrages mit DigitalOcean und deren technischen und Organisatorischen Maßnahmen nach Art. 32 DSGVO, gibt es umfangreiche Notfallpläne zur Datensicherung, um das Risiko einer Dienstunterbrechung aufgrund von Hardwareausfällen oder Natur- und anderen Katastrophen möglichst gering zu halten.'
  },
  { title: 'Erfaßte Informationen bei der Anwendung<br/>', position: '', subtitle: '', content: '' },
  { title: '5.1 Anwendungsinformationen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content: 'Wir erfassen Informationen über Deine Aktivität in unseren Diensten,'
  },
  { title: '', position: '5.1.1', subtitle: '', content: 'z.B., wie Du diese verwendest.' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Für diesen Fall erfassen wir<br/>• Datum und Uhrzeit, zu der Du Dich eingeloggt hast<br/>• Funktionen, die Du verwendet hast<br/>• Suchanfragen<br/>• Klicks<br/>• Seiten, die Dir angezeigt wurden<br/>• verweisende Website-Adressen<br/>• Werbung, die Du angeklickt hast'
  },
  { title: '', position: '5.1.2', subtitle: '', content: 'z.B., wie Du mit anderen Nutzern interagierst.' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Für diesen Fall erfassen wir<br/>• Nutzer, mit denen Du Kontakt aufnimmst und interagierst<br/>• Zeitpunkt und Datum Deiner Interaktionen<br/>• Anzahl der Nachrichten, die Du sendest und erhältst'
  },
  { title: '5.2 Informationen zu Deinem Standort', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Sofern Du uns Deine Zustimmung gibst und abhängig von den Diensten und Geräten, die Du nutzt, erfassen wir Deine genaue Geolokalisierung (Längen- und Breitengrad) mittels unterschiedlicher Verfahren, einschließlich<br/>• GPS<br/>• Bluetooth<br/>• Wi-Fi-Verbindung'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Selbst wenn Du die Dienste nicht nutzt, kann die Ermittlung Deiner Geolokalisierung im Hintergrund erfolgen, sofern die Genehmigung, die Du uns erteilt hast, eine derartige Erfassung ausdrücklich gestattet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content: 'Falls Du es uns nicht genehmigst, Deine Geolokalisierung zu ermitteln, werden wir es nicht tun.'
  },
  { title: '5.3 Kommentarfunktion', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Im Rahmen der Kommentarfunktion auf dieser Website werden neben Deinem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars und der von Dir gewählte Kommentatorenname gespeichert und auf der Website veröffentlicht. Ferner wird Deine IP-Adresse mitprotokolliert und gespeichert. Diese Speicherung der IP-Adresse erfolgt aus Sicherheitsgründen und für den Fall, dass die betroffene Person durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte postet. Deine E-Mailadresse benötigen wir, um mit Dir in Kontakt zu treten, falls ein Dritter Deinen veröffentlichten Inhalt als rechtswidrig beanstanden sollte. Rechtsgrundlagen für die Speicherung Deiner Daten sind die Art. 6 Abs. 1 lit.b und f DSGVO. Wir behalten uns vor, Kommentare zu löschen, wenn sie von Dritten als rechtswidrig beanstandet werden.'
  },
  {
    title:
      '5.4 Sie können der Speicherung und Nutzung Ihrer Daten zu diesem Zweck jederzeit durch eine entsprechende Nachricht an den Verantwortlichen widersprechen.',
    position: '',
    subtitle: '',
    content: ''
  },
  {
    title: '',
    position: '5.4.1',
    subtitle: '',
    content:
      'Anmeldung zu unserem Newsletter<br/>Wenn Du dich zu unserem E-Mail Newsletter anmeldest, übersenden wir Dir regelmäßig Informationen zu unseren Angeboten. Pflichtangabe für die Übersendung des Newsletters ist allein Deine E-Mailadresse. Die Angabe weiterer evtl. Daten ist freiwillig und wird verwendet, um Dich persönlich ansprechen zu können. Für den Versand des Newsletters verwenden wir das sog. Double Opt-in Verfahren. Dies bedeutet, dass wir Dir erst dann einen E-Mail Newsletter übermitteln werden, wenn Du uns ausdrücklich bestätigt hast, dass Du in den Versand von Newslettern einwilligst. Wir schicken Dir dann eine Bestätigungs-E-Mail, mit der Du gebeten wirst durch Anklicken eines entsprechenden Links zu bestätigen, dass Du künftig Newsletter erhalten willst.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Mit der Aktivierung des Bestätigungslinks erteilst Du uns Deine Einwilligung für die Nutzung Deiner personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. a DSGVO. Bei der Anmeldung zum Newsletter speichern wir Deine vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung, um einen möglichen Missbrauch Deiner E-Mail- Adresse zu einem späteren Zeitpunkt nachvollziehen zu können. Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden ausschließlich für Zwecke der werblichen Ansprache im Wege des Newsletters benutzt. Du kannst den Newsletter jederzeit über den dafür vorgesehenen Link im Newsletter oder durch entsprechende Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Deine E-Mailadresse unverzüglich in unserem Newsletter-Verteiler gelöscht, soweit Du nicht ausdrücklich in eine weitere Nutzung Deiner Daten eingewilligt hast oder wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Dich in dieser Erklärung informieren.'
  },
  {
    title: '',
    position: '5.4.2',
    subtitle: '',
    content:
      'Versand des Newsletters an Bestandskunden<br/>Wenn Du uns Deine E-Mailadresse beim Kauf von Produkten zur Verfügung gestellt hast, behalten wir uns vor, Dir regelmäßig Angebote zu ähnlichen Produkten, wie den bereits gekauften, aus unserem Sortiment per E-Mail zuzusenden. Hierfür müssen wir gemäß § 7 Abs. 3 UWG keine gesonderte Einwilligung von Dir einholen. Die Datenverarbeitung erfolgt insoweit allein auf Basis unseres berechtigten Interesses an personalisierter Direktwerbung gemäß Art. 6 Abs. 1 lit. f DSGVO. Hast Du der Nutzung Deiner Mailadresse zu diesem Zweck anfänglich widersprochen, findet ein Mailversand unsererseits nicht statt. Du bist berechtigt, der Nutzung Deiner E-Mailadresse zu dem vorbezeichneten Werbezweck jederzeit mit Wirkung für die Zukunft durch eine Mitteilung an den zu Beginn genannten Verantwortlichen zu widersprechen. Hierfür fallen für Dich lediglich Übermittlungskosten nach den Basistarifen an. Nach Eingang Deines Widerspruchs wird die Nutzung Deiner Mailadresse zu Werbezwecken unverzüglich eingestellt.'
  },
  {
    title: '',
    position: '5.4.3',
    subtitle: '',
    content:
      'Werbung per Briefpost<br/>Auf Grundlage unseres berechtigten Interesses an personalisierter Direktwerbung behalten wir uns vor, Deinen Vor- und Nachnamen, Deine Postanschrift und - soweit wir diese zusätzlichen Angaben im Rahmen der Vertragsbeziehung von Dir erhalten haben - Deinen Titel, akademischen Grad, Dein Geburtsjahr und Deine Berufs-, Branchen- oder Geschäftsbezeichnung gemäß Art. 6 Abs. 1 lit. f DSGVO zu speichern und für die Zusendung von interessanten Angeboten und Informationen zu unseren Produkten per Briefpost zu nutzen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Sie können der Speicherung und Nutzung Ihrer Daten zu diesem Zweck jederzeit durch eine entsprechende Nachricht an den Verantwortlichen widersprechen.'
  },
  { title: 'Analyse-Tools, Social Plug-Ins, Marketing und Werbung<br/>', position: '', subtitle: '', content: '' },
  { title: '6.1 Webanalysedienste', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Einsatz von Google Analytics<br/>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Deinem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Dich ermöglichen. Die durch den Cookie erzeugten Informationen über Deine Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Es wird darauf hingewiesen, dass diese Website Google Analytics mit der Erweiterung „_anonymizeIp()“ verwendet und daher IP-Adressen nur gekürzt weiterverarbeitet werden, um eine direkte Personenbeziehbarkeit auszuschließen. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Deine IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. In diesen Ausnahmefällen erfolgt diese Verarbeitung gemäß Art. 6 Abs. 1 lit. f DSGVO auf Grundlage unseres berechtigten Interesses an der statistischen Analyse des Nutzerverhaltens zu Optimierungs- und Marketingzwecken. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Deine Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die im Rahmen von Google Analytics von Deinem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Du kannst die Speicherung der Cookies durch eine entsprechende Einstellung Deiner Browser-Software verhindern; wir weisen Dich jedoch darauf hin, dass Du in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich wirst nutzen können. Du kannst darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Deiner IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Du das unter dem folgenden Link verfügbare Browser- Plugin herunterlädst und installierst: tools.google.com/dlpage/gaoptout'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Alternativ zum Browser-Plugin oder innerhalb von Browsern auf mobilen Geräten klicken Sie bitte auf den folgenden Link, um ein Opt-Out-Cookie zu setzen, der die Erfassung durch Google Analytics innerhalb dieser Website zukünftig verhindert (dieses Opt-Out-Cookie funktioniert nur in diesem Browser und nur für diese Domain, löschen Sie Ihre Cookies in diesem Browser, müssen Sie diesen Link erneut klicken): <a href="#" onClick="gaOptout(); return false;">Google Analytics deaktivieren</a>'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245.'
  },
  { title: '6.2 Online-Marketing', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Einsatz von Google AdWords Conversion-Tracking<br/>Diese Website nutzt das Online-Werbeprogramm "Google AdWords" und im Rahmen von Google AdWords das Conversion-Tracking der Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Wir nutzen das Angebot von Google Adwords, um mit Hilfe von Werbemitteln (sogenannten Google Adwords) auf externen Webseiten auf unsere attraktiven Angebote aufmerksam zu machen. Wir können in Relation zu den Daten der Werbekampagnen ermitteln, wie erfolgreich die einzelnen Werbemaßnahmen sind. Wir verfolgen damit das Interesse, Dir Werbung anzuzeigen, die für Dich von Interesse ist, unsere Website für Dich interessanter zu gestalten und eine faire Berechnung von Werbe-Kosten zu erreichen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete AdWords-Anzeige klickt. Bei Cookies handelt es sich um kleine Textdateien, die auf Deinem Computersystem abgelegt werden. Diese Cookies verlieren in der Regel nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist noch nicht abgelaufen, können Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen. Wenn Du nicht am Tracking teilnehmen möchtest, kannst Du diese Nutzung blockieren, indem Du das Cookie des Google Conversion-Trackings über Deinen Internet-Browser unter Nutzereinstellungen deaktivierst. Du wirst sodann nicht in die Conversion-Tracking Statistiken aufgenommen. Wir setzen Google Adwords auf Grund unseres berechtigten Interesses an einer zielgerichteten Werbung gem. Art. 6 Abs. 1 lit. f DSGVO ein.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Unter der nachstehenden Internetadresse erhältst Du weitere Informationen über die Datenschutzbestimmungen von Google: http://www.google.de/policies/privacy/'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst Cookies für Anzeigenvorgaben dauerhaft deaktivieren, indem Du diese durch eine entsprechende Einstellung Deiner Browser-Software verhinderst oder das unter folgendem Link verfügbare Browser-Plug-in herunterlädst und installierst:'
  },
  { title: '', position: '', subtitle: '', content: 'http://www.google.com/settings/ads/plugin' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Bitte beachte, dass bestimmte Funktionen dieser Website möglicherweise nicht oder nur eingeschränkt genutzt werden können, wenn Du die Verwendung von Cookies deaktiviert hast.'
  },
  { title: '6.3 Retargeting / Remarketing / Empfehlungswerbung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '6.3.1',
    subtitle: '',
    content:
      'Google AdWords Remarketing<br/>Unsere Website nutzt die Funktionen von Google AdWords Remarketing, hiermit werben wir für diese Website in den Google-Suchergebnissen, sowie auf Dritt-Websites. Anbieter ist die Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google”). Zu diesem Zweck setzt Google ein Cookie im Browser Deines Endgeräts, welches automatisch mittels einer pseudonymen Cookie-ID und auf Grundlage der von Dir besuchten Seiten eine interessensbasierte Werbung ermöglicht. Die Verarbeitung erfolgt auf Basis unseres berechtigten Interesses an der optimalen Vermarktung unserer Website gemäß Art. 6 Abs. 1 lit. f DSGVO.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Eine darüber hinausgehende Datenverarbeitung findet nur statt, sofern Du gegenüber Google zugestimmt hast, dass Dein Internet-- und App-Browserverlauf von Google mit Deinem Google-Konto verknüpft wird und Informationen aus Deinem Google-Konto zum Personalisieren von Anzeigen verwendet werden, die Du im Web betrachtest. Bist Du in diesem Fall während des Seitenbesuchs unserer Webseite bei Google eingeloggt, verwendet Google Deine Daten zusammen mit Google Analytics-Daten, um Zielgruppenlisten für geräteübergreifendes Remarketing zu erstellen und zu definieren. Dazu werden Deine personenbezogenen Daten von Google vorübergehend mit Google Analytics-Daten verknüpft, um Zielgruppen zu bilden.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst die Setzung von Cookies für Anzeigenvorgaben dauerhaft deaktivieren, indem Du das unter folgendem Link verfügbare Browser-Plug-in herunterlädst und installierst: https://www.google.com/settings/ads/onweb/'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Alternativ kannst Du dich bei der Digital Advertising Alliance unter der Internetadresse www.aboutads.info über das Setzen von Cookies informieren und Einstellungen hierzu vornehmen. Schließlich kannst Du Deinen Browser so einstellen, dass Du über das Setzen von Cookies informiert wirst und einzeln über deren Annahme entscheidest oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließt. Bei der Nichtannahme von Cookies kann die Funktionalität unserer Website eingeschränkt sein.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Weitergehende Informationen und die Datenschutzbestimmungen bezüglich Werbung und Google kannst Du hier einsehen: http://www.google.com/policies/technologies/ads/.'
  },
  { title: '6.4 Tools und Sonstiges', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '6.4.1',
    subtitle: '',
    content:
      'Google reCAPTCHA<br/>Auf dieser Website verwenden wir auch die reCAPTCHA Funktion von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Diese Funktion dient vor allem zur Unterscheidung, ob eine Eingabe durch eine natürliche Person erfolgt oder missbräuchlich durch maschinelle und automatisierte Verarbeitung erfolgt. Der Dienst inkludiert den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an Google und erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Feststellung der individuellen Willensgetragenheit von Handlungen im Internet und der Vermeidung von Missbrauch und Spam.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Weiterführende Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung von Google kannst Du einsehen unter: https://www.google.com/intl/de/policies/privacy/'
  },
  {
    title: '',
    position: '6.4.2',
    subtitle: '',
    content:
      'Google Maps<br/>Auf unserer Website verwenden wir Google Maps (API) von Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google”). Google Maps ist ein Webdienst zur Darstellung von interaktiven (Land-)Karten, um geographische Informationen visuell darzustellen. Über die Nutzung dieses Dienstes werden Dir von uns oder unseren Nutzern freiwillig in Ihren Nutzer-Profilen oder Nutzer-Kommentaren angegebene Standorte angezeigt und eine etwaige Anfahrt oder interessehalber Standort-Orientierung erleichtert.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von Google Maps eingebunden ist, werden Informationen über Deine Nutzung unserer Website (wie z.B. Deine IP-Adresse) an Server von Google in den USA übertragen und dort gespeichert. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Du eingeloggt bist, oder ob kein Nutzerkonto besteht. Wenn Du bei Google eingeloggt bist, werden Deine Daten direkt Deinem Konto zugeordnet. Wenn Du die Zuordnung mit Deinem Profil bei Google nicht wünschst, mußt Du dich vor Aktivierung des Buttons ausloggen. Google speichert Deine Daten (selbst für nicht eingeloggte Nutzer) als Nutzungsprofile und wertet diese aus. Eine solche Auswertung erfolgt insbesondere gemäß Art. 6 Abs. 1 lit.f DSGVO auf Basis der berechtigten Interessen von Google an der Einblendung personalisierter Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung seiner Website. Dir steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Du dich zur Ausübung dessen an YouTube richten mußt.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du mit der künftigen Übermittlung Deiner Daten an Google im Rahmen der Nutzung von Google Maps nicht einverstanden sind, besteht auch die Möglichkeit, den Webdienst von Google Maps vollständig zu deaktivieren, indem Du die Anwendung JavaScript in Deinem Browser ausschaltest. Google Maps und damit auch die Kartenanzeige auf dieser Internetseite kann dann nicht genutzt werden.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die Nutzungsbedingungen von Google kannst Du unter http://www.google.de/intl/de/policies/terms/regional.html einsehen, die zusätzlichen Nutzungsbedingungen für Google Maps findest Du unter https://www.google.com/intl/de_US/help/terms_maps.html'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Ausführliche Informationen zum Datenschutz im Zusammenhang mit der Verwendung von Google Maps findest Du auf der Internetseite von Google ("Google Privacy Policy"): http://www.google.de/intl/de/policies/privacy/'
  },
  {
    title: '',
    position: '6.4.3',
    subtitle: '',
    content:
      'Google Web Fonts<br/>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts die von der Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google") bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in Deinen Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Zu diesem Zweck muss der von Dir verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Deine IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Wenn Dein Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Deinem Computer genutzt.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Google LLC mit Sitz in den USA ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleistet.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Weitere Informationen zu Google Web Fonts findest Du unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/.'
  },
  { title: '6.5 Einbindung von Social Plug-Ins in die Web-Seite', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'In diese Webseite sind Plug-Ins verschiedener sozialer Netzwerke implementiert (der Facebook „Like-Button“; „Google+“-Button; „Twitter-Button“). Wenn Du unsere Web-Seite nutzt, erfolgt eine Verbindung zwischen dem von Dir verwendeten Browser und dem Betreiber des jeweiligen sozialen Netzwerks. Bist Du zu diesem Zeitpunkt als Nutzer des sozialen Netzwerks angemeldet oder meldest Du Dich später an, so kannst Du über das Anklicken dieser Plug-Ins eine Verlinkung unserer Web-Seiten-Inhalte mit Deinem Profil bei dem jeweiligen sozialen Netzwerk bewirken. Dadurch kann der Betreiber des sozialen Netzwerks den Besuch unserer Web-Seite dem Konto des angemeldeten Nutzers zuordnen. Der Betreiber des sozialen Netzwerks platziert in diesem Fall zudem einen Cookie auf Deinem Rechner. Die anbieterspezifischen Besonderheiten werden bei den jeweiligen Betreibern der sozialen Netzwerke dargestellt.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Welche Daten die jeweiligen Betreiber der sozialen Netzwerke im Einzelnen erheben, ist uns nicht bekannt. Wir verweisen in diesem Zusammenhang auf die diesbezüglichen Datenschutzerklärungen der Betreiber der sozialen Netzwerke:'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Facebook (Datenschutzerklärung): https://de-de.facebook.com/policy.php<br/>Facebook (Plug-Ins): http://developers.facebook.com/docs/plugins/<br/>Google (Datenschutzerklärung): www.google.de/intl/de/policies/privacy/<br/>Google (Plug-Ins): www.google.com/intl/de/+/policy/+1button.html<br/>Twitter (Datenschutzerklärung): twitter.com/privacy'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Welche Social Plug-Ins Du wann verwendet hast, erfahren wir nicht. Wir erhalten lediglich eine zusammengefasste, nicht personenbezogene Statistik zur Verwendung der Social Plug-Ins in Bezug auf unsere Seiten.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wir verwenden die uns zugänglichen Daten nur für den Zweck, Dir den jeweiligen Dienst anzubieten. Wenn wir Deine Daten darüber hinaus verwenden wollen, tun wir dies nur insoweit, wie das Gesetz dies gestattet oder Sie Ihre Zustimmung hierzu erteilt haben.'
  },
  {
    title: '',
    position: '6.5.1',
    subtitle: '',
    content:
      'Verwendung von Facebook Social Plugins<br/>Unser Internetauftritt verwendet Social Plugins (“Plugins”) des sozialen Netzwerkes facebook.com, welches von der Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA betrieben wird (“Facebook”). Die Plugins sind an einem der Facebook Logos erkennbar (weißes „f“ auf blauer Kachel oder graues „f“ auf weißer Kachel oder als Textlink) oder sind mit dem Zusatz “Facebook Social Plugin” gekennzeichnet. Die Liste und das Aussehen der Facebook Social Plugins kann hier eingesehen werden: https://developers.facebook.com/docs/plugins/'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du eine Webseite unseres Internetauftritts aufrufst, die ein solches Plugin enthält, baut Dein Browser eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an Deinen Browser übermittelt und von diesem in die Webseite eingebunden. Wir haben daher keinen Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informieren Dich daher entsprechend unserem Kenntnisstand:'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Durch die Einbindung der Plugins erhält Facebook die Information, dass Du die entsprechende Seite unseres Internetauftritts aufgerufen hast. Bist Du bei Facebook eingeloggt, kann Facebook den Besuch Deinem Facebook-Konto zuordnen. Wenn Du mit den Plugins interagierst, zum Beispiel den Like Button betätigst oder einen Kommentar abgibst, wird die entsprechende Information von Deinem Browser direkt an Facebook übermittelt und dort gespeichert. Falls Du kein Mitglied von Facebook bist, besteht trotzdem die Möglichkeit, dass Facebook Deine IP-Adresse in Erfahrung bringt und speichert.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Deine diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Deiner Privatsphäre entnimmst Du bitte den Datenschutzhinweisen von Facebook: https://www.facebook.com/about/privacy/.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du Facebookmitglied bist und nicht möchtest, dass Facebook über unseren Internetauftritt Daten über Dich sammelt und mit Deinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, musst Du Dich vor Deinem Besuch unseres Internetauftritts bei Facebook ausloggen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Ebenfalls ist es möglich Facebook-Social-Plugins mit Add-ons für Deinen Browser zu blocken, zum Beispiel mit dem “Facebook Blocker”.'
  },
  {
    title: '',
    position: '6.5.2',
    subtitle: '',
    content:
      'Google +1 Schaltfläche<br/>Unser Internetauftritt verwendet die “+1?-Schaltfläche des sozialen Netzwerkes Google Plus, welches von der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States betrieben wird (“Google”). Der Button ist an dem Zeichen “+1? auf weißem Hintergrund erkennbar.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du eine Webseite unseres Internetauftritts aufrufst, die eine solche Schaltfläche enthält, baut Dein Browser eine direkte Verbindung mit den Servern von Google auf. Der Inhalt der “+1?-Schaltfläche wird von Google direkt an Deinen Browser übermittelt und von diesem in die Webseite eingebunden. Wir haben daher keinen Einfluss auf den Umfang der Daten, die Google mit der Schaltfläche erhebt, gehen jedoch davon aus, dass Ihre IP-Adresse mit erfasst wird.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      "Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Google sowie Deine diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Deiner Privatsphäre entnimmst Du bitte Google's Datenschutzhinweisen zu der “+1?-Schaltfläche: https://developers.google.com/+/web/buttons-policy"
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du Google Plus-Mitglied bist und nicht möchtest, dass Google über unseren Internetauftritt Daten über Dich sammelt und mit Deinen bei Google gespeicherten Mitgliedsdaten verknüpft, musst Du Dich vor Deinem Besuch unseres Internetauftritts bei Google Plus ausloggen.'
  },
  {
    title: '',
    position: '6.5.3',
    subtitle: '',
    content:
      'Verwendung der Twitter-Schaltflächen<br/>Dieses Angebot nutzt die Schaltflächen des Dienstes Twitter. Diese Schaltflächen werden angeboten durch die Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA. Sie sind an Begriffen wie “Twitter” oder “Folge”, verbunden mit einem stillisierten blauen Vogel erkennbar. Mit Hilfe der Schaltflächen ist es möglich einen Beitrag oder Seite dieses Angebotes bei Twitter zu teilen oder dem Anbieter bei Twitter zu folgen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn Du unsere Webseite aufrufst, die einen solchen Button enthält, baut der Browser eine direkte Verbindung mit den Servern von Twitter auf. Der Inhalt des Twitter-Schaltflächen wird von Twitter direkt an den Browser des Nutzers übermittelt. Wir haben daher keinen Einfluss auf den Umfang der Daten, die Twitter mit Hilfe dieses Plugins erhebt und informieren Dich entsprechend unserem Kenntnisstand. Nach diesem wird lediglich die IP-Adresse des Nutzers die URL der jeweiligen Webseite beim Bezug des Buttons mit übermittelt, aber nicht für andere Zwecke, als die Darstellung des Buttons, genutzt.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Weitere Informationen hierzu finden sich in der Datenschutzerklärung von Twitter unter https://twitter.com/privacy.'
  },
  { title: 'Kontaktaufnahme und Rechte<br/>', position: '', subtitle: '', content: '' },
  { title: '7.1 Kontaktaufnahme', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Deines Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Deines Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Deine Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Deine Daten werden nach abschließender Bearbeitung Deiner Anfrage gelöscht, dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.'
  },
  { title: '7.2 Kontaktaufnahme zur Bewertungserinnerung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Eigene Bewertungserinnerung (kein Versand durch ein Kundenbewertungssystem)<br/>Wir verwenden Deine E-Mailadresse zur einmaligen Erinnerung an die Abgabe einer Bewertung Deiner Bestellung für das von uns verwendete Bewertungssystem, sofern Du uns hierzu während oder nach Ihrer Bestellung Deine ausdrückliche Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilt hast.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst Deine Einwilligung jederzeit durch eine Nachricht an den für die Datenverarbeitung Verantwortlichen widerrufen.'
  },
  { title: '7.3 Rechte des Betroffenen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Das geltende Datenschutzrecht gewährt Dir gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Deiner personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Dich nachstehend informieren:'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Auskunftsrecht gemäß Art. 15 DSGVO: Du hast insbesondere ein Recht auf Auskunft über Deine von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen Deine Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft Deiner Daten, wenn diese nicht durch uns bei Dir erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik und die Dich betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Dein Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Deiner Daten in Drittländer bestehen;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Berichtigung gemäß Art. 16 DSGVO: Du hast ein Recht auf unverzügliche Berichtigung Dich betreffender unrichtiger Daten und/oder Vervollständigung Deiner bei uns gespeicherten unvollständigen Daten;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Löschung gemäß Art. 17 DSGVO: Du hast das Recht, die Löschung Deiner personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO zu verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO: Du hast das Recht, die Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu verlangen, solange die von Dir bestrittene Richtigkeit Deiner Daten überprüft wird, wenn Du eine Löschung Deiner Daten wegen unzulässiger Datenverarbeitung ablehnst und stattdessen die Einschränkung der Verarbeitung Deiner Daten verlangst, wenn Du Ihre Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigst, nachdem wir diese Daten nach Zweckerreichung nicht mehr benötigen oder wenn Du Widerspruch aus Gründen Deiner besonderen Situation eingelegt hast, solange noch nicht feststeht, ob unsere berechtigten Gründe überwiegen;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Unterrichtung gemäß Art. 19 DSGVO: Hast Du das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Dich betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Dir steht das Recht zu, über diese Empfänger unterrichtet zu werden.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Du hast das Recht, Deine personenbezogenen Daten, die Du uns bereitgestellt hast, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Du hast das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu widerrufen. Im des Widerrufs werden wir die betroffenen Daten unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt werden kann. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt;'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      '• Recht auf Beschwerde gemäß Art. 77 DSGVO: Du hast, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Deines Aufenthaltsorts, Deines Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Du der Ansicht sind, dass die Verarbeitung der Dich betreffenden personenbezogenen Daten gegen die DSGVO verstößt.'
  },
  { title: '', position: '7.3.1', subtitle: '', content: 'Widerspruchsrecht' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Wenn wir im Rahmen einer Interessenabwägung Deine personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, hast Du das jederzeitige Recht, aus Gründen, die sich aus Deiner besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Machst Du von Deinem Widerspruchsrecht gebrauch, beenden wir die Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die Deine Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Werden Deine personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, hast Du das Recht, jederzeit Widerspruch gegen die Verarbeitung Dich betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Du kannst den Widerspruch wie oben beschrieben ausüben.'
  },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Machst Du von Deinem Widerspruchsrecht gebrauch, beenden wir die Verarbeitung der betroffenen Daten zu Direktwerbezwecken.'
  },
  { title: '7.4 Deine Rechte und Kontaktaufnahme bei Datenschutzfragen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Du kannst jederzeit Auskunft über die von Dir bei uns gespeicherten Daten erhalten. Du hast das Recht auf Berichtigung, Löschung und Sperrung (unrichtiger) Daten. Deine Kontaktdaten kannst Du im Rahmen des mit Deinen Registrierungsdaten zugänglichen Benutzerprofils („Mein Profil“) berichtigen. Der Löschung von Daten können allerdings vertragliche und/oder gesetzliche Vorgaben insbesondere zur Durchführung der Buchhaltung und Abrechnung entgegenstehen. Bei Fragen zu unseren Datenschutzgrundsätzen kontaktiere uns bitte unter: support@Cityriza.com.'
  }
]);

export default privacys;
