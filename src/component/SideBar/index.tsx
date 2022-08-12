import React from "react";
import styled from "styled-components";
import { Answer } from '../../assets/Answer'
import { connect } from "react-redux";
import { clickSideBarAction } from '../../redux/actions/sideBarAction'
import { sideBarProps } from '../../GlobalInterface'
import andy from '../../assets/andychen.jpeg'

const SideBarCss = styled.div`
    min-width:296px;
    max-width:296px;
    height:100vh;
    position:relative;
    .logo{
        margin-top:32px;
        margin-left:32px;
    }
    ul{
        margin-top:24px;
    }
    li{
        display:flex;
        height:32px;
        margin-top:15px;
        padding-left:32px;
        i{
            font-size:22px;
            align-self: center;
        }
        div{
            margin-left:16px;
            align-self: center;
        }
    }
    .choose{
        border-left: 4px solid #198754
    }
    .user{
        margin-left:32px;
        margin-bottom:32px;
        display:flex;    
        position:absolute;
        bottom:0;
        img{
            height:40px;
            width:40px;
            border-radius:50px;
        }
        .userDetail{
            margin-left:16px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

        }
    }

`
interface SideBarProps {
    sideBarValue: sideBarProps[]
    clickSideBar: Function
}

const SideBar: React.FC<SideBarProps> = (props) => {
    const { sideBarValue, clickSideBar } = props

    return (
        <SideBarCss className="BGGray">
            <Answer PropsClassName="logo" />
            <ul>
                {sideBarValue.map((ele, idx) => (
                    <li onClick={(e: React.MouseEvent<HTMLLIElement>): void => {
                        clickSideBar(e.currentTarget.innerText)
                    }} key={idx} className={ele.choose ? "choose" : ""}>
                        <i className={ele.class}></i>
                        <div className="s16 Fblod">{ele.name}</div>
                    </li>
                ))}
            </ul>
            <div className="user">
                <img src={andy} alt="user_head_shop" />
                <div className="userDetail">
                    <div className="name s16 Fblod">Andy Chen</div>
                    <div className="mail s14">andy0401@mail.com</div>
                </div>
            </div>
        </SideBarCss>
    )

}

const mapStateToProps = (state: any) => ({
    sideBarValue: state.sideBar.sideBar,
})

export default connect(mapStateToProps, {
    clickSideBar: clickSideBarAction,
})(SideBar)