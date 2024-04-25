import Image from "next/image";
import socials from "../data/socials.json";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const grid = "p-8 grid gap-12 md:gap-20 grid-cols-1 md:grid-cols-2";

  return (
    <div className="bg-neutral-700/20 backdrop-blur-sm rounded-2xl m-4 md:m-8">
      <footer className={grid}>
        <div>
          <p>CoMo Solution GmbH</p>
          <p>Marktplatz 18</p>
          <p>91207 Lauf an der Pegnitz</p>
          <p>&nbsp;</p>
          <p>
            <a href="mailto:info@como-solution.de">info@como-solution.de</a>
          </p>
          <p>
            <a href="tel:+4991231833700">+49 9123 18337-00</a>
          </p>
          {socials.map((s) => {
            return (
              <p key={s.name}>
                <a href={s.href} target="_blank">
                  {s.name}
                </a>
              </p>
            );
          })}
        </div>
        <div>
          <h3 className="font-bold mb-2">
            Innovative Lösungen für Collaboration und Mobile Work
          </h3>
          <p className="text-sm">
            Unser Fokus: Collaboration & Mobile Solutions! Lösungsentwicklung
            für die digitale und mobile Zusammenarbeit sowie Management und
            Absicherung Ihrer mobilen Infrastruktur. Wir beraten, entwickeln,
            migrieren, realisieren und supporten – immer die passende Lösung für
            Sie!
          </p>
          <div className="flex gap-8 mt-8">
            <Image
              src="/logo.svg"
              alt="Logo"
              width="120"
              height="36"
              onClick={() => {
                document.querySelector("#top")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            />
            <Image src="/fcn.svg" alt="Club Freund" width="120" height="36" />
          </div>
        </div>
      </footer>
      <footer className="bg-black rounded-b-2xl">
        <div className={grid}>
          <p>© 2024</p>
          <div>
            <a onClick={() => setOpen(!open)} className="cursor-pointer">
              Impressum & Datenschutz
            </a>
          </div>
        </div>
        <Collapse isOpened={open}>
          <div className={grid}>
            <div>
              <h4 className="font-bold">Impressum</h4>
              <p>CoMo Solution GmbH</p>
              <p>Marktplatz 18</p>
              <p>91207 Lauf an der Pegnitz</p>
              <p>Deutschland</p>
              <p>&nbsp;</p>
              <p>Fon: +49 9123 18337-00</p>
              <p>Fax: +49 9123 18337-10</p>
              <p>Mail: info@como-solution.de</p>
              <p>&nbsp;</p>
              <p>Sitz der Gesellschaft: Lauf an der Pegnitz</p>
              <p>Vertreten durch den Geschäftsführer Marcus Prell</p>
              <p>Handelsregister: HRB 26126, Amtsgericht Nürnberg</p>
              <p>Umsatzsteuer-Identifikationsnummer: DE268586250 </p>
              <p>&nbsp;</p>
              <p>
                Verantwortlich für den Inhalt: Marcus Prell (Adresse wie oben)
              </p>
            </div>
            <div id="notice">
              <h4 className="font-bold">Datenschutzhinweis</h4>
              <h5>Name und Anschrift des Verantwortlichen</h5>
              <p>
                Der Verantwortliche im Sinne der EU-Datenschutzgrundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze der
                Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher
                Bestimmungen ist:
              </p>
              <p>
                Marcus Prell <br /> Geschäftsführer der CoMo Solution GmbH
                <br />
                Marktplatz 18 <br /> 91207 Lauf an der Pegnitz
                <br /> Telefon: +49 9123 18377-00 <br />
                Mail: info@como-solution.de
              </p>
              <h5>Unser Datenschutzbeauftragter</h5>
              <p>Der Datenschutzbeauftragte des Verantwortlichen ist:</p>
              <p>
                Unternehmens- & Personalberatung
                <br /> Bernhard Höllerer <br />
                Mail: datenschutz@como-solution.de
              </p>
              <h5>Allgemeines zur Datenverarbeitung</h5>
              <p>
                Wir erheben und verwenden personenbezogene Daten der Besucher
                unserer Webseite grundsätzlich nur, soweit dies zur
                Bereitstellung einer funktionsfähigen Website sowie unserer
                Inhalte und Leistungen erforderlich ist und eine Rechtsgrundlage
                uns dies gestattet.
              </p>
              <h6>
                Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              </h6>
              <p>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
                eine Einwilligung einer betroffenen Person einholen, dient Art.
                6 Abs. 1 lit. a DSGVO als Rechtsgrundlage für die Verarbeitung
                personenbezogener Daten.
              </p>
              <p>
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich ist, der die CoMo
                Solution GmbH unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als
                Rechtsgrundlage.
              </p>
              <p>
                Für den Fall, dass lebenswichtige Interessen einer betroffenen
                Person oder einer anderen natürlichen Person eine Verarbeitung
                personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
                lit. d DSGVO als Rechtsgrundlage.
              </p>
              <p>
                Ist die Verarbeitung für die Wahrnehmung einer Aufgabe
                erforderlich, die im öffentlichen Interesse liegt oder in
                Ausübung öffentlicher Gewalt erfolgt, die der CoMo Solution GmbH
                übertragen wurde, so dient Art. 6 Abs. 1 lit. e DSGVO als
                Rechtsgrundlage für die Verarbeitung.
              </p>
              <p>
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                der CoMo Solution GmbH oder eines Dritten erforderlich und
                überwiegen die Interessen, Grundrechte und Grundfreiheiten eines
                Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
                Dies gilt nicht, soweit die CoMo Solution GmbH bei der
                entsprechenden Verarbeitung hoheitlich tätig wird.
              </p>
              <h6>Dauer der Speicherung personenbezogener Daten</h6>
              <p>
                Die personenbezogenen Daten von Betroffenen werden von uns nur
                so lange gespeichert, wie der Zweck der Speicherung besteht.
                Wenn die Verarbeitung auf einer Einwilligung des Betroffenen
                beruht, werden die Daten nur solange gespeichert, bis der
                Betroffene seine Einwilligung widerruft, es sei denn, es besteht
                eine andere Rechtsgrundlage für die Verarbeitung. Wir überprüfen
                jährlich die Notwendigkeit einer Speicherung und löschen
                personenbezogene Daten am Jahresende, wenn kein Zweck für die
                Speicherung mehr besteht. Die eMails selbst werden weiter
                gespeichert oder gelöscht, wenn keine weitere Speicherung mehr
                erforderlich ist oder keine Aufbewahrungspflichten mehr
                bestehen.
              </p>
              <h6>
                Recht auf Berichtigung und Löschung der personenbezogenen Daten
              </h6>
              <p>
                Betroffene haben das Recht, von uns unverzüglich die
                Berichtigung sie betreffender unrichtiger personenbezogener
                Daten zu verlangen. Betroffene haben außerdem das Recht, von uns
                unverzüglich die Löschung sie betreffender personenbezogener
                Daten zu verlangen, sobald der Zweck der Speicherung entfällt
                oder, wenn die Verarbeitung auf einer Einwilligung von
                Betroffenen beruht, wenn ein Betroffener seine Einwilligung
                widerruft und keine andere Rechtsgrundlage für die Verarbeitung
                besteht.
              </p>
              <p>
                Die personenbezogenen Daten von Betroffenen werden weiterhin
                gelöscht, wenn sie gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen
                die Verarbeitung einlegen und keine vorrangigen berechtigten
                Gründe für die Verarbeitung vorliegen, wenn die
                personenbezogenen Daten unrechtmäßig verarbeitet wurden oder
                wenn die Löschung zur Erfüllung einer rechtlichen Verpflichtung
                durch den europäischen oder nationalen Gesetzgeber in
                Vorschriften, denen die CoMo Solution GmbH unterliegt,
                vorgesehen wurde.
              </p>
              <p>
                Eine Löschung erfolgt jedoch in den oben dargestellten Fällen
                nicht, wenn die Verarbeitung der personenbezogenen Daten
                erforderlich ist, damit die CoMo Solution GmbH eine rechtliche
                Verpflichtung, die ihr durch den europäischen oder nationalen
                Gesetzgeber auferlegt wurde, erfüllen kann oder wenn die
                Verarbeitung zur Wahrnehmung einer Aufgabe der CoMo Solution
                GmbH erfolgt, die im öffentlichen Interessen liegt oder in
                Ausübung öffentlicher Gewalt erfolgt, die der CoMo Solution GmbH
                übertragen wurde oder wenn die weitere Speicherung der
                personenbezogenen Daten zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen erforderlich ist.
              </p>
              <h6>Recht auf Widerruf</h6>
              <p>
                Beruht die Verarbeitung personenbezogener Daten auf einer
                Einwilligung einer betroffenen Person, so kann diese ihre
                Einwilligung jederzeit widerrufen. Die bis zum Widerruf erfolgte
                Verarbeitung personenbezogener Daten bleibt trotz des Widerrufs
                rechtmäßig.
              </p>
              <h6>Recht auf Auskunft</h6>
              <p>
                Eine betroffene Person hat das Recht, von der CoMo Solution GmbH
                eine Bestätigung darüber zu verlangen, ob sie betreffende
                personenbezogene Daten verarbeitet werden. Wenn dies der Fall
                ist, hat eine betroffene Person ein Recht auf Auskunft, um
                welche personenbezogenen Daten es sich handelt und für welche
                Zwecke diese verarbeitet werden. Sie hat außerdem ein Recht auf
                Auskunft über die Dauer der geplanten Speicherung dieser Daten
                bzw. welche Kriterien für die Festlegung der Speicherdauer
                angewendet werden.
              </p>
              <h6>Recht auf Datenübertragbarkeit</h6>
              <p>
                Betroffene Personen haben ein Recht auf Datenübertragbarkeit im
                Rahmen der gesetzlichen Vorgaben.
              </p>
              <h6>Recht auf Beschwerde bei einer Aufsichtsbehörde</h6>
              <p>
                Eine betroffene Person hat das Recht, sich über die Verarbeitung
                personenbezogener Daten durch die CoMo Solution GmbH bei einer
                Aufsichtsbehörde für den Datenschutz zu beschweren.
              </p>
              <h5>Bereitstellung der Website und Erstellung von Logfiles</h5>
              <h6>Umfang der Verarbeitung</h6>
              <p>
                Bei jedem Besuch unserer Webseite erfasst unser System (das ist
                der Webserver) automatisiert Daten und Informationen vom
                Computersystem des aufrufenden Rechners.
              </p>
              <p>Folgende Daten werden hierbei erhoben:</p>
              <ul>
                <li>
                  Informationen über den Browsertyp und die verwendete Version
                </li>
                <li>Das Betriebssystem des Besuchers </li>
                <li>Den Internet-Service-Provider des Besuchers </li>
                <li>Die IP-Adresse des Besuchers </li>
                <li>Datum und Uhrzeit des Zugriffs </li>
                <li>
                  Websites, von denen das System des Besuchers auf unsere
                  Webseite gelangt
                </li>
                <li>
                  Websites, die vom System des Besuchers über unsere Website
                  aufgerufen werden
                </li>
              </ul>
              <p>
                Die Daten werden ebenfalls in den Logfiles unseres Systems
                gespeichert. Eine Speicherung dieser Daten zusammen mit anderen
                personenbezogenen Daten des Nutzers findet nicht statt.
              </p>
              <h6>Rechtsgrundlage für die Verarbeitung</h6>
              <p>
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <h6>Zweck der Verarbeitung</h6>
              <p>
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist notwendig, um eine Auslieferung der Website an den Rechner
                des Besuchers zu ermöglichen. Hierfür muss die IP-Adresse des
                Nutzers für die Dauer der Sitzung gespeichert bleiben.
              </p>
              <p>
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit
                der Website sicherzustellen. Zudem dienen uns die Daten zur
                Optimierung der Website und zur Sicherstellung der Sicherheit
                unserer informationstechnischen Systeme. Eine Auswertung der
                Daten zu Marketingzwecken findet in diesem Zusammenhang nicht
                statt.
              </p>
              <p>
                In diesen Zwecken liegt auch unser berechtigtes Interesse an der
                Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <h6>Dauer der Speicherung der personenbezogenen Daten</h6>
              <p>
                Die Daten werden gelöscht, wenn die jeweilige Sitzung beendet
                ist, d.h. wenn eine Besucher unsere Webseite wieder verlässt.
              </p>
              <p>
                Im Falle einer Speicherung der Daten in Logfiles werden diese
                nach spätestens sieben Tagen gelöscht. Eine darüberhinausgehende
                Speicherung ist möglich. In diesem Fall werden die IP-Adressen
                der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des
                aufrufenden Rechners nicht mehr möglich ist.
              </p>
              <h5>Verwendung von Cookies</h5>
              <h6>Umfang der Verarbeitung</h6>
              <p>
                Wir setzen Cookies ein, um unsere Website technisch
                funktionsfähig und nutzerfreundlich zu gestalten. Einige
                Elemente unserer Webseite erfordern es, dass der aufrufende
                Browser auch nach einem Seitenwechsel identifiziert werden kann.
                In den Cookies werden dabei folgende Daten gespeichert und
                übermittelt:
              </p>
              <ul>
                <li>Log-In-Informationen</li>
                <li>Sitzungseinstellungen</li>
              </ul>
              <p>Eine Verwendung von Cookies zu Werbezwecken erfolgt nicht.</p>
              <h6>Rechtsgrundlage für die Verarbeitung</h6>
              <p>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <h6>Zweck der Verarbeitung</h6>
              <p>
                Der generelle Zweck der Verwendung technisch notwendiger Cookies
                ist, die Nutzung von Websites für die Nutzer zu vereinfachen.
                Einige Funktionen unserer Webseite können ohne den Einsatz von
                Cookies nicht angeboten werden. Für diese ist es erforderlich,
                dass der Browser auch nach einem Seitenwechsel wiedererkannt
                wird. In diesen Zwecken liegt auch unser berechtigtes Interesse
                in der Verarbeitung der personenbezogenen Daten nach Art. 6 Abs.
                1 lit. f DSGVO.
              </p>
              <h6>Dauer der Speicherung der personenbezogenen Daten</h6>
              <p>
                Cookies werden auf dem Rechner des Besuchers gespeichert und von
                diesem an unsere Seite übermittelt. Daher haben Sie als Besucher
                unserer Webseite auch die volle Kontrolle über die Verwendung
                von Cookies. Durch eine Änderung der Einstellungen in Ihrem
                Internetbrowser können Sie die Übertragung von Cookies
                deaktivieren oder einschränken. Bereits gespeicherte Cookies
                können jederzeit gelöscht werden. Dies kann auch automatisiert
                erfolgen. Werden Cookies für unsere Website deaktiviert, können
                möglicherweise nicht mehr alle Funktionen der Website
                vollumfänglich genutzt werden.
              </p>
              <h5>Webanalyse</h5>
              <p>
                Mit Ihrer Einwilligung verwenden wir die Open-Source-Software
                Matomo zur Analyse und statistischen Auswertung der Nutzung der
                Website. Hierzu werden Cookies eingesetzt. Die dadurch
                erhaltenen Informationen über die Websitenutzung werden
                ausschließlich an unsere Server übertragen und in pseudonymen
                Nutzungsprofilen zusammengefasst. Die Daten verwenden wir zur
                Auswertung der Nutzung der Website. Eine Weitergabe der
                erfassten Daten an Dritte erfolgt nicht.
              </p>
              <p>
                Die IP-Adressen werden anonymisiert (IPMasking), sodass eine
                Zuordnung zu einzelnen Nutzern nicht möglich ist.
              </p>
              <p>
                Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 S. 1 lit. a DSGVO. Wir verfolgen damit unser berechtigtes
                Interesse an der Optimierung unserer Webseite für unsere
                Außendarstellung.
              </p>
              <p>
                Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
                Cookies in Ihrem Browser löschen oder Ihre
                Datenschutzeinstellungen ändern.
              </p>
              <h5>Newsletter</h5>
              <p>
                Wir bieten keinen Newsletter an und verarbeiten folglich auch
                keine personenbezogenen Daten.
              </p>
              <h5>eMail-Kontakt</h5>
              <h6>Umfang der Verarbeitung</h6>
              <p>
                Auf unserer Webseite ist eine Kontaktaufnahme über die
                bereitgestellte eMail-Adresse möglich. In diesem Fall werden die
                mit der eMail übermittelten personenbezogenen Daten des
                Besuchers gespeichert. Es erfolgt in diesem Zusammenhang keine
                Weitergabe der Daten an Dritte. Die Daten werden ausschließlich
                für die Verarbeitung der Kontaktpflege verwendet.
              </p>
              <h6>Rechtsgrundlage für die Datenverarbeitung</h6>
              <p>
                Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge
                einer Übersendung eine eMail übermittelt werden, ist Art. 6 Abs.
                1 lit. f DSGVO.
              </p>
              <h6>Zweck der Datenverarbeitung</h6>
              <p>
                Die Verarbeitung der personenbezogenen Daten dient
                ausschließlich zur Bearbeitung der Kontaktaufnahme. Hierin liegt
                auch das erforderliche berechtigte Interesse an der Verarbeitung
                der Daten.
              </p>
              <h6>Dauer der Speicherung der personenbezogenen Daten</h6>
              <p>
                Die personenbezogenen Daten, die per eMail übersandt wurden,
                werden gelöscht, wenn die jeweilige Konversation mit dem
                Besucher beendet ist. Beendet ist die Konversation dann, wenn
                sich aus den Umständen entnehmen lässt, dass der zugrunde
                liegende Sachverhalt abschließend geklärt ist.
              </p>
              <h5>Verarbeitung außerhalb der Europäischen Union</h5>
              <p>
                Eine Verarbeitung außerhalb der europäischen Union findet
                grundsätzlich nicht durch uns statt.
              </p>
              <h5>Änderung dieser Datenschutzhinweise</h5>
              <p>
                Diese Datenschutzhinweise werden bei Änderungen an der Webseite
                oder bei sonstigen Anlässen, die dies erforderlich machen,
                überarbeitet. Die Datenschutzhinweise auf dieser Webseite
                stellen die jeweils aktuelle Version dar.
              </p>
              <p>Stand: März 2024</p>
            </div>
          </div>
        </Collapse>
      </footer>
    </div>
  );
}
