import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import {  Card, Avatar, Popconfirm } from 'antd';
import '../styles/profile.css'
import 'aos/dist/aos.css'; 
import {removeFavorite } from '../api/index'
import { removeFav } from '../store/userActions'
const { Meta } = Card;



export default function UsersFavorites (props){
 
    const dispatch = useDispatch()
    const {external_id, name, image_url, location, rating} = props.shop
    // const categorieArray = categories.split(",")
    // console.log("from the faves", props.shop)
    const handleDelete = ((e) => {
        // do delete method here
        removeFavorite(external_id)
        .then((removedFav) => {
            dispatch(removeFav(removedFav))
        }
        )
    }
    )
   
    return (
        <div 
        className ="faveShop" 
       
        >
            <Card
           
             style={{ width: 300 }}
             cover={
               <img
                 alt={name}
                 src={image_url}
                />}
            actions={[
                (<Popconfirm 
                title="Are you sure you want to remove from favorites?"
                onConfirm={handleDelete}
                okText="Yes"
                cancelText= "No"
                key={"a"}
                >
                    <MehOutlined key="delete" />
                </Popconfirm>),
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
             >
                <Meta
                key={external_id}
                avatar= {<Avatar src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>}
                title={name.toUpperCase()}
                description={
                    [<p>{location}</p>,
                    <p>{rating}</p>]
                }
                >
                </Meta>
            </Card>
         
            
            
        </div>
    )
}
