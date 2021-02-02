import React,{ useState } from 'react';
import { useMyContext } from '../../MyContext'
import './Shopping.css';
import Image1 from '../img/img-1.jpg'
import Image2 from '../img/img-2.jpg'
import Image3 from '../img/img-3.jpg'
import Image4 from '../img/img-4.jpg'

export default function Shopping() {

    const context = useMyContext();

    const [image1, setImage1] = useState(Image1)
    const [image2, setImage2] = useState(Image2)
    const [image3, setImage3] = useState(Image3)
    const [image4, setImage4] = useState(Image4)
    
    const [heart,setHeart] = useState(false);
    const [readMore, setReadMore] = useState(false);

    const value = !readMore ? "Կարդալ ավելին" : "Փակել"
    
    const heartClick = () => setHeart(!heart);
    const moreClick = () => {
        setReadMore(!readMore)
    }

    const imageClick = (a) => {
        setImage1(a)
        if(a === image2) {
            setImage2(image1)
        } else if(a === image3) {
            setImage3(image1)
        } else { setImage4(image1) }
    }


    return (
        <section className='shop'>
            <div className='shopping'>
                <i class="fas fa-arrow-left"/>
                <div className='item-images'>
                <div className='img1' style={{
                    backgroundImage: `url(${image1})`
                }}>
                    <i class={heart ? "fas fa-heart red" : "fas fa-heart"} onClick={heartClick}/>
                </div>
                <div className='img2' style={{
                    backgroundImage: `url(${image2})`
                }} onClick={() => imageClick(image2)}></div>
                <div className='img3' style={{
                    backgroundImage: `url(${image3})`
                }} onClick={() => imageClick(image3)}></div>
                <div className='img4'style={{
                    backgroundImage: `url(${image4})`
                }} onClick={() => imageClick(image4)}></div>
            </div>
            <div className='about'>
                <h3>Ավեն արևապաշտպան կրեմ 10մլ</h3>
                <p className='value'>29,870 AMD</p>
                <p className='cost1'>10մլ<span>60.000AMD 20մլ</span></p>
                <div className='lists'>
                    <ul className='list1'>
                        <li>Կատեգորիա</li>
                        <li>Արտադրող</li>
                        <li>Բրենդ</li>
                        <li>Առկայություն մոտակա դեղատանը</li>
                        <li>Ակտիվ ինգրիդիենտ</li>
                    </ul>
                    <ul className='list2'>
                        <li>Գեղեցկություն</li>
                        <li>"ԱԼԿՈՆ" ՍՊԸ</li>
                        <li>Avene</li>
                        <li>Տիգրան Մեծ 74, Մաշտոց 48</li>
                        <li>Տիգրան Մեծ 74, Մաշտոց 48</li>
                    </ul>
                </div>
                <div className="buttons">
                    <div className="count-btn">
                        <span className='minus' onClick={context.minus}>-</span><input type="text" name="count" id="count" value={context.count}/><span className='plus' onClick={context.plus}>+</span>
                    </div>
                    <button className='btn-count' onClick={context.countClick}>Ավելացնել զամբյուղ</button>
                </div>
            </div>
        </div>
                <div className="description">
                    <p className='vernagir'>Նկարագրություն</p>
                    <p className='text'>Գնելուց առաջ կարդացեք նախազգուշացումները։ Հետևեք օգտագործման հրահանգներին։  Տե՛ս նախազգուշացումները։ Արևապաշտպան միջոցները արևի պաշտպանության միայն մեկ մասն են։ Խուսափեք արևի երկարատև ազդեցությունից։ Արևից արդյունավետ պաշտպանության համար անհրաժեշտ է կրեմի հաճախակի օգտագործումը։ Արևի տակ աշխատելիս անհրաժեշտ է կրել պաշտպանիչ հագուստ,
                        {!readMore && <span>...</span>}
                        {readMore && <p className='readmore'>գլխարկ և ակնոց։ Գնելուց առաջ կարդացեք նախազգուշացումները։ Հետևեք օգտագործման հրահանգներին։ Տե՛ս նախազգուշացումները։ Արևապաշտպան միջոցները արևի պաշտպանության միայն մեկ մասն են։ Խուսափեք արևի երկարատև ազդեցությունից։ Արևից արդյունավետ պաշտպանության համար անհրաժեշտ է կրեմի հաճախակի օգտագործումը։ Արևի տակ աշխատելիս անհրաժեշտ է կրել պաշտպանիչ հագուստ, գլխարկ և ակնոց։ Գնելուց առաջ կարդացեք նախազգուշացումները։ Հետևեք օգտագործման հրահանգներին։ Տե՛ս նախազգուշացումները։ Արևապաշտպան միջոցները արևի պաշտպանության միայն մեկ մասն են։ Խուսափեք արևի երկարատև ազդեցությունից։ Արևից արդյունավետ պաշտպանության համար անհրաժեշտ է կրեմի հաճախակի օգտագործումը։ Արևի տակ աշխատելիս անհրաժեշտ է կրել պաշտպանիչ հագուստ, գլխարկ և ակնոց։</p>}                       
                        <button className='btn-readmore' onClick={moreClick}>{value}</button>
                    </p>
                </div>
        </section>
    )
}
