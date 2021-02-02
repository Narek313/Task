import React, { useState } from 'react'
import './Products.css'
import { Items } from './Items'

export default function Products() {

    const [seeMore,setSeeMore] = useState(false);

    const value = seeMore ? 'Փակել' : 'Տեսնել բոլորը'
    const filter = Items.filter((elem, i) => i < 4)
    const products = seeMore ? Items : filter

    const seeMoreClick = () => {
        setSeeMore(!seeMore)
    }


    return (
        <section className='products'>
            <h1>Նմանատիպ ապրանքատեսակներ</h1>
            <div className='items'>
                {products.map((elem, index) => {
                    return (
                        <div key={index} className = {`items-list item${index}`}>
                            <div className={`img image${index}`}></div>
                            <p>{elem.title}{index === 1 && <i class="far fa-registered"/>}</p>
                            <span className='prevCost'>{elem.prevCost}</span>
                            <span className='cost'>{elem.cost}</span>
                            <button className='btn-product'>Ավելացնել զամբյուղ</button>
                        </div>
                    )
                })}
            </div>
            <button className='btn-seeMore' onClick={seeMoreClick}>{value}</button>
        </section>
    )
}