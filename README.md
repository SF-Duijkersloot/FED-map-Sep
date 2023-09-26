# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Sep Freek Duijkersloot

  #### Je startniveau:
  rood

  #### Je focus:
  ```javascript
surfacePlane()
```
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  [Link naar originele website](https://www.usedrop.io/organic-social)

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Ik heb de usedrop.io website getest op accesibilty met de WCAG guidelines. En de conclusie is eigenlijk dat er niet heel veel aandacht is besteedt aan het verbeteren van de accesibility.
De volgende punten vielen mij op:
  <ul>
    <li>Het is bijna ongmogelijk op te navigeren met TAB. Er zijn soms elementen die niet focus-able zijn er soms zijn er random elements die visueel er niet zijn, maar wel midden in de pagina zitten</li>
    <li>Er wordt geen goed gebruik gemaakt van list list items, waar het wel zou kunnen</li>
    <li>De alt properties zijn niet altijd goed aangegeven</li>
    <li>Geen één link opent op target, nu allemaal op _self</li>
    <li>Er is nu geen light/dark theme voorkeur en ook geen contrast optie</li>
  </ul>

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="images/page-breakdown.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="images/breakdown-screen-1.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="images/breakdown-screen-2.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Had eigenlijk geen moeite met veel van de site, had alleen een vraagje over hoe ik het beste een overlay kon maken met verschillende panels met sticky position.
Voor de rest gewoon bezig met css schrijven.


  ### Agenda voor meeting
  samen met je groepje opstellen

  **?? niet gedaan ??**

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Ik heb even met danny kunnen zitten en ik had een vraag over hoe ik het beste de scroll overlay kon maken.
  Ik heb toen een link gekregen met daarin een voorbeeld van hoe ze dit hadden gedaan met goede uitleg.
  uiteindelijk heb ik niks gedaan met die link en heb het gewoon zelf opgelost..

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb in principe bijna hele 1 pagina volledig kunnen opmaken met css, ook al begonnen met js voor de pagina, en het gaat allemaal wel prima.
  Alleen zat ik wel tijdje te strugglen met een gedeelte in mijn site waar een gedeelte met text in een sticky header omhoog schuift wanneer de panel die erbij hoort voor X % 
  in het scherm is. Eerst wou ik het doen met getBoundingClient.rect etc, en dan checken wanneer het de bovenkant van de viewport hit, maar dit werkt niet want elke panel is 
  sticky, dus ze zullen allemaal (3) de bovenkant raken, dus dat werkte niet. En dat is dus nog even proberen.
  Ook een probleem met die sticky header dus want die is ook sticky in de parent container. En ik wil dat de header op X hoogte eindigt in verhouding met de panel waar het      bij hoort. Maar wanneer ik naar beneden doorscroll, houdt de panel eerder op met scrollen en scrolled de sticky header verder door omdat die gewoon minder height heeft... 
  en het probleem is dat op de originele pagina, ze een niet hele mooie oplossing hiervoor hebben naar mijn mening, want ze gebruiken position fixed en laten de header gewoon   verdwijning zodra ze het niet meer in beeld willen hebben, maar dat is best wel visueel naar want het is best random dat het verdwijnt, dus ja ik wil het op een nette 
  manier oplossen
  

  ### Agenda voor meeting
  samen met je groepje opstellen

  **?? niet gedaan ??**
  
  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Met danny gesproken over de observation van de panels en observerAPI is waarschijnlijk wel het beste om te gebruiken, dus gewoon daarmee door proberen
  - Voor die sticky header heeft danny wel gezegd om het toch te doen met fixed position for een bepaald gedeelte van de scroll en daarna weer sticky om het zo visueel te laten lijken dat het goed werkt.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Heb de problemen van vorige week kunnen oplossen, was flink veel gezeik met die observerAPI omdat de panels allemaal position sticky hebben op top: 0, dus gaf steeds aan dat ze allemaal tegelijk zichtbaar waren, maar heb het eindelijk kunnen oplossen met hulp van onze vriend GPT.
Voor de rest heb ik nog hele pagina qua css en html af kunnen maken, dat ging voor de rest allemaal wel prima. 
Heb ook de rollover scroll kunnen maken voor twee p elements, zodat ze in verschillende richtingen gaan als je scrolled.
Heb ook nog het menu gemaakt, en dit is ook geen simpel menuutje, maar ik wou het graag echt mooi hebben, dus heb er wel even flink aan moeten zitten, maar is uitendelijk ook gelukt, en het menu zelf heeft al volgensmij 5 micro interacties, maar ja ging wel prima dus.
Nu bezig met de 2e pagina, helaas wel wat later begonnen, maar het koste gewoon veel tijd om de 1e pagina en het menu te maken. Maar ik denk dat het wel goed komt...
  

  ### Agenda voor meeting
  samen met je groepje opstellen
  
  **?? niet gedaan ??**
  
  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. MDN
  2. bron 2
  3. ...

</details>
