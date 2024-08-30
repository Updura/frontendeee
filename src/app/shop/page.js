import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function about() {
  return (
<>
<br /><br/><br/>
   <div className="d-flex position-relative">
  <img src="assets/img/Scrybes.webp" className="flex-shrink-0 me-3 mx-3" alt="..." width={120} height={120}/>
  <div>
    <h5 className="mt-0 .text-info"> 4 Horsemen of the Apocalypse</h5>
    <p>1. Leshy

Scribe of Beasts: Leshy controls Beast Cards and has a theme of nature and wild animals.
Personality: Leshy is a character with a vague and creepy storyteller personality. She loves nature and sees animals as superior to humans.
Ability: Leshy can change cards on the field into animals and often uses cards with strong attacks but special conditions.
2. Grimora

Scribe of the Dead: Grimora controls Undead Cards and has a theme of death and resurrection.
Personality: Grimora is a character with a gentle and gentle personality, but is also mysterious and scary due to its connection to death.
Ability: Grimora can use cards that are resurrected after they have been destroyed, making her deck flexible and challenging for players to manage.
3. P03

Scribe of Technology: P03 controls Robot Cards and has a theme of technology and machinery.
Personality: P03 has a cunning and ambitious personality. Determined to dominate the world of Inscryption by replacing the other Scrybes himself.
Ability: P03 uses cards that require Energy to play and employs complex strategies that emphasize the use of machines and technology to control the field.
4. Magnificus
Scribe of Magicks: Magnificus controls Magic Cards, which are themed around magic and spellcasting.
Personality: Magnificus is a mysterious and powerful wizard who believes in the superiority of magic over everything else.
Ability: Magnificus uses Magic Cards that require careful calculation and resource management, and his cards can make a huge difference on the battlefield..</p>
    <a href="#" className="stretched-link">Go somewhere มาได้ถ้าอยากเจอน่ะฮ่ะ</a>
  </div>
</div>

<br /><br/><br/>

</>
  );
}
