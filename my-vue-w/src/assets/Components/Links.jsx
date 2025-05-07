import './designs/links.css';
import { MdOutlineInsertLink } from "react-icons/md";


const Links = () => {
    return (
            <div className="links">
                <div className="container">
                    <div className="links-wrapper">
                            <h3 className='links-title'>Foydali havolalar</h3>
                            <ul className='links-list'>
                                <li className='links-list-item'>
                                    <div className='links-cards'>
                                        <div className='link-c-t'>
                                            <img src="https://senat.uz/media/post/images/photo6.png" alt="links-photo-1" width={80} height={80} />
                                            <p>Yagona interaktiv davlat xizmatlari portali</p>
                                        </div>
                                       
                                        <div className='link-c-b'>
                                        <MdOutlineInsertLink />
                                       <a href="https://my.gov.uz/">
                                       <p className='l-c-b'>https://my.gov.uz</p></a>
                                       </div>
                                    </div>
                                    </li>

                                    <li className='links-list-item'>
                                    <div className='links-cards'>
                                        <div className='link-c-t'>
                                            <img src="https://senat.uz/media/post/images/ZLV2aTHWKCaJvb67sSpRo0k8R1WGal.jpg" alt="links-photo-1" width={80} height={80} />
                                            <p>Taraqqiyot strategiyasi</p>
                                        </div>
                                       
                                        <div className='link-c-b'>
                                        <MdOutlineInsertLink />
                                       <a href="https://strategy.uz/"><p className='l-c-b'>https://strategy.uz</p></a>
                                       </div>
                                    </div>
                                    </li>

                                    <li className='links-list-item'>
                                    <div className='links-cards'>
                                        <div className='link-c-t'>
                                            <img src="https://senat.uz/media/post/images/logo-1671617631.png" alt="links-photo-1" width={80} height={80} />
                                            <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
                                        </div>
                                       <div className='link-c-b'>
                                        <MdOutlineInsertLink />
                                        <a href="https://www.president.uz/"><p className='l-c-b'>https://www.president.uz</p></a> 

                                       </div>
                                    
                                    </div>
                                    </li>

                                    <li className='links-list-item'>
                                    <div className='links-cards'>
                                        <div className='link-c-t'>
                                            <img src="https://senat.uz/media/post/images/logo-1671617631.png" alt="links-photo-1" width={80} height={80} />
                                            <p>Jamoaviy murojaatlar portali</p>
                                        </div>
                                       
                                        <div className='link-c-b'>
                                        <MdOutlineInsertLink />
                                        <a href="https://meningfikrim.uz/"><p className='l-c-b'>https://meningfikrim.uz</p></a> 
                                       </div>
                                    </div>
                                    </li>
                            </ul>

                    </div>
                </div>
            </div>


    )
}
export default Links;