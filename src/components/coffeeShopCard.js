import React from 'react';
import {EnvironmentOutlined, MessageOutlined,  SmileOutlined, BarsOutlined} from '@ant-design/icons';

import {PageHeader, Tabs, Descriptions, Tag, Rate} from 'antd'
import '../styles/coffeeShopCard.css'
// import CsMediaBar from './csMediaBar'
import NewComment from './NewComment'
import CommentListing from './CommentListing'
import FavButton from './FavButton'
// import AOS from 'aos';
import 'aos/dist/aos.css'; 
const { TabPane } = Tabs;


export default function CoffeeShopCard({ id, categories, external_id, name, image_url, location, rating, comments}) {
    // useEffect(() => {
    //     AOS.init({duration: 2000})
    // },[])
    const colors = [
        "#608072",
        "#c0dadd",
        "#BEAB9C"
    ]

    const renderTag = () => {
        return categorieArray.map((categorie) => (
        <Tag icon={<SmileOutlined />} color={colors[categorieArray.indexOf(categorie)]}> {categorie}</Tag>
        ))
    }
    
    const categorieArray = categories.split(",")
    return(
       

        <div className="csCard" data-aos="fade-up"
        data-aos-duration="3000">
                <PageHeader
                className="cardHeader"
                title={name}
                
                tags={
                    // [<Tag icon={<WifiOutlined />}color="#608072">Wifi</Tag>,
                    // <Tag icon={<SmileOutlined />} color="#c0dadd"> Bathroom</Tag>,]
                    renderTag()
                    }
                extra={<FavButton shopId={external_id}/>}
                />
               <hr/>

                <Tabs tabPosition="left">
                    {/* <div> */}
                    <TabPane 
                    tab={<EnvironmentOutlined />} key="1"
                    >
                         

                        <Descriptions
                        size="middle" 
                        column={3}
                        >
                            <Descriptions.item label="Name"> {name} </Descriptions.item> 

                            <Descriptions.item label="Address"> {location} </Descriptions.item>

                                <Descriptions.item label="Rating">
                                    <Rate disabled allowHalf defaultValue={Number(rating)}/>
                                </Descriptions.item> 

                        </Descriptions>
                        <div className="imgContainer">
                            <img
                            width={200}
                            className="cImg" 
                            src={image_url} 
                            alt={name} />
                        </div>
                       

                    </TabPane>
                      

                   <TabPane 
                   tab={<MessageOutlined />}
                   key="2"
                   >   
                   <div className="cmtSection">

                        <CommentListing location={location} comments={comments}/>
                        <NewComment coffee_shop_id={id}/>
                   </div>
                   </TabPane>

                    <TabPane  
                   tab={<BarsOutlined />}
                   key="3"
                   >
                        <h1>{name} Menu Items</h1>
                        <br/>
                        <p> 1. Coffee 3.25 </p>

                   </TabPane> 
                  
                    
                </Tabs>



            
            
          
            


            
        </div>
    )
}