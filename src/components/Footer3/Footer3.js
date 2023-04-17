import React from "react";
import { Link } from "react-router-dom";
import "./Footer3.css"

export const Footer3 = () => {
    return(
        <div className="container-Footer3">
            <div className="content-Footer3">
                <div className="linie-1-Footer3">
                    <div className="social-media-icon-link-Footer3">
                    <div className="titlu-social-media-icon-link-Footer3"><p>Urmărște-ne și pe:</p></div>
                        <div className="container-iconite-Footer3">
                            <div className="container-iconita" id="iconita-1"><Link to='/'><i class="fa-brands fa-facebook"></i></Link></div>
                            <div className="container-iconita"><Link to='/'><i class="fa-brands fa-youtube"></i></Link></div>
                            <div className="container-iconita"><Link to='/'><i class="fa-brands fa-instagram"></i></Link></div>
                            <div className="container-iconita"><Link to='/'><i class="fa-brands fa-tiktok"></i></Link></div>
                        </div>
                    </div>
                    <div className="appstore-google-play-Footer3">
                        <div className="titlu-appstore-google-play-Footer3"><p>descarca aplicatia mobila</p><p>LOS POLLOS HERMANOS!</p></div>
                        <div className="container-butoane-img">
                            <Link to='/'><img className="button-img" id="b1" src="./img/google_play.png"></img></Link>
                            <Link to='/'><img className="button-img" src="./img/apple_store.png"></img></Link>
                        </div>
                    </div>
                    <div className="feed-back-Footer3">
                        <div className="titlu-feed-back-Footer3"><p>SPUNE-NE CUM TE-AI SIMȚIT</p><p>LA NOI</p></div>
                        <div className="container-buton-feed-back-Footer3">
                            <div  className="container-2-buton-feed-back-Footer3">
                                <Link to='/'>oferă-ne feedback</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="linie-2-Footer3">
                        <Link to='/contact.restaurant'>Contact</Link>
                        <Link to='/livrare.restaurant'>Livrare</Link>
                        <Link to='/meniu.restaurant'>Meniu</Link>
                        <Link to='/despreNoi.restaurant'>Despre Noi</Link>
                        <Link to='/cariera.restaurant'>Cariera</Link>
                </div>
                <div className="linie-3-Footer3"> <p>©2023 LOS POLLOS HERMANOS.</p><p>TOATE DREPTURILE REZERVATE.</p></div>
            </div>
            
        </div>
    )
}