import React from 'react'

const SecoundCard = ({itemOne,imgurl,itemTwo,itemThird,footeritem}) => {
  return (
    <div>
        <div class="card" style={{width: "18rem"}}>
            <img src={imgurl}/>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{itemOne}</li>
    <li class="list-group-item">{itemTwo}</li>
    <li class="list-group-item">{itemThird}</li>

  </ul>
  <div class="card-footer">
  {footeritem}
  </div>
</div>
    </div>
  )
}

export default SecoundCard