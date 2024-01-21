import React from 'react'
import { useState } from 'react'

function LikeButton() {
    let styles = {
        textAlign: "center"
    }

    const [isLiked, setIsLiked] = useState(false)

    let toggelLike = ()=>{
        // setIsLiked(isLiked+1)
        console.log("logged");
    }

  return (
    <>
        <p style={styles}  onClick={toggelLike}>
            <i className='fa-regular fa-heart'>Like{isLiked}</i>
        </p>
    
    </>
  )
}

export default LikeButton