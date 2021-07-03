import React from 'react'

const Contents = () => {
  return (
    <div className='contents_box'>
      {/* 앨범정보 */}
      <div className='info_box'>
        <div className='jacket_photo'></div>
        <div className='album_info'>
          <p className='album_name'>7th MINI ALBUM [DRIFT]</p>
          <span className='released'>Released:</span>
          <span> 2020.09.21</span>
        </div>
      </div>
      {/* 트랙리스트 */}
      <ul className='track_list'>
        <li>Blessing or Punishment</li>
        <li>In Sum</li>
        <li>Forest Freedom</li>
      </ul>
      {/* 곡설명 */}
      <div className='information'>
        <p>더보이즈(THE BOYZ) 7th MINI ALBUM [DRIFT]</p>
        <p>- 사랑에 빠져 잠 못이루는 소년들의 일기 [Drift]발매</p>
        <p>- 섬에 표류해 하늘밖에 바라볼 수 없는 외로운 소년의 사랑 [in sum]</p>
        <p>THE 시리즈를 통해 풋풋한 소년의 열정, 환상을 보여주고 reveal,the stealer에 이어 킹덤까지, 사랑을 향한 강한 갈망과 강렬한 퍼포먼스까지 선보인 더보이즈</p>
        <p>이제는 성장을 마친 단단한 소년의 마음을 가지고 있는 것 같았던 더보이즈 ! 사랑하는 사람 앞에서는 약해지고 아련하게 변신하는 앨범으로 돌아왔다. 날 사랑하지 않는 사람을 사랑하는 것을 마치 섬에 표류한 한 소년처럼 하염없이 바라보는 것을 표현한다. 더스틸러에서 네 심장을 움켜쥔다며 자신만만하던 소년이 사랑하는 사람을 만나 변하는 모습을 볼 수 있을 것으로 기대가 된다.</p>
        <p>
          [TRACKLIST] <br /><br />
          1. Blessing or Punishment _ intro 곡으로, 상대를 알게 된 것이 축복인지 벌인지 혼란스러워하며 하는 혼잣말을 내레이션으로 풀어낸 곡이다. <br /> <br />
          2. In Sum _ 짝사랑하는 소년의 관점에서 풀어낸 곡으로, '네가 내 불면이라면 기꺼이 밤을 새우리'라는 가사로 상대를 향한 강한 사랑이 느껴지는 곡이다. 불면증으로 인해 현실과 꿈이 구분이 안가는듯한 느낌을 주는 몽환적인 멜로디가 베이스를 채운다. <br /> <br />
          3. Forest Freedom _ 사랑에 빠져 자유롭지 못한 자신의 모습이 마음에 들다가도 가끔씩 자유를 갈망하게 되는 모순을 노래하고 있다. 내적갈등과는 상반된 밝은 사운드로 애써 괜찮은 척 하려는 소년의 노력이 엿보이는 곡이다.
        </p>
      </div>
    </div>
  )
}

export default Contents
