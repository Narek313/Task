import React from 'react'
import './Products.css'
import { Items } from './Items'
import Button from '../Button/Button'

export default function Products() {
    return (
        <section className='products'>
            <h1>Նմանատիպ ապրանքատեսակներ</h1>
            <div className='items'>
            <i class="far fa-registered"/>
                {Items.map((elem, index) => {
                    return (
                        <div key={index} className = {`items-list item${index}`}>
                            <div className={`img image${index}`}></div>
                            <p>{elem.title}</p>
                            <span className='prevCost'>{elem.prevCost}</span>
                            <span className='cost'>{elem.cost}</span>
                            <Button cls='product' text="Ավելացնել զամբյուղ" type="small"/>
                        </div>
                    )
                })}
            </div>
            <Button text="Տեսնել բոլորը" type="small" cls="more"/>
        </section>
    )
}
