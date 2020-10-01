import React from 'react';
// import { useSelector} from 'react-redux';
import {EnvironmentOutlined, MessageOutlined, WifiOutlined, SmileOutlined} from '@ant-design/icons';

import {PageHeader, Tabs, Descriptions, Tag, Rate} from 'antd'
import '../styles/coffeeShopCard.css'
// import CsMediaBar from './csMediaBar'
import NewComment from './NewComment'
import CommentListing from './CommentListing'
import FavButton from './FavButton'
// import AOS from 'aos';
import 'aos/dist/aos.css'; 
const { TabPane } = Tabs;


export default function CoffeeShopCard({ external_id, name, image_url, location, rating, comments}) {
    // useEffect(() => {
    //     AOS.init({duration: 2000})
    // },[])

    // console.log(location, comments)
    return(
       

        <div className="csCard" data-aos="fade-up"
        data-aos-duration="3000">
                <PageHeader
                className="cardHeader"
                title={name}
                
                tags={[<Tag icon={<WifiOutlined />}color="#608072">Wifi</Tag>,<Tag icon={<SmileOutlined />} color="#c0dadd"> Bathroom</Tag> ]}
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
                        column={2}
                        >

                            <Descriptions.item label="Address"> {location} NY </Descriptions.item>

                                <Descriptions.item label="Rating">
                                    <Rate disabled allowHalf defaultValue={Number(rating)}/>
                                </Descriptions.item> 

                        </Descriptions>
                        <div className="imgContainer">
                            <img className="cImg" src={image_url} alt={name} />
                        </div>
                       

                    </TabPane>
                      

                   <TabPane 
                   tab={<MessageOutlined />}
                   key="2"
                   >   
                   <div className="cmtSection">

                        <CommentListing location={location} comments={comments}/>
                        <NewComment external_id={external_id}/>
                   </div>
                   </TabPane>

                   {/* <TabPane 
                   tab={<ShareAltOutlined />}
                   key="3"
                   >
                        <CsMediaBar shop={props.shop}/>

                   </TabPane> */}
                  
                    
                </Tabs>



            
            
          
            


            
        </div>
    )
}