import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function contect() {
  return (
<>
<br /><br/><br/>

  <div className="container-fluid">
<div className="row g-2">
<div className="col-md-4">
<figure className="figure">
  <img src="assets/img/Goat_Skull.webp" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">The door of truth is waiting for someone to open it.</figcaption>
</figure>
</div>

<div className="col-md-4">
<figure className="figure">
  <img src="assets/img/Inscryption_-_part_4_th.webp" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">The door to truth where something happens and light comes out.</figcaption>
    </figure>
  </div>
  
  <div className="col-md-4">
<figure className="figure">
  <img src="assets/img/Inscryption_Corpse_Pile.webp" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">Behind the door of truth, there is something that looks like a human being in the middle.</figcaption>
    </figure>
  </div>
  </div>
  </div>
  
<br /><br/><br/>

</>
  );
}
