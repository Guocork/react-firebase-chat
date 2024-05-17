import { useState } from 'react'
import './chatlist.css'

const Chatlist = () => {

  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatlist'>
      {/** 这是搜索栏 */}
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add'
          onClick={() => setAddMode((prev) => !prev)} />
      </div>

      {/** 这是用户框 */}
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>liu honghong</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chatlist