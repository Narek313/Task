import React from 'react'
import Button from '../Button/Button'
import './Info.css'

export default function Info() {
    return (
        <section className='info'>
            <div className="box1">
                <h5>AlfaPharm</h5>
                <p>"Ալֆա Ֆարմ" դեղատների ցանցը բաղկացած է 170-ից ավել դեղատներից, այդպիսով հանդիսանալով հանրապետությունում ամենամեծ և աշխարհագրորեն սփռված ցանցը։</p>
                <div className='links app'>
                <i class="fab fa-apple"/>
                <span className="above">Download on the</span>
                <span className="under">App Store</span>
                </div>
                <div className='links google'>
                <i class="fab fa-google-play"/>
                <span className="above">GET IT ON</span>
                <span className="under">Google Play</span>
                </div>
            </div>
            <div className="box2">
                <h1>Ալֆա քարտ</h1>
                <ul>
                    <li id="bold">Ինչ է Ալֆա Քարտը</li>
                    <li>Աշխատանք</li>
                    <li>Մեր մասին</li>
                    <li>Նորություններ</li>
                    <li>Գաղտնիության քաղաքականություն</li>
                    <li>Օգտագործման պայմանները</li>
                </ul>
            </div>
            <div className="box3">
                <h1>Կապ</h1>
                <ul>
                    <li><i class="fas fa-phone-alt"/>+374 60700500</li>
                    <li><i class="far fa-envelope"/>alfapharm@alfapharm.am</li>
                    <li><i class="fas fa-map-marker-alt"/> ՀՀ ք․ Երևան, Շիրակի փ․ 1/68 </li>
                </ul>
                <Button text="Պատվիրել զանգ" cls="info1"/>
                <Button text="Հրավիրել" cls="info2"/>
            </div>
        </section>
    )
}
