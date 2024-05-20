import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { useRef } from 'react';
import { useEffect } from 'react';

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null); // React 完成渲染后，endRef.current 被更新为实际的 DOM 元素引用。

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth"}); //使用 ?. 操作符是为了防止在某些情况下 endRef.current 仍然为 null 时调用 scrollIntoView 方法导致的运行时错误。即使 useRef 被初始设置为 null，在 React 完成渲染前的一瞬间或在特殊情况下，仍然有可能出现 null 的情况，使用 ?. 操作符可以确保代码的健壮性和安全性。
  },[]);

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>cork</span>
            <p>hhhhhh</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>hhhhdddddddd</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={ (e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat