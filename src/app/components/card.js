import Image from "next/image"

export default function card(){
    return (
        
        <div className="container-fluid">
        <div className="row g-2">
            <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/maxresdefault (1).jpg" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">The Angler</h5>
                    <p className="card-text">This boss is found in the first map of the game and the advantage is that the animal cards in the player's deck are turned into gold cards that the player consoles the card and must adapt to win the battle...</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>

        <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/maxresdefault.jpg" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">The Prospector</h5>
                    <p className="card-text">This boss can use the ability to steal cards from the player's deck. The boss will choose a card that the player has placed on the field and attempt to move it to their side, requiring players to be careful when placing cards.</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/Inscryption_part_9_th.webp" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">P03</h5>
                    <p className="card-text">P03 is one of the main characters in the game "Inscryption", appearing in the second part of the game called "Botopia." P03 is one of the four Scrybes (Card Writers) that control the world of Inscryption. In the story, P03 is a Scribe who specializes in machinery and technology, controlling Robot Cards and has the ability to control various machines in the game.</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

