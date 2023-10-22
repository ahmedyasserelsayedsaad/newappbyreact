import React from 'react'
import SHData from '../myData/SHData';
import { Link } from 'react-router-dom';
import s18 from '../img/shoes/s18.jpg'
import s10 from '../img/shoes/s10.jpg'
import s8 from '../img/shoes/s8.jpg'
import { useRef, useState, useEffect } from 'react';
import '../css/home.css';
import '../css/shoes.css'
import { useDispatch } from 'react-redux';
import { addtocart } from '../rtk/sclices/CartSlices';
function Shoes() {
const dispatch=useDispatch();


    const [shoData, setShoData] = useState(SHData);
    const [query, setQuery] = useState('');
    const inpref = useRef(null);
    const MyFilter=(category)=>{
     if(category==='all'){
        setShoData(SHData)
     }else{
        const MyRes=shoData.filter((curelement)=>{
            return(
                curelement.category===category
            )
        });
        setShoData(MyRes)
     }
    }
    useEffect(() => {
        inpref.current.focus();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12 col-md-12">
                        <div className="heading">
                            <h1>our shoes department</h1>
                            <p>different Collection New Modern Desgin</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <input type="text" ref={inpref} placeholder='search by name ...' className='pp'
                        onChange={(e)=>setQuery(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 gap-2">
                        <div className="mybtn">
                            <button className='bhb' onClick={()=>setShoData(SHData)}>

                                all</button>
                            <button className='bhb' onClick={()=>MyFilter('football')} >
                                <img src={s18} alt="foot" />
                                football</button>
                            <button className='bhb' onClick={()=>MyFilter('shoes')}>
                                <img src={s10} alt="foot" />
                                shoes</button>
                            <button className='bhb' onClick={()=>MyFilter('running')}>
                                <img src={s8} alt="foot" />
                                running</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-5">
                    {
                        shoData.filter((product)=>product.title.toLocaleLowerCase().includes(query)).map((product) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 gap-3 mb-2" key={product.id}>
                                    <div class="card" style={{ width: "15rem;" }}>
                                        <img src={product.image01} class="card-img-top" alt={product.title} />
                                        <div class="card-body">
                                            <Link to={`/shoes/${product.id}`} style={{textDecoration:'none'}}>
                                            <h5 class="card-title"
                                             style={{color:'#088178',fontSize:'22px',textTransform:'capitalize',fontWeight:'700'}}>
                                                {product.title}</h5>
                                            </Link>
                                            
                                            <div className="info">
                                                <p className="card-text">{product.price}$</p>
                                                <Link  class="btn" onClick={()=>dispatch(addtocart(product))}><i class="fa-solid fa-cart-shopping"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                     {
                        shoData.filter((product)=>product.title.toLocaleLowerCase().includes(query)).map((product) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 gap-3 mb-2" key={product.id}>
                                    <div class="card" style={{ width: "15rem;" }}>
                                        <img src={product.image02} class="card-img-top" alt={product.title} />
                                        <div class="card-body">
                                            <Link to={`/shoes/${product.id}`} style={{textDecoration:'none'}}>
                                            <h5 class="card-title"
                                             style={{color:'#088178',fontSize:'22px',textTransform:'capitalize',fontWeight:'700'}}>
                                                {product.title}</h5>
                                            </Link>
                                            
                                            <div className="info">
                                                <p className="card-text">{product.price}$</p>
                                                <Link class="btn" onClick={()=>dispatch(addtocart(product))}><i class="fa-solid fa-cart-shopping"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shoes