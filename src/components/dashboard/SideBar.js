import {Menu} from "antd";
import React from "react";
import {Layout} from "antd";
import { TeamOutlined , UserOutlined,RocketTwoTone, HomeOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
function SideBar()
{
    const histoty = useNavigate();
        const redirectButton =(route) =>
        {
            histoty(route);
        }
    const options=[
        {
            icon:React.createElement(HomeOutlined),
            label:"Home",
            key :0,
            onClick:()=>{redirectButton("/")}
        },
        {
            icon :React.createElement(UserOutlined),
            label:"participants",
            key :1,
            onClick:()=>{redirectButton("/participant")}
        },
        {
            icon :React.createElement(RocketTwoTone),
            label:"work shop",
            key :2,
            onClick:()=>{redirectButton("/workshop")}
        },
        {
            icon :React.createElement(TeamOutlined),
            label:"volunteers",
            key :3,
            onClick:()=>{redirectButton("/volunteerspage")}
        }
    ]
    return (
        <>
        <Layout.Sider
          width={200}
          style={{
            overflow: 'auto',
          height: '100vh',
          }}
        >
            <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,

            }}
            items={options}
          />
          </Layout.Sider>
        </>
    );
}
export default SideBar;