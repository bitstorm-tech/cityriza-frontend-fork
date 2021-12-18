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
  },
  {
    title: '',
    position: '1.2.1',
    subtitle: '',
    content:
      'Registrierte Nutzer haben die Möglichkeit, lesenden Zugriff auf Cityriza zu nehmen, sowie bestimmte technische Funktionen zu nutzen. '
  },
  {
    title: '',
    position: '1.2.2',
    subtitle: '',
    content:
      'Gäste sind Nutzer, die nur lesenden Zugriff auf die Teile von Cityriza haben, die keiner Registrierung bedürfen.'
  },
  {
    title: '',
    position: '1.2.3',
    subtitle: '',
    content:
      'Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.'
  },
  {
    title: '',
    position: '1.2.4',
    subtitle: '',
    content:
      'Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt. '
  },
  {
    title: '',
    position: '1.2.5',
    subtitle: '',
    content:
      'Käufer sind registrierte Nutzer, die als Unternehmer oder Verbraucher über Cityriza Waren, Dienstleistungen und/oder digitale Inhalte erwerben.'
  },
  { title: '2. Nutzungsberechtigung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '2.1',
    subtitle: '',
    content:
      'Nutzungsberechtigt sind natürliche Personen, juristische Personen und Personengesellschaften. Nicht unbeschränkt geschäftsfähige natürliche Personen (insbesondere Minderjährige) dürfen Cityriza nur mit der Zustimmung ihres gesetzlichen Vertreters nutzen. Der Betreiber behält sich vor, die Nutzung von Cityriza in diesem Fall von der Vorlage einer schriftlichen Zustimmungserklärung des gesetzlichen Vertreters abhängig zu machen. Der Nutzer bestätigt mit der Abgabe seiner Einverständniserklärung zu diesen Nutzungsbedingungen, dass er beim Abschluss des Nutzungsvertrages diese Voraussetzung erfüllt.'
  },
  {
    title: '',
    position: '2.2',
    subtitle: '',
    content:
      'Die Registrierung einer juristischen Person darf nur von einer vertretungsberechtigten natürlichen Person vorgenommen werden, die namentlich genannt werden muss.'
  },
  {
    title: '',
    position: '2.3',
    subtitle: '',
    content:
      'Jeder Nutzer darf sich nur einmal registrieren. Seine Berechtigung zur Nutzung von Cityriza gilt nur für ihn persönlich und ist nicht übertragbar.'
  },
  { title: '3. Registrierung, Vertragsschluss', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '3.1',
    subtitle: '',
    content:
      'Mit der erfolgreichen Registrierung oder im Rahmen des lesenden Zugriffs als Gast kommt ein Nutzungsvertrag zwischen dem Betreiber und dem Nutzer über die Nutzung von Cityriza unter Geltung dieser Nutzungsbedingungen zustande.'
  },
  {
    title: '',
    position: '3.2',
    subtitle: '',
    content:
      'Nach Eingabe seiner Daten in das dafür vorgesehene Online-Formular kann sich der Nutzer durch Anklicken des den Registrierungsprozess abschließenden Buttons anmelden. Das Absenden der Registrierungsdaten stellt das Angebot des Nutzers auf Abschluss des Nutzungsvertrages dar, das der Betreiber annehmen kann, aber nicht annehmen muss. Der Betreiber kann das Angebot des Nutzers innerhalb von fünf Tagen nach Zugang des Antrags durch eine elektronisch (E-Mail) übermittelte Auftragsbestätigung oder durch Freischaltung des Nutzerkontos annehmen. Nimmt der Betreiber das Vertragsangebot des Nutzers nicht innerhalb der vorgenannten Frist an, so gilt dies als Ablehnung des Angebots.'
  },
  {
    title: '',
    position: '3.3',
    subtitle: '',
    content:
      'Bei registrierten Nutzern wird der Vertragstext vom Betreiber gespeichert und kann vom Nutzer über sein passwortgeschütztes Benutzerkonto unter Angabe der entsprechenden Login-Daten kostenlos abgerufen werden. Bei nicht registrierten Nutzern wird der Vertragstext nicht gespeichert und kann von den Nutzern nachträglich nicht mehr abgerufen werden. '
  },
  {
    title: '',
    position: '3.4',
    subtitle: '',
    content:
      'Vor Abgabe seiner Vertragserklärung kann der Nutzer seine Eingaben laufend über die üblichen Tastatur- und Mausfunktionen korrigieren.'
  },
  {
    title: '',
    position: '3.5',
    subtitle: '',
    content: 'Für den Vertragsschluss steht ausschließlich die deutsche Sprache zur Verfügung.'
  },
  {
    title: '',
    position: '3.6',
    subtitle: '',
    content:
      'Die E-Mail-Adresse dient der Identifizierung und der persönlichen Kennzeichnung des Nutzers. Der Nutzer hat sicherzustellen, dass die von ihm bei der Online-Registrierung angegebene E-Mail- Adresse zutreffend ist, so dass unter dieser Adresse die vom Betreiber versandten E-Mails empfangen werden können. Insbesondere hat der Nutzer bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Betreiber oder von diesem mit der Abwicklung beauftragten Dritten versandten Mails zugestellt werden können.'
  },
  {
    title: '',
    position: '3.7',
    subtitle: '',
    content:
      'Die im Rahmen der Registrierung abgefragten Daten sind vom Nutzer vollständig und korrekt anzugeben. Der Nutzer ist verpflichtet, diese Daten (auch E-Mail-Adressen) stets auf dem aktuellen Stand zu halten. Die übermittelten Daten werden vom Betreiber grundsätzlich nicht auf ihre Richtigkeit und Vollständigkeit überprüft.'
  },
  { title: 'Leistungen <br/>', position: '', subtitle: '', content: '' },
  { title: '4. Art und Umfang der Leistung des Betreibers', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '4.1',
    subtitle: '',
    content:
      'Der Betreiber stellt mit Cityriza ein digitales System zur Verfügung, in dem der Nutzer mittels der vom Betreiber zur Verfügung gestellten Anwendungssoftware persönliche digitale Inhalte (Texte, Bilder und Videos), aber auch Angebote zum Verkauf von Waren, Dienstleistungen und/oder digitalen Inhalten einstellen und/oder abrufen, sowie mit anderen Nutzern des Portals in Kontakt treten kann.'
  },
  {
    title: '',
    position: '4.1.1',
    subtitle: '',
    content:
      'Registrierte Nutzer haben ferner die Möglichkeit, über das von Cityriza bereitgestellte Online- Portal mit anderen registrierten Nutzern in Kontakt zu treten. Hierzu bietet Cityriza dem Nutzer Zugriff auf seine zentrale Datenbank, welche Profile und Informationen über andere Nutzer enthält und ermöglicht so das Suchen, Finden und Kennenlernen der Nutzer untereinander.'
  },
  {
    title: '',
    position: '4.2',
    subtitle: '',
    content:
      'Verträge über die auf Cityriza dargestellten Produkte bzw. Inhalte können zwischen den Nutzern nur von ihnen selbst abgeschlossen werden. Der Betreiber wird selbst nicht Vertragspartner der zwischen den Nutzern geschlossenen Verträge. Die Kontaktaufnahme der Nutzer untereinander erfolgt hierzu eigenständig über die von den Nutzern angegebenen Kontaktmöglichkeiten.'
  },
  {
    title: '',
    position: '4.3',
    subtitle: '',
    content:
      'Zur Nutzung von Cityriza ermöglicht der Betreiber dem Nutzer den Zugang zu seiner Website und stellt ihm eine geeignete Software zur Verfügung, die auf dem Server des Betreibers verbleibt. Der Funktionsumfang und die technischen Spezifikationen der Software werden in der jeweiligen Leistungsbeschreibung auf der Website des Betreibers näher beschrieben. Vom Betreiber nicht geschuldet ist die Herstellung und Aufrechterhaltung der Datenverbindung zwischen dem IT-System des Nutzers und dem Server des Betreibers.'
  },
  {
    title: '',
    position: '4.4',
    subtitle: '',
    content:
      'Cityriza wird unter dem Vorbehalt der Verfügbarkeit angeboten. Eine Verfügbarkeit zu 100 Prozent ist technisch nicht zu realisieren und kann deshalb dem Nutzer vom Betreiber nicht gewährleistet werden. Der Betreiber bemüht sich jedoch, den Dienst möglichst konstant verfügbar zu halten. Insbesondere Wartungs-, Sicherheits- oder Kapazitätsbelange sowie Ereignisse, die nicht im Machtbereich des Betreibers stehen (Störungen von öffentlichen Kommunikationsnetzen, Stromausfälle etc.), können zu Störungen oder zur vorübergehenden Stilllegung des Dienstes führen. Der Betreiber wird die Wartungsarbeiten, soweit dies möglich ist, in nutzungsarmen Zeiten durchführen.'
  },
  {
    title: '',
    position: '4.5',
    subtitle: '',
    content:
      'Die Software wird in unregelmäßigen Abständen vom Betreiber aktualisiert. Der Nutzer erhält dementsprechend nur ein Nutzungsrecht an der Software in der jeweils aktuellen Fassung. Der Nutzer hat dagegen keinen Anspruch auf Herbeiführung eines bestimmten Zustandes der Software.'
  },
  { title: '5. Leistungsänderungen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '5.1',
    subtitle: '',
    content:
      'Der Betreiber behält sich vor, die angebotenen Leistungen zu ändern oder abweichende Leistungen anzubieten, es sei denn, dies ist für den Nutzer nicht zumutbar.'
  },
  {
    title: '',
    position: '5.2',
    subtitle: '',
    content:
      'Der Betreiber behält sich darüber hinaus vor, die angebotenen Leistungen zu ändern oder abweichende Leistungen anzubieten, * soweit er hierzu aufgrund einer Änderung der Rechtslage verpflichtet ist; * soweit er damit einem gegen sich gerichteten Gerichtsurteil oder einer Behördenentscheidung nachkommt; * soweit die jeweilige Änderung notwendig ist, um bestehende Sicherheitslücken zu schließen; * wenn die Änderung lediglich vorteilhaft für den Nutzer ist; oder * wenn die Änderung rein technischer oder prozessualer Natur ohne wesentliche Auswirkungen für den Nutzer ist.'
  },
  {
    title: '',
    position: '5.3',
    subtitle: '',
    content:
      'Änderungen mit lediglich unwesentlichem Einfluss auf die Funktionen von Cityriza stellen keine Leistungsänderungen im Sinne dieser Ziffer dar. Dies gilt insbesondere für Änderungen rein graphischer Art und die bloße Änderung der Anordnung von Funktionen.'
  },
  { title: 'Pflichten und Rechte <br/>', position: '', subtitle: '', content: '' },
  { title: '6. Pflichten des Nutzers, Verantwortlichkeit für Inhalte', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '6.1',
    subtitle: '',
    content:
      'Jeder Nutzer ist für den Inhalt der Informationen, die er auf Cityriza einstellt, allein verantwortlich, insbesondere für deren Wahrheitsgehalt und rechtliche Unbedenklichkeit. Der Nutzer versichert, dass die von ihm angegebenen Daten der Wahrheit entsprechen. Der Nutzer trägt dafür Sorge, dass die von ihm eingestellten Inhalte nicht gegen diese Nutzungsbedingungen oder gegen geltendes Recht verstoßen. Verboten ist insbesondere die Veröffentlichung * urheberrechtlich geschützter Inhalte, wenn keine Berechtigung zur Nutzung vorliegt (z.B. Fotos, zu deren Veröffentlichung im Internet der Fotograf und/oder eine abgebildete Person nicht eingewilligt hat); * falscher Tatsachenbehauptungen; * von Beiträgen, die darauf abzielen, andere Nutzer persönlich anzugreifen oder zu diffamieren; * rassistischer, fremdenfeindlicher, diskriminierender oder beleidigender Inhalte; * Jugend gefährdender Inhalte; * Gewalt verherrlichender Inhalte; * von Links auf Seiten, die nicht den gesetzlichen Bestimmungen oder diesen Nutzungsbedingungen entsprechen.'
  },
  {
    title: '',
    position: '6.2',
    subtitle: '',
    content:
      'Die auf Cityriza eingestellten Inhalte sind ausschließlich dem jeweiligen Nutzer zuzuordnen und geben nicht die Ansichten des Betreibers wieder. Eine Gewähr für die Richtigkeit der Inhalte übernimmt der Betreiber nicht. Jeder Nutzer ist selbst dafür verantwortlich, den Wahrheitsgehalt von Inhalten kritisch zu prüfen.'
  },
  {
    title: '',
    position: '6.3',
    subtitle: '',
    content:
      'Nutzer haften grundsätzlich für alle Aktivitäten, die unter Verwendung ihres Zugangs vorgenommen werden, soweit sie dies zu vertreten haben.'
  },
  {
    title: '',
    position: '6.4',
    subtitle: '',
    content:
      'Der Nutzer ist verpflichtet, Cityriza nicht in einer Art und Weise zu nutzen, die die Verfügbarkeit des Portals nachteilig beeinflusst (z.B. Upload großer Dateien, Spam). Cityriza behält sich vor, die Datenmenge für Uploads zu beschränken, um die Verfügbarkeit des Portals zu gewährleisten. Auf eine Beschränkung von Daten-Uploads wird Cityriza ggf. im Rahmen der jeweiligen Leistungsbeschreibung hinweisen.'
  },
  {
    title: '',
    position: '6.5',
    subtitle: '',
    content:
      'Der Nutzer erklärt und übernimmt die Verantwortung dafür, dass er das Recht besitzt, die in seinen Einträgen verwendeten Inhalte zu nutzen. Er trägt insbesondere dafür Sorge, dass durch seine Einträge keine Rechte Dritter verletzt werden, insbesondere Urheber-, Marken- und Persönlichkeitsrechte sowie Rechte wettbewerbsrechtlicher Natur.'
  },
  {
    title: '',
    position: '6.6',
    subtitle: '',
    content:
      'Für die Geheimhaltung der Zugangsdaten ist der Nutzer verantwortlich. Er hat dafür Sorge zu tragen, dass sie Dritten nicht zugänglich sind. Der Nutzer hat den Betreiber umgehend zu informieren, wenn es Anhaltspunkte dafür gibt, dass sein Zugang von Dritten genutzt wird oder wurde.'
  },
  {
    title: '',
    position: '6.7',
    subtitle: '',
    content:
      'Der Betreiber weist ausdrücklich darauf hin, dass Unternehmer beim Abschluss von entgeltlichen Verträgen mit Verbrauchern im elektronischen Geschäftsverkehr besondere Informationspflichten, wie etwa die Pflicht zur Information über ein bestehendes Widerrufsrecht, zu beachten haben. Für die Einhaltung dieser Informationspflichten ist der Nutzer selbst verantwortlich. Der Betreiber wird den Nutzer insoweit weder beraten noch wird er ihm entsprechend vorformulierte Texte zur Verfügung stellen. Der Betreiber empfiehlt dem Nutzer bei Bedarf eine individuelle rechtliche Beratung in Anspruch zu nehmen.'
  },
  { title: '7. Rechte des Betreibers', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '7.1',
    subtitle: '',
    content:
      'Verstößt der Nutzer gegen gesetzliche Bestimmungen oder gegen diese Nutzungsbedingungen oder liegen dem Betreiber konkrete Anhaltspunkte hierfür vor, ist der Betreiber berechtigt ohne Vorankündigung und weitere Prüfung * damit zusammenhängende Einträge des Nutzers zu löschen, * Einträge im Rahmen des Bearbeitungsrechts gemäß Ziffer 10 zu ändern, * eine Abmahnung auszusprechen, * den Zugang des Nutzers vorübergehend oder dauerhaft zu sperren oder * sonstige erforderliche und geeignete Maßnahmen zu ergreifen. Welche Maßnahme der Betreiber ergreift, ist einzelfallabhängig und steht im billigen Ermessen des Betreibers.'
  },
  {
    title: '',
    position: '7.2',
    subtitle: '',
    content: 'Wird ein Nutzer gesperrt, darf er Cityriza nicht mehr nutzen und sich nicht erneut registrieren.'
  },
  {
    title: '',
    position: '7.3',
    subtitle: '',
    content:
      'Der Betreiber behält sich ausdrücklich vor, wegen eines Verstoßes des Nutzers gegen gesetzliche Bestimmungen oder gegen diese Nutzungsbedingungen rechtliche Schritte einzuleiten.'
  },
  { title: '8. Einräumung von Nutzungsrechten durch den Betreiber', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '8.1',
    subtitle: '',
    content:
      'Der Betreiber räumt dem Nutzer ein einfaches, widerrufliches, auf die Dauer des Nutzungsvertrages befristetes Recht ein, das vom Betreiber zur Verfügung gestellte Online-Portal und die darin enthaltene Anwendungssoftware im Rahmen dieser Nutzungsbedingungen zu nutzen.'
  },
  {
    title: '',
    position: '8.2',
    subtitle: '',
    content:
      'Ohne die schriftliche Zustimmung des Betreibers ist es dem Nutzer nicht gestattet, die ihm zur Verfügung gestellten Inhalte Dritten zugänglich zu machen. Der Nutzer trägt dafür Sorge, dass er Dritten keine Umgehungsmöglichkeit für den Zugang zu Cityriza eröffnet.'
  },
  {
    title: '',
    position: '8.3',
    subtitle: '',
    content:
      'Verletzt der Nutzer schwerwiegend die vereinbarten Nutzungsrechte, kann der Betreiber die Einräumung der Nutzungsrechte außerordentlich kündigen und den Zugang zu Cityriza sperren. Dies setzt eine erfolglose Abmahnung mit angemessener Fristsetzung durch den Betreiber voraus. 8.4 Die sonstigen gesetzlichen und vertraglichen Regelungen bleiben unberührt.'
  },
  { title: '9. Einräumung von Nutzungsrechten durch den Nutzer', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Der Betreiber ist berechtigt, von Nutzern zur Verfügung gestellte Inhalte und Informationen für Cityriza zu nutzen oder durch Dritte nutzen zu lassen. Der Nutzer räumt dem Betreiber unentgeltlich nicht ausschließlich und auf die Dauer des Nutzungsvertrages beschränkt die hierfür erforderlichen Nutzungsrechte, insbesondere das Recht zur dauerhaften Vorhaltung und Speicherung und zur öffentlichen Zugänglichmachung, das Vervielfältigungs- und Veröffentlichungsrecht sowie das Bearbeitungs- und Verbreitungsrecht ein und sichert zu, zu dieser Nutzungsrechtseinräumung berechtigt zu sein.'
  },
  { title: 'Finanzen, Haftung, Laufzeit, Kündigung <br/>', position: '', subtitle: '', content: '' },
  { title: '10. Vergütung, Zahlung, Zahlungsverzug', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '10.1',
    subtitle: '',
    content: 'Die Registrierung für, sowie der lesende und berechtigte Zugriff auf Cityriza ist kostenfrei. '
  },
  {
    title: '',
    position: '10.2',
    subtitle: '',
    content: 'Das Einstellen von Inhalten im Sinne der Ziffer 4.1 ist kostenlos.'
  },
  {
    title: '',
    position: '10.3',
    subtitle: '',
    content:
      'Dem Nutzer stehen verschiedene Zahlungsmöglichkeiten zur Verfügung, die auf der Website des Betreibers angegeben werden.'
  },
  { title: '11. Haftungsfreistellung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Der Nutzer stellt den Betreiber von sämtlichen Ansprüchen frei, die andere Nutzer oder sonstige Dritte dem Betreiber gegenüber wegen Verletzung ihrer Rechte aufgrund vom Nutzer eingestellter Inhalte oder wegen dessen sonstiger Nutzung von Cityriza geltend machen. Der Nutzer übernimmt hierbei die Kosten der notwendigen Rechtsverteidigung einschließlich aller Gerichts- und Anwaltskosten in angemessener Höhe. Dies gilt nicht, wenn die Rechtsverletzung vom Nutzer nicht zu vertreten ist. Der Nutzer ist verpflichtet, dem Betreiber im Falle einer Inanspruchnahme durch Dritte unverzüglich, wahrheitsgemäß und vollständig alle Informationen zur Verfügung zu stellen, die für die Prüfung der Ansprüche und eine Verteidigung erforderlich sind.'
  },
  { title: '12. Haftung des Betreibers', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Der Betreiber haftet dem Nutzer aus allen vertraglichen, vertragsähnlichen und gesetzlichen, auch deliktischen Ansprüchen auf Schadens- und Aufwendungsersatz wie folgt: '
  },
  {
    title: '',
    position: '12.1',
    subtitle: '',
    content:
      'Der Betreiber haftet aus jedem Rechtsgrund uneingeschränkt * bei Vorsatz oder grober Fahrlässigkeit, * bei fahrlässiger oder vorsätzlicher Verletzung des Lebens, des Körpers oder der Gesundheit, * aufgrund eines Garantieversprechens, soweit diesbezüglich nichts anderes geregelt ist, * aufgrund zwingender Haftung wie etwa nach dem Produkthaftungsgesetz. '
  },
  {
    title: '',
    position: '12.2',
    subtitle: '',
    content:
      'Verletzt der Betreiber fahrlässig eine wesentliche Vertragspflicht, ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt, sofern nicht gemäß Ziffer 12.1 unbeschränkt gehaftet wird. Wesentliche Vertragspflichten sind Pflichten, die der Vertrag dem Betreiber nach seinem Inhalt zur Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen darf.'
  },
  { title: '', position: '12.3', subtitle: '', content: 'Im Übrigen ist eine Haftung des Betreibers ausgeschlossen.' },
  {
    title: '',
    position: '12.4',
    subtitle: '',
    content:
      'Vorstehende Haftungsregelungen gelten auch im Hinblick auf die Haftung des Betreibers für seine Erfüllungsgehilfen und gesetzlichen Vertreter.'
  },
  { title: '13. Laufzeit, Kündigung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '13.1',
    subtitle: '',
    content:
      'Kündigung der kostenlosen Mitgliedschaft Der Nutzer hat das Recht das kostenlose Vertragsverhältnis mit dem Betreiber, welches unter Artikel III. dieser AGB beschrieben wird, ohne Angabe von Gründen, jederzeit zu kündigen. Der Betreiber kann dieses Vertragsverhältnis ebenfalls jederzeit mit einer Kündigungsfrist von zwei Wochen kündigen. Der Nutzer kann dieses kostenlose Vertragsverhältnis wirksam kündigen durch Bestätigung dieses Links „Mitgliedschaft beenden“ auf Cityriza.com im eingeloggten Zustand, d.h. im Mitgliedsbereich. Der Nutzer erhält hierauf eine Bestätigungsemail, welche den Link zur Durchführung seines Kündigungswunsches enthält und den der Nutzer bestätigen muß. In diesem Fall wird der für die Profile des Nutzers gespeicherte Datensatz gelöscht und das kostenlose Vertragsverhältnis, welches unter Artikel III. dieser AGB beschrieben wird, ist beendet. Verfasste Beiträge des Nutzers in Chat-Bereichen werden nicht von Cityriza gelöscht.'
  },
  {
    title: '',
    position: '13.2',
    subtitle: '',
    content: 'Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.'
  },
  {
    title: '',
    position: '13.3',
    subtitle: '',
    content: 'Kündigungen haben schriftlich oder in Textform (z. B. per E-Mail) zu erfolgen.'
  },
  { title: 'Änderungen und Schlussbestimmungen <br/>', position: '', subtitle: '', content: '' },
  { title: '14. Änderung der Nutzungsbedingungen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '14.1',
    subtitle: '',
    content:
      'Der Betreiber behält sich vor, diese Nutzungsbedingungen jederzeit ohne Angabe von Gründen zu ändern, es sei denn, dies ist für den Nutzer nicht zumutbar. Der Betreiber wird den Nutzer über Änderungen der Nutzungsbedingungen rechtzeitig in Textform benachrichtigen. Widerspricht der Nutzer der Geltung der neuen Nutzungsbedingungen nicht innerhalb einer Frist von vier Wochen nach der Benachrichtigung, gelten die geänderten Nutzungsbedingungen als vom Nutzer angenommen. Der Betreiber wird den Nutzer in der Benachrichtigung auf sein Widerspruchsrecht und die Bedeutung der Widerspruchsfrist hinweisen. Widerspricht der Nutzer den Änderungen innerhalb der vorgenannten Frist, so besteht das Vertragsverhältnis zu den ursprünglichen Bedingungen fort.'
  },
  {
    title: '',
    position: '14.2',
    subtitle: '',
    content:
      'Der Betreiber behält sich darüber hinaus vor, diese Nutzungsbedingungen zu ändern, * soweit er hierzu aufgrund einer Änderung der Rechtslage verpflichtet ist; * soweit er damit einem gegen sich gerichteten Gerichtsurteil oder einer Behördenentscheidung nachkommt; * soweit er zusätzliche, gänzlich neue Dienstleistungen, Dienste oder Dienstelemente einführt, die einer Leistungsbeschreibung in den Nutzungsbedingungen bedürfen, es sei denn, dass bisherige Nutzungsverhältnis wird dadurch nachteilig verändert; * wenn die Änderung lediglich vorteilhaft für den Nutzer ist; oder * wenn die Änderung rein technisch oder prozessual bedingt ist, es sei denn, sie hat wesentliche Auswirkungen für den Nutzer.'
  },
  {
    title: '',
    position: '14.3',
    subtitle: '',
    content: 'Das Kündigungsrecht des Nutzers gemäß Ziffer 13 bleibt hiervon unberührt.'
  },
  { title: '15. Schlussbestimmungen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '15.1',
    subtitle: '',
    content:
      'Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.'
  },
  {
    title: '',
    position: '15.2',
    subtitle: '',
    content:
      'Handelt der Nutzer als Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich- rechtliches Sondervermögen mit Sitz im Hoheitsgebiet der Bundesrepublik Deutschland, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des Betreibers. Hat der Nutzer seinen Sitz außerhalb des Hoheitsgebiets der Bundesrepublik Deutschland, so ist der Geschäftssitz des Betreibers ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag, wenn der Vertrag oder Ansprüche aus dem Vertrag der beruflichen oder gewerblichen Tätigkeit des Nutzers zugerechnet werden können. Der Betreiber ist in den vorstehenden Fällen jedoch in jedem Fall berechtigt, das Gericht am Sitz des Nutzers anzurufen.'
  }
]);

export default terms;
