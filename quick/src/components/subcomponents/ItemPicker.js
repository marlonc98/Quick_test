import React, { useState } from 'react';
import '../../styles/itemPicker.css';
import parse from 'html-react-parser';

function ItemPicker({ items, setPicked, inverse }) {
    const [current, setCurrent] = useState(0);
    function change(index) {
        setCurrent(index);
        if (setPicked != null) setPicked(index);
    }
    if(items == null || items.length<=0) return <div></div>
    return <div className="container minFullHeightVh">
        <div className={`row d-flex flex-wrap ${inverse ? 'flex-row-reverse' : ''}`}>
            <div className="col-12 col-md-4 ">
                {items.map((item, index) =>
                    <div className={`w-100 card hover p-3 mb-2 cardItemPicker ${index === current ? 'active' : ''}`} key={index} onClick={() => change(index)}>
                        <img className={`w-100 h-100 fitCover d-md-none ${index !== current ? 'd-none' : 'my-3 my-md-0'}`} src={items[current].image} />
                        <h4>{item.title}</h4>
                        <p className={index != current ? "d-md-none" : ""}>{item.subtitle} Medallas</p>
                    </div>
                )}
            </div>
            <div className="d-none d-md-block col-md-8">
                <div className="w-100 h-100 p-5 m80vh d-flex justify-content-center align-items-center" style={{ backgroundSize: "cover", backgroundImage: `url("${items[current].image}"` }} >
                    <div className="card">
                        <div className="card-body">
                            {parse(items[current].description)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ItemPicker;