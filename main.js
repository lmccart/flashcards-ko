$(document).ready(function() {
  var vocab = [
    ['벽', 'wall'],
    ['부엌', 'kitchen'],
    ['밖', 'outside'],
    ['세탁기', 'washing machine'],
    ['죽', 'porridge'],
    ['미국', ' U.S.A.'],
    ['수박', ' watermelon'],
    ['우체국', ' post office'],
    ['닭', 'chicken'],
    ['흙', 'soil'],
    ['눈', 'eye/snow'],
    ['산', 'mountain'],
    ['시간', 'time'],
    ['돈', 'money'],
    ['사진', 'photograph'],
    ['신문', 'newspaper'],
    ['도서관', 'library'],
    ['진짜', 'real'],
    ['라면', 'ramen'],
    ['걷다', 'to walk'],
    ['옷', 'clothes'],
    ['꽃', 'flower'],
    ['밑', 'under/beneath'],
    ['솥', 'pot'],
    ['바깥', 'outside'],
    ['빗', 'comb'],
    ['낮', 'daytime'],
    ['밤', 'night'],
    ['빛', 'light'],
    ['쌀', 'rice'],
    ['발', 'foot'],
    ['팔', 'arm'],
    ['서울', 'Seoul'],
    ['일본', 'Japan'],
    ['교실', 'classroom'],
    ['과일', 'fruit'],
    ['할머니', 'grand mother'],
    ['딸기', 'strawberry'],
    ['여덟', 'eight'],
    ['봄', 'spring'],
    ['엄마', 'mom'],
    ['사람', 'person'],
    ['김치', 'kimchi'],
    ['인삼', 'ginseng'],
    ['감기', 'cold'],
    ['이름', 'name'],
    ['점심', 'lunch'],
    ['여름', 'summer'],
    ['컴퓨터', 'computer'],
    ['집', 'house'],
    ['입', 'mouth'],
    ['무릎', 'knee/lap'],
    ['일곱', 'seven'],
    ['앞', 'front'],
    ['옆', 'side'],
    ['지갑', 'wallet'],
    ['숲', 'forest'],
    ['밥', 'rice'],
    ['병원', 'hospital'],
    ['창문', 'window'],
    ['가방', 'bag'],
    ['강', 'river'],
    ['방', 'room'],
    ['시장', 'market'],
    ['사랑', 'love'],
    ['청소', 'clean'],
    ['영화', 'movie'],
    ['화장실', 'rest room'],
    ['동생', 'younger sibling'],
    ['달리다', 'run'],
    ['재미있다', 'interesting'],
    ['재미없다', 'bored'],
    ['과일', 'Fruits'],
    ['직업', 'job'],
    ['지겁', 'job'],
    ['선생님', 'teacher'],
    ['학생', 'student'],
    ['의사', 'doctor'],
    ['요리사', 'chef'],
    ['은행원', 'bank clerk'],
    ['기자', 'reporter'],
    ['회사원', 'company employee'],
    ['연구원', 'researcher'],
    ['기술자', 'engineer'],
    ['사업가', 'businessman'],
    ['소방관', 'fire fighter'],
    ['경찰', 'police'],
    ['배우', 'actor/ actress'],
    ['변호사', 'lawyer'],
    ['회계사', 'accountant'],
    ['미용사', 'hairdresser'],
    ['군인', 'army'],
    ['국가', 'country'],
    ['나라', 'country'],
    ['국적', 'nationality'],
    ['미국', 'USA'],
    ['중국', 'China'],
    ['일본', 'Japan'],
    ['인도', 'India'],
    ['호주', 'Australia'],
    ['영국', 'The United Kingdom'],
    ['독일', 'Germany'],
    ['프랑스', 'France'],
    ['캐나다', 'Canada'],
    ['사람', 'person'],
    ['인', 'person'],
    ['어', 'language'],
    ['영어', 'English']
  ];

  var i = parseInt(window.location.hash.substring(1)) || 0;
  var side = 0;
  var rate = 1;
  setCards();

  $('body').keydown(function(e) {
    if (e.which === 37) prev();
    else if (e.which === 39) next(); 
    else if (e.which === 32) shuffle();
    else if (e.which === 38 || e.which === 40) flip();
    console.log(e.which)
  })

  $('#prev').click(prev);
  $('#next').click(next);
  $('#shuffle .button').click(shuffle);
  $('.card').click(flip);
  $('#rate').change(function() {
    rate = $(this).val()/10;
    $(this).blur();
  })

  function setCards() {
    console.log(i)
    $('#front p').text(vocab[i][0]);
    $('#back p').text(vocab[i][1]);
    if (side == 0) {
      pronounce();
    }
    window.location.hash = '#'+i;
  }

  function pronounce() { 
    console.log('pronounce')
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'ko-KR';
    msg.text = vocab[i][0];
    msg.rate = rate;
    speechSynthesis.speak(msg);
  }

  function prev() {
    i--;
    if (i < 0) i = vocab.length - 1;
    setCards();
  }

  function next() {
    i = (i+1)%vocab.length;
    setCards();
  }

  function shuffle() {
    i = Math.floor(Math.random()*vocab.length);
    setCards();
  }

  function flip() {
    if (side == 0) {
      $('#front').hide();
      $('#back').show();
      side = 1;
    } else {
      $('#back').hide();
      $('#front').show();
      pronounce();
      side = 0;
    }
  }

});