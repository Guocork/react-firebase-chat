import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

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


    const handleRegister = async (e) => {
        e.preventDefault(); // 阻止事件的默认行文 阻止提交表单在页面的重新刷新
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, "users",res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked:[],  // 这是被用户屏蔽的其他用户的id列表
            });

            await setDoc(doc(db, "userschats",res.user.uid), {
                chats:[]
            });

            toast.success("Account created! You can login now!")
        } catch(err) {
            console.log(err);
            toast.error(err.message)
        }
       
    };

    const handleLogin = e => {
        e.preventDefault();
    };

    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name="email" placeholder='Email' />
                    <input type="password" placeholder='Password' name='password' />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
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