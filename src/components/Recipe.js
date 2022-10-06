import React from 'react'

function RecipeIndex({alphaIndex}) {
    const alpha =['A','B','C','D','E','F','G','H','I','J','H','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let num = 0

  return (
    <>
        {
            alpha.map((item) =>{
                return(
                    <div className="numBox" key={num++} onClick={() => alphaIndex(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export default RecipeIndex;