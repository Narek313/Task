import React,{ useState } from 'react';
import Button from '../Button/Button';
import './Shopping.css';

export default function Shopping() {

    const [heart,setHeart] = useState(false);
    const [count,setCount] = useState(1);

    const heartClick = () => setHeart(!heart);
    const minus = () => {
        if(count > 0) setCount(count - 1)
    };
    const plus = () => setCount(count + 1);

    return (
        <section className='shop'>
        <div className='shopping'>
            <i class="fas fa-arrow-left"/>
            <div className='item-images'>
                <div className='img1'>
                    <i class={heart ? "fas fa-heart red" : "fas fa-heart"} onClick={heartClick}/>
                </div>
                <div className='img2'></div>
                <div className='img3'></div>
                <div className='img4'></div>
            </div>
            <div className='about'>
                <h6>Ավեն արևապաշտպան կրեմ 10մլ</h6>
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
                        <span className='minus' onClick={minus}>-</span><input type="text" name="count" id="count" placeholder={count}/><span className='plus' onClick={plus}>+</span>
                    </div>
                    <Button type="big" text="Ավելացնել զամբյուղ" cls="first"/>
                </div>
            </div>
        </div>
                <div className="description">
                    <p className='vernagir'>Նկարագրություն</p>
                    <p className='text'>Գնելուց առաջ կարդացեք նախազգուշացումները։ Հետևեք օգտագործման հրահանգներին։ Տե՛ս նախազգուշացումները։ Արևապաշտպան միջոցները արևի պաշտպանության միայն մեկ մասն են։ Խուսափեք արևի երկարատև ազդեցությունից։ Արևից արդյունավետ պաշտպանության համար անհրաժեշտ է կրեմի հաճախակի օգտագործումը։ Արևի տակ աշխատելիս անհրաժեշտ է կրել պաշտպանիչ հագուստ, գլխարկ և ակնոց։</p>
                </div>
        </section>
    )
}
