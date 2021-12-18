import { readable } from 'svelte/store';

const extendedTerms = readable([
  { title: '1. Gegenstand dieser Erweiterung der AGB', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '1.1',
    subtitle: '',
    content:
      'Der Vertragsgegenstand ergibt sich aus diesen Allgemeinen Geschäftsbedingungen sowie aus den in dem Vertrag zwischen dem Betreiber und dem Kunden getroffenen Regelungen.'
  },
  {
    title: '',
    position: '1.1.1',
    subtitle: '',
    content:
      'Diese Erweiterung der Allgemeinen Geschäftsbedingungen regelt die Veröffentlichung und Ausstrahlung von Werbung (im Folgenden „Werbemittel“ genannt) auf Werbeträgern des Betreibers (im Folgenden „Werbeträger“ genannt) gegen Entgelt.'
  },
  {
    title: '',
    position: '1.1.2',
    subtitle: '',
    content: 'Werbeträger sind hierbei elektronische Displays unterschiedlicher Größen.'
  },
  {
    title: '',
    position: '1.1.3',
    subtitle: '',
    content: 'Es werden immer 6-12 Werbeträger zu einem Werbe-Netzwerk zusammengeschlossen.'
  },
  {
    title: '',
    position: '1.1.4',
    subtitle: '',
    content: 'Die Standorte der Werbeträger im Netzwerk sind vorgegeben und dem Kunden vor Vertragsabschluss bekannt.'
  },
  { title: '', position: '1.1.5', subtitle: '', content: 'Der Kunde ist einem Werbe-Netzwerk fest zugeordnet.' },
  {
    title: '',
    position: '1.1.6',
    subtitle: '',
    content:
      'Der Betreiber kann Standorte eines Werbe-Netzwerkes gegen Standorte eines anderen Werbe-Netzwerkes monatlich tauschen, sofern diese sich alle in einem Bezirk, einer Stadt, einem Landkreis oder einer Gemeinde befinden, um die Reichweite der Werbemittel innerorts bzw. innergebietlich zu steigern.'
  },
  {
    title: '',
    position: '1.2',
    subtitle: '',
    content:
      'Allgemeine Geschäftsbedingungen des Kunden werden, auch wenn diese Angebotsaufforderungen, Bestellungen, Annahmeerklärungen usw. beigefügt sind und diesen nicht widersprochen wird, nicht Vertragsinhalt.'
  },
  { title: '2. Vertragspartner', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Vertragspartner sind der Betreiber und der Werbekunde bzw. eine vom Werbekunden beauftragte Agentur/Werbemittlerin, der bzw. die kein Verbraucher im Sinne von § 13 BGB ist (Werbekunde und vom Werbekunden beauftragte Agentur/Werbemittlerin im Folgenden gemeinsam „Kunde“ genannt).'
  },
  { title: '3. Vertrag und Angebot', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '3.1.1',
    subtitle: '',
    content:
      'Der Vertrag über die Veröffentlichung von Werbemitteln auf Werbeträgern zwischen dem Kunden und dem Betreiber (im Folgenden: „Werbevertrag“) kommt infolge des unverbindlichen und freibleibenden Angebotes des Betreibers aufgrund einer Buchungsanfrage (Auftragsangebot) des Kunden und deren ausdrücklichen Auftragsannahme (E-Mail ausreichend) durch den Betreiber zustande.'
  },
  {
    title: '',
    position: '3.1.2',
    subtitle: '',
    content:
      'Auftragsangebote für Werbeplätze auf Werbeträgern, die vom Betreiber auf der vom Betreiber betriebenen Webseite www.cityriza.com angezeigt werden, sind ebenfalls freibleibend und stellen lediglich unverbindliche Angebote dar.'
  },
  {
    title: '',
    position: '3.1.3',
    subtitle: '',
    content:
      'Eine verbindliche Buchung über die vom Betreiber betriebene Webseite www.cityriza.com setzt die Registrierung des Kunden über diese Website voraus. Mit der verbindlichen Buchung gibt der Kunde ein unwiderrufliches Angebot über die Platzierung und Schaltung von Werbemitteln gemäß den im Rahmen der Buchung online angegebenen Daten gegenüber dem Betreiber ab.'
  },
  {
    title: '',
    position: '3.1.4',
    subtitle: '',
    content:
      'Ein Vertrag kommt erst nach Prüfung des Angebotes durch schriftliche oder elektronische Bestätigung der Buchung oder, falls die Bestätigung erst nach Veröffentlichung des Werbemittels erfolgt, durch die öffentliche Wiedergabe des Werbemittels auf dem vereinbarten Werbeträger zustande.'
  },
  {
    title: '',
    position: '3.1.5',
    subtitle: '',
    content:
      'Der Betreiber behält sich vor, die Erstellung eines Angebots aufgrund einer Buchungsanfrage ohne Angabe von Gründen ganz oder teilweise zu verweigern.'
  },
  {
    title: '',
    position: '3.1.6',
    subtitle: '',
    content: 'Der Kunde hat in der Buchungsanfrage die zu bewerbende Produktgruppe anzugeben.'
  },
  {
    title: '',
    position: '3.2',
    subtitle: '',
    content:
      'Diese Allgemeinen Geschäftsbedingungen sind Vertragsbestandteil eines jeden Werbevertrags des Betreibers. Von diesen Allgemeinen Geschäftsbedingungen abweichende Regelungen sowie Änderungen, Änderungsvereinbarungen oder Ergänzungen des Werbevertrags bedürfen der Schriftform (Austausch zwischen dem Betreiber und dem Kunden per E-Mail ausreichend). Die Übernahme einer Garantie für bestimmte Eigenschaften (Beschaffenheit) bedarf zu ihrer Wirksamkeit der schriftlichen Bestätigung (E-Mail ausreichend) durch Betreiber.'
  },
  { title: '4. Übermittlung der Werbemittel', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Die vertragsgemäße Durchführung des Werbevertrages umfasst bei elektronischer Werbung die Schaltung des gelieferten Werbebeitrages.'
  },
  {
    title: '',
    position: '4.1.1',
    subtitle: '',
    content:
      'Die Werbeinhalte („Werbemittel“) sind vom Kunden im vorgegebenen Format und der vorgegebenen Qualität zu liefern und auf der vom Betreiber betriebenen Webseite www.cityriza.com nach Anmeldung im eigenen Kundenbereich hochzuladen.'
  },
  {
    title: '',
    position: '4.1.2',
    subtitle: '',
    content: 'Die Kosten für die Produktion des Werbemittels trägt der Kunde.'
  },
  {
    title: '',
    position: '4.1.3',
    subtitle: '',
    content:
      'Der Kunde hat dem Betreiber die Werbemittel verbindlich zur vertragsgemäßen öffentlichen Wiedergabe zur Verfügung zu stellen. Die Formatanforderungen werden dem Kunden mitgeteilt und sind in ihrer jeweils aktuellen Fassung unter www.cityriza.com nach Anmeldung im eigenen Kundenbereich abrufbar.'
  },
  {
    title: '',
    position: '4.1.4',
    subtitle: '',
    content:
      'Die dem Betreiber übermittelten Werbemittel werden erst Vertragsinhalt, wenn diese vom Betreiber nach unverbindlicher Prüfung freigegeben wurden.'
  },
  {
    title: '',
    position: '4.1.5',
    subtitle: '',
    content:
      'Die Werbemittel müssen mindestens 14 Werktage vor dem geplanten Erstausstrahlungstermin auf www.cityriza.com, nach Anmeldung im eigenen Kundenbereich, hochgeladen sein.'
  },
  {
    title: '',
    position: '4.1.6',
    subtitle: '',
    content:
      'Sie gelten als freigegeben, wenn Betreiber nicht innerhalb von 4 Tagen nach Erhalt die Freigabe verweigert oder einer Nutzung widerspricht.'
  },
  {
    title: '',
    position: '4.1.7',
    subtitle: '',
    content: 'Eine Änderung der Werbemittel bedarf der ausdrücklichen Genehmigung durch den Betreiber.'
  },
  {
    title: '',
    position: '4.1.8',
    subtitle: '',
    content:
      'Motivwechsel während der Vertragslaufzeit sind 1 mal pro Monat möglich. Der Stichtag hierfür, also letzte zeitlicher Termin, bis zu welchem Änderungen für den Folgemonat vorgenommen werden können, ergibt sich aus dem Werbevertrag und den Angaben auf www.cityriza.com. Im Normalfall immer zum 01. oder 15. des laufenden Monats. Es kann für jede Woche des Monats ein anderes Werbemittel zur Freigabe hochgeladen werden.'
  },
  {
    title: '',
    position: '4.1.9',
    subtitle: '',
    content:
      'Änderungen der Werbemittel nach erfolgreicher Freigabe bedürfen einer gesonderten Freigabe und erzeugen zusätzliche Kosten, siehe 5.5 und 5.6.'
  },
  {
    title: '',
    position: '4.2',
    subtitle: '',
    content:
      'Der Kunde ist verpflichtet, Sicherheitskopien der an den Betreiber übermittelten Werbemittel herzustellen. Werbemittel, die dem Betreiber elektronisch übermittelt wurden (Upload, E-Mail, etc.) werden vom Betreiber auf Anfordern des Kunden oder nach freiem Ermessen vom Betreiber nach Erfüllung des Auftrages gelöscht. Wurden die Werbemittel dem Betreiber auf einem Medienträger überlassen, sendet der Betreiber die übermittelten und genehmigten Werbemittel auf Kosten und Gefahr des Kunden an diesen zurück, sofern der Kunde dem Betreiber hierzu noch vor Beginn der Ausstrahlung schriftlich (E-Mail ausreichend) aufgefordert hat. Andernfalls ist der Betreiber berechtigt, die Werbemittel nebst Medienträger drei Monate nach erfolgter Ausstrahlung zu vernichten.'
  },
  {
    title: '',
    position: '4.3',
    subtitle: '',
    content:
      'Für den Fall, dass nach Einschätzung des Betreibers ein schwerer Imageschaden durch bereits freigegebene Werbemittel droht, ist der Kunde nach schriftlicher Aufforderung (E-Mail ausreichend) durch den Betreiber zur unverzüglichen Löschung dieses Werbemittels verpflichtet, bzw. löscht der Betreiber das betroffene Werbemittel nach vorheriger Ankündigung. In diesem Fall kann der Kunde außer einer Rückerstattung der gezahlten Vergütung pro rata temporis keine Ansprüche gegen den Betreiber geltend machen.'
  },
  { title: '5. Durchführung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '5.1',
    subtitle: '',
    content:
      'Sollte der Auftrag wegen technischer, rechtlicher oder sonstiger Gründe nicht in vollem Umfange zur Ausführung gelangen, wird pro rata temporis abgerechnet.'
  },
  {
    title: '',
    position: '5.2',
    subtitle: '',
    content:
      'Kann der Betreiber den Auftrag nicht oder nicht fristgemäß durchführen, weil das Werbemittel nicht oder verspätet oder nicht in dem erforderlichen Format oder der erforderlichen Anzahl geliefert worden ist, so entbindet dies den Kunden nicht von seiner Zahlungsverpflichtung, wobei sich der Betreiber ersparte Aufwendungen anrechnen lässt.'
  },
  {
    title: '',
    position: '5.3',
    subtitle: '',
    content:
      'Stellt der Kunde ein Werbemittel nicht fristgerecht oder in falschem Format zur Verfügung, wird sich die Betreiber dennoch um deren Freigabe und Korrektur bemühen, ohne dass hierauf ein Anspruch des Kunde besteht. Im Falle der Durchführung ist der Kunde dem Betreiber zur Zahlung des durch die verspätete oder nicht formatgemäße Anlieferung entstandenen Sonderaufwandes verpflichtet.'
  },
  {
    title: '',
    position: '5.4',
    subtitle: '',
    content:
      'Lehnt der Kunde die Durchführung gegen Zahlung des Sonderaufwandes ab, bleibt er gleichwohl zur Zahlung der vereinbarten Vergütung verpflichtet. In diesem Fall wird das zuletzt ausgestrahlte Werbemittel so lange erneut ausgestrahlt, bis es entweder zeitlich festgelegt durch ein anderes freigegebenes Werbemittel ersetzt wird oder der Werbevertrag endet.'
  },
  {
    title: '',
    position: '5.5',
    subtitle: '',
    content: 'Der Betreiber erhebt als Sonderaufwand eine Pauschalgebühr in Höhe von EUR 75,00 zzgl. MwSt.'
  },
  {
    title: '',
    position: '5.6',
    subtitle: '',
    content:
      'Für erforderliche Anpassungen des Werbematerials erhebt der Betreiber zudem Zusatzkosten in Höhe von EUR 125,00 zzgl. MwSt. pro Stunde. Der Betreiber wird dem Kunden den kalkulierten Sonderaufwand zur Zustimmung mitteilen.'
  },
  { title: '6. Nutzungsrechte', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '6.1',
    subtitle: '',
    content:
      'Der Kunde räumt dem Betreiber mit Abschluss des Vertrages sämtliche für die vertragsgegenständliche Ausstrahlung und Wiedergabe der Werbemittel erforderlichen urheberrechtlichen, markenrechtlichen und sonstigen Nutzungsrechte, insbesondere die Rechte zur Vervielfältigung, öffentlichen Wiedergabe, Vorführung und Archivierung an den übermittelten Inhalten ein. Der Kunde garantiert, dass er über die vorgenannten Rechte verfügt und zu deren vertragsgemäßer Nutzung, Übertragung und Übermittlung frei von Rechten Dritter berechtigt ist.'
  },
  {
    title: '',
    position: '6.2',
    subtitle: '',
    content:
      'Die vorgenannten Bestimmungen gelten auch für Werbemittel, die der Betreiber auf Wunsch des Kunden entwirft oder gestaltet, soweit der Betreiber nach den Vorgaben des Kunden gehandelt hat.'
  },
  {
    title: '',
    position: '6.3',
    subtitle: '',
    content:
      'Der Kunde räumt dem Betreiber ferner das Recht ein, die gelieferten Werbemittel für eigene Werbezwecke, insbesondere im Rahmen der Berichterstattung über das Media-Angebot des Betreibers, unentgeltlich zu nutzen.'
  },
  {
    title: '',
    position: '6.4',
    subtitle: '',
    content: 'Der Betreiber ist berechtigt, den Kunden als Referenzkunden zu benennen.'
  },
  { title: '7. Inhalte der Werbemittel/ Wettbewerbsschutz', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '7.1',
    subtitle: '',
    content:
      'Der Kunde garantiert, dass die Werbemittel und die gelieferten Vorlagen weder jugendgefährdend noch diskriminierend sind und auch gegen keine Werbeverbote oder sonstigen gesetzlichen Verbote oder behördliche Anordnungen und Genehmigungen verstoßen. Werbemittel, die gegen diese Bestimmungen verstoßen, werden vom Betreiber abgewiesen bzw. nicht ausgestrahlt.'
  },
  {
    title: '',
    position: '7.2.1',
    subtitle: '',
    content:
      'Die Art der Ausspielung (Standbild, Cinemagramm, Animation, Video) ist standortabhängig und an gesetzliche Genehmigungen gebunden und kann sich auch während der Vertragslaufzeit verändern. Sollten sich entsprechende Genehmigungen während der Vertragslaufzeit ändern, ist der Kunde verpﬂichtet, die Art der Ausspielung für den Betreiber unentgeltlich anzupassen.'
  },
  {
    title: '',
    position: '7.2.2',
    subtitle: '',
    content:
      'Soweit nichts anderes vereinbart ist, bezieht sich die Verpflichtung des Betreibers zur öffentlichen Wiedergabe der Werbeinhalte auf einem Werbeträger am jeweiligen Standort.'
  },
  {
    title: '',
    position: '7.2.3',
    subtitle: '',
    content:
      'Befinden sich an einem Standort mehrere Werbeträger, ist der Betreiber vorbehaltlich anderer Vereinbarung nach freiem Ermessen zur Auswahl und zum Wechsel der Werbeträger zur Ausspielung der Werbeinhalte befugt.'
  },
  {
    title: '',
    position: '7.3',
    subtitle: '',
    content:
      'Der Ausschluss von Wettbewerbern des Kunden wird nicht zugesichert, d.h. der Betreiber sichert nicht zu, dass nicht auch Werbung von Wettbewerbern des Kunden auf den vertragsgegenständlichen Werbeträgern veröffentlicht wird. Der Betreiber wird aber nach Möglichkeit Werbung von Wettbewerbern nicht unmittelbar aufeinanderfolgend platzieren oder ausstrahlen.'
  },
  { title: '8. Vertragsstörung und Rücktritt', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '8.1',
    subtitle: '',
    content:
      'Der Kunde kann bis 60 Tage vor Erstschaltungsbeginn durch schriftliche Erklärung von dem Vertrag zurücktreten. Bei einem Rücktritt von weniger als 60 Tagen vor Erstschaltungsbeginn ist der Betreiber berechtigt eine pauschale Entschädigung zu verlangen. Diese Entschädigung beträgt bei einem Rücktritt bis 30 Tage vor Schaltungsbeginn 50%, bei einem Rücktritt bis 15 Tage vor Schaltungsbeginn 80%, und danach 100% der gebuchten Brutto-Medialeistung.'
  },
  {
    title: '',
    position: '8.1.1',
    subtitle: '',
    content:
      'Dem Kunden bleibt der Nachweis eines geringen Schadens vorbehalten. Der Entschädigungsbetrag ermäßigt sich dann entsprechend. Zusätzlich hat der Kunde die zum Zeitpunkt des Rücktritts bereits angefallenen Kosten (z. B. Produktionskosten) der Betreiber zu erstatten.'
  },
  {
    title: '',
    position: '8.2',
    subtitle: '',
    content:
      'Der Betreiber ist berechtigt, den vereinbarten Termin zur Schaltung des Werbemittels um eine angemessene Frist zu verschieben, sofern technische, betriebliche oder vertriebliche Gründe in der Sphäre der Betreiber eine Verschiebung erforderlich machen. In diesem Fall wird der Betreiber den Kunden unverzüglich über die Verzögerung informieren und ihm den voraussichtlichen Termin der geänderten Schaltung nennen. Der Werbevertrag verlängert sich um den ausgefallenen Zeitraum, ohne dass es diesbezüglich einer weiteren Vereinbarung bedarf.'
  },
  {
    title: '',
    position: '8.3',
    subtitle: '',
    content:
      'Vertragsgegenständliche Leistungspflicht ist eine 95-prozentige Verfügbarkeit der gebuchten Sendezeit, gerechnet auf die Gesamtdauer der Werbeleistung. Darüber hinaus gehende Ausfallzeiten werden nach Wahl vom Betreiber nachgeleistet oder erstattet, soweit der Betreiber diese zu vertreten hat. Im Falle der Erstattung können Provisionen von Agenturen/Werbemittlern nicht berücksichtigt werden.'
  },
  {
    title: '',
    position: '8.4',
    subtitle: '',
    content:
      'Sollte der Werbestandort, inkl. des Werbeträgers, von einem Dritten übernommen werden (Verpachtung; Vermietung/ Eigentumsübergang), so behält der Vertrag seine Gültigkeit; den Parteien steht kein Rücktritts- oder Kündigungsrecht zu, soweit durch die Übernahme das Recht des Betreibers zur Nutzung der Werbeträger nicht beeinträchtigt wird.'
  },
  { title: '9. Haftung und Haftungsfreistellung', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '9.1.1',
    subtitle: '',
    content:
      'Der Betreiber haftet nicht für technische Störungen im Verantwortungsbereich Dritter oder Handlungen von Dritten.'
  },
  {
    title: '',
    position: '9.1.2',
    subtitle: '',
    content:
      'Bei technischen Störungen der Wiedergabe liegt ein Mangel nur vor, wenn dieser vom Betreiber zu vertreten ist und die Wiedergabe im auftragsgegenständlichen Zeitraum für mehr als 90% eingeschränkt ist.'
  },
  {
    title: '',
    position: '9.2.1',
    subtitle: '',
    content:
      'Schadensersatzansprüche wegen Pflichtverletzung bestehen nur bei Vorsatz und grober Fahrlässigkeit des Betreibers.'
  },
  {
    title: '',
    position: '9.2.2',
    subtitle: '',
    content: 'Eine Haftung für leichte Fahrlässigkeit des Betreibers ist ausgeschlossen.'
  },
  {
    title: '',
    position: '9.2.3',
    subtitle: '',
    content:
      'Diese Einschränkung gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei der Verletzung wesentlicher Vertragspflichten.'
  },
  {
    title: '',
    position: '9.2.4',
    subtitle: '',
    content:
      'Gegenüber Kaufleuten ist die Haftung für Sach- und Vermögensschäden bei grober Fahrlässigkeit auf den vertragstypischen vorhersehbaren Schaden begrenzt. Dies gilt auch bei leicht fahrlässigen Pflichtverletzungen der gesetzlichen Vertreter oder Erfüllungsgehilfen des Betreibers.'
  },
  {
    title: '',
    position: '9.3.1',
    subtitle: '',
    content:
      'Die vorstehenden Haftungsbeschränkungen gelten nicht bei Ansprüchen des Kunden aus Produkthaftung oder bei dem Betreiber zurechenbar verursachten Personenschäden.'
  },
  {
    title: '',
    position: '9.3.2',
    subtitle: '',
    content: 'Eine Haftung für mittelbare Schäden, insbesondere entgangenem Gewinn, ist ausgeschlossen.'
  },
  {
    title: '',
    position: '9.4.1',
    subtitle: '',
    content: 'Die Gewährleistung ist zunächst auf Beseitigung des Mangels durch Nachholung der Wiedergabe beschränkt.'
  },
  {
    title: '',
    position: '9.4.2',
    subtitle: '',
    content:
      'Sollte die Beseitigung nicht innerhalb einer zumutbaren Frist von 4 Tagen längstens jedoch 1 Woche erfolgen, kann der Kunde eine Herabsetzung der Vergütung oder Rücktritt vom Vertrag wählen, soweit es sich nicht nur um einen geringfügigen Mangel handelt.'
  },
  {
    title: '',
    position: '9.5.1',
    subtitle: '',
    content:
      'Im Übrigen haftet der Betreiber bei leichter Fahrlässigkeit nur, sofern eine Pflicht verletzt wird, deren Erfüllung die ordnungsgemäße Durchführung des Werbevertrages überhaupt erst ermöglicht, deren Verletzung die Erreichung des Vertragszweckes gefährdet und auf deren Einhaltung der Kunde regelmäßig vertrauen kann (Kardinalpflicht). Bei Verletzung einer Kardinalpflicht ist die Haftung auf den vertragstypischen vorhersehbaren Schaden begrenzt. Dies gilt auch für entgangenen Gewinn und ausgebliebene Einsparungen.'
  },
  {
    title: '',
    position: '9.5.2',
    subtitle: '',
    content:
      'Bei leicht fahrlässigen Pflichtverletzungen beschränkt sich die Haftung des Betreibers auf den nach der Art des Auftrages vorhersehbaren, vertragstypischen, unmittelbaren Durchschnittsschaden.'
  },
  {
    title: '',
    position: '9.5.3',
    subtitle: '',
    content:
      'Der Betreiber haftet nicht für die leicht fahrlässige Beschädigung von Werbeträgern oder Schwund an Werbemitteln durch sie, ihre Standortpartner, Dritte oder durch höhere Gewalt.'
  },
  {
    title: '',
    position: '9.6.1',
    subtitle: '',
    content: 'Die Haftung für sonstige entfernte Mangelfolgeschäden ist ausgeschlossen.'
  },
  {
    title: '',
    position: '9.6.2',
    subtitle: '',
    content:
      'Im Falle des Rücktritts vom Vertrag steht dem Kunden kein Schadensersatzanspruch wegen des Mangels zu. Der Schadensersatz ist begrenzt auf die Höhe der vereinbarten Vergütung pro rata, soweit der Betreiber den Mangel nicht arglistig verschwiegen hat.'
  },
  {
    title: '',
    position: '9.6.3',
    subtitle: '',
    content:
      'Offensichtliche Mängel sind unverzüglich nach Schaltungsbeginn gegenüber dem Betreiber schriftlich (E-Mail ausreichend) geltend zu machen.'
  },
  {
    title: '',
    position: '9.6.4',
    subtitle: '',
    content: 'Gewährleistungsrechte des Kunden verjähren in 12 Monaten ab Vorliegen eines Mangels.'
  },
  {
    title: '',
    position: '9.7.1',
    subtitle: '',
    content:
      'Der Betreiber ist berechtigt, von der vereinbarten Ausstrahlung der vom Kunden gelieferten Werbemittel abzusehen, sofern technische Gründe, höhere Gewalt, Streik, behördliche Anordnungen oder sonstige Umstände der Ausstrahlung entgegenstehen, die der Betreiber nicht zu vertreten hat. In den vorgenannten Fällen stehen dem Kunden keine Ansprüche gegen den Betreiber zu.'
  },
  {
    title: '',
    position: '9.7.2',
    subtitle: '',
    content:
      'Der Kunde stellt den Betreiber von allen Ansprüchen Dritter auf erstes Anfordern frei; dies betrifft insbesondere Ansprüche wegen der Verletzung von Nutzungsrechten. Im Falle einer Inanspruchnahme durch Dritte stellt der Kunde dem Betreiber unverzüglich, wahrheitsgemäß und vollständig alle Informationen zur Verfügung, die für die Prüfung der Ansprüche und Verteidigung erforderlich sind. Unbeschadet etwaiger weitergehender Schadensersatzansprüche erstattet der Kunde dem Betreiber die im Zusammenhang mit der Inanspruchnahme durch Dritte entstehenden angemessenen Aufwendungen und Kosten. Dies gilt insbesondere im Falle einer erforderlichen Rechtsverteidigung.'
  },
  { title: '10. Preise und Zahlungsbedingungen', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '10.1.1',
    subtitle: '',
    content:
      'Soweit nicht etwas anderes vereinbart ist, gelten die jeweils gültigen Preise aus dem geschlossenen Vertrag zwischen dem Werbeträger und dem Betreiber.'
  },
  {
    title: '',
    position: '10.1.2',
    subtitle: '',
    content:
      'In den Preisen nicht enthalten sind ggf. anfallende urheber- bzw. leistungsschutzrechtliche Vergütungen, soweit diese in Ansehung der Werbeinhalte an Verwertungsgesellschaften zu zahlen sind.'
  },
  {
    title: '',
    position: '10.1.3',
    subtitle: '',
    content:
      'Vergütung und Nebenkosten sind grundsätzlich Nettopreise zuzüglich gesetzlich anfallender Steuern und Abgaben.'
  },
  {
    title: '',
    position: '10.2.1',
    subtitle: '',
    content:
      'Der Rechnungsbetrag ist mittels Überweisung auf das in der Rechnung angegebene Konto zu zahlen, soweit der Kunde keine andere vom Betreiber angebotene Zahlungsmethode wählt, wie z.B. Lastschrift. Er muss spätestens am zehnten Tag nach Rechnungsdatum gutgeschrieben sein. Bei einer vom Kunden erteilten Einzugsermächtigung bucht der Betreiber den Rechnungsbetrag von dem vereinbarten Konto ab.'
  },
  {
    title: '',
    position: '10.2.2',
    subtitle: '',
    content:
      'Für jede nicht eingelöste bzw. zurückgereichte Lastschrift hat der Kunde dem Betreiber die ihm entstandenen Kosten in dem Umfang zu erstatten, wie er das Kosten auslösende Ereignis zu vertreten hat.'
  },
  {
    title: '',
    position: '10.3',
    subtitle: '',
    content: 'Der Betreiber behält sich vor, Rechnungen elektronisch an den Kunden zu versenden.'
  },
  {
    title: '',
    position: '10.4',
    subtitle: '',
    content:
      'Bei begründeten Zweifeln an der Zahlungsfähigkeit des Kunden ist der Betreiber berechtigt, die Durchführung weiterer Werbeschaltungen – auch während der Laufzeit des Werbevertrages – ohne Rücksicht auf ein ursprünglich vereinbartes Zahlungsziel von der Vorauszahlung des Betrages und von dem Ausgleich offen stehender Rechnungsbeträge abhängig zu machen, ohne dass hieraus dem Kunden irgendwelche Ansprüche gegen den Betreiber entstehen.'
  },
  {
    title: '',
    position: '10.5',
    subtitle: '',
    content:
      'Ein Aufrechnungsrecht steht dem Kunden nur zu, soweit seine Gegenforderung rechtskräftig festgestellt oder unbestritten ist. Dem Kunden steht die Geltendmachung eines Zurückbehaltungsrechtes nur wegen Gegenansprüchen aus diesem Vertragsverhältnis zu.'
  },
  { title: '11. Vertragslaufzeit', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '',
    subtitle: '',
    content:
      'Der Werbevertrag endet mit dem Ablauf der darin genannten Ausstrahlungszeit automatisch, ohne dass es einer Kündigung bedarf.'
  },
  { title: '12. Sonstiges', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '12.1.1',
    subtitle: '',
    content: 'Der Betreiber ist berechtigt, die Leistungen durch Dritte als Subunternehmer zu erbringen.'
  },
  {
    title: '',
    position: '12.1.2',
    subtitle: '',
    content: 'Der Betreiber haftet für die Leistungserbringung von Subunternehmern wie für eigenes Handeln.'
  },
  {
    title: '',
    position: '12.2',
    subtitle: '',
    content:
      'Bei dem Werbevertrag handelt es sich nicht um einen Allein- oder Exklusivauftrag. Dem Betreiber steht es frei, parallel zu dem Werbevertrag weitere Verträge mit Dritten zu schließen, die den gleichen oder einen ähnlichen Zweck oder Inhalt haben können.'
  },
  {
    title: '',
    position: '12.3',
    subtitle: '',
    content:
      'Der Kunde erklärt sich damit einverstanden, dass der Betreiber die Werbemittel seinerseits als Referenz bei der Vermarktung seiner Werbeflächen einsetzt.'
  },
  { title: '', position: '12.4', subtitle: '', content: 'Mündliche Vereinbarungen oder Nebenabreden bestehen nicht.' },
  {
    title: '',
    position: '12.5',
    subtitle: '',
    content:
      'Der Kunde kann die Rechte und Pflichten aus diesen Allgemeinen Geschäftsbedingungen und dem Werbevertrag nur nach vorheriger schriftlicher Zustimmung des Betreibers (E-Mail ausreichend) auf einen Dritten übertragen.'
  },
  { title: '13. Gerichtsstand/Anwendbares Recht', position: '', subtitle: '', content: '' },
  {
    title: '',
    position: '13.1',
    subtitle: '',
    content: 'Für die vertraglichen Beziehungen der Vertragspartner gilt deutsches Recht.'
  },
  {
    title: '',
    position: '13.2',
    subtitle: '',
    content:
      'Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen Allgemeinen Geschäftsbedingungen und dem Werbevertrag ist München. Ein etwaiger ausschließlicher Gerichtsstand ist vorrangig.'
  }
]);
export default extendedTerms;
