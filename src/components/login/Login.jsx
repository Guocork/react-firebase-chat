import { useState } from 'react'
import './login.css'

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    });

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],  // 用于后续处理 如存入服务器中
                url: URL.createObjectURL(e.target.files[0]) // 用与实时渲染显示
            })
        }
    };

    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back</h2>
                <form action="">
                    <input type="text" name="email" placeholder='Email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar}/>
                    <input type="text" name="username" placeholder='Username' />
                    <input type="text" name="email" placeholder='Email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login