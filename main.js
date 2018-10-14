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
    ['아이', 'child'],
    ['오이', 'cucumber'],
    ['우유', 'milk'],
    ['여우', 'fox'],
    ['여유', 'rest'],
    ['유아', 'toddler'],
    ['가구', 'furniture'],
    ['나무', 'tree'],
    ['구두', 'shoes'],
    ['가수', 'singer'],
    ['아기', 'baby'],
    ['바지', 'pants'],
    ['호수', 'lake'],
    ['두부', 'tofu'],
    ['치마', 'skirt'],
    ['모자', 'hat'],
    ['바나나', 'banana'],
    ['기러기', 'goose'],
    ['호두', 'walnut'],
    ['노루', 'deer'],
    ['허리', 'waist'],
    ['하루', 'day'],
    ['코', 'nose'],
    ['머리띠', 'head band'],
    ['뿌리', 'root'],
    ['포도', 'grapes'],
    ['자다', 'sleep'],
    ['짜다', 'salty'],
    ['차다', 'cool'],
    ['기차', 'train'],
    ['기타', 'guitar'],
    ['사다', 'buy'],
    ['싸다', 'cheap'],
    ['비싸다', 'expensive'],
    ['쓰다', 'write/use/bitter'],
    ['꼬마', 'child'],
    ['토끼', 'rabbit'],
    ['도끼', 'axe'],
    ['바쁘다', 'busy'],
    ['아프다', 'sick'],
    ['자동차', 'car'],
    ['뽀뽀', 'kiss'],
    ['짜장면', 'black noodle'],
    ['짬뽕', 'spicy noodle'],
    ['개미', 'ant'],
    ['예절', 'manner'],
    ['실례', 'bad manner'],
    ['얘기', 'story'],
    ['가게', 'store'],
    ['시계', 'clock/watch'],
    ['과자', 'snack'],
    ['돼지', 'pig'],
    ['회사', 'company'],
    ['귀', 'ear '],
    ['외우다', 'remember'],
    ['웨이터', 'waiter'],
    ['의자', 'chair'],
    ['서울', 'Seoul'],
    ['일본', 'Japan'],
    ['교실', 'classroom'],
    ['과일', 'fruit'],
    ['할머니', 'grand mother'],
    ['딸기', 'strawberry'],
    ['여덟', 'eight'],
    ['봄', 'spring'],
    ['엄마', 'mom'],
    ['아빠', 'dad'],
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
    // jobs
    ['직업 이뭐예요?', 'What is your job?'],
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
    ['영어', 'English'],
    ['국적 이 뭐예요', 'What is your nationality?'],
    ['어느 나라 사람 이에요', 'Where are you from?'],
    ['직업 이뭐예요?', 'What is your job?'],
    ['저는', 'I'],
    // weather
    ['오늘 날씨가 어때요?', 'How’s the weather today?'],
    ['날씨가 좋아요', 'it’s nice weather'],
    ['날씨가 나빠요', 'it’s bad weather'],
    ['흐려요', 'it’s cloudy'],
    ['따뜻해요', 'it’s warm'],
    ['더워요', 'it’s hot'],
    ['추워요', 'it’s cold'],
    ['시원해요', 'it’s cool'],
    ['비가와요', 'it’s rainy'],
    ['눈이와요', 'it’s snowy'],
    ['바람이 불어요', 'it’s windy'],
    // how are you
    ['오늘 기분이 어때요?', 'How are you today?'],
    ['화가나요', 'i’m angry'],
    ['짜증나요', 'i’m annoyed'],
    ['심심해요', 'i’m bored'],
    ['가슴아파요', 'i’m heartbroken'],
    ['편해요', 'i’m comfortable'],
    ['궁금해요', 'i’m curious'],
    ['우울해요', 'i’m depressed'],
    ['부끄러워요', 'i’m shy'],
    ['신나요', 'i’m excited'],
    ['답답해요', 'i’m frustrated'],
    ['행복해요', 'i’m happy'],
    ['배고파요', 'i’m hungry'],
    ['외로워요', 'i’m lonely'],
    ['슬퍼요', 'i’m sad'],
    ['무서워요', 'i’m scared'],
    ['피곤해요', 'i’m tired'],
    ['놀라워요', 'i’m surprised'],
    ['부러워요', 'i’m envious'],
    ['고민되요', 'i’m worried'],
    // set phrases
    ['잘먹겠습니다', 'before eating'],
    ['잘먹었습니다', 'after eating'],
    ['다녀오겠습니다', 'when you leave home'],
    ['다녀오세요', 'when family members leave home'],
    ['다녀왔습니다', 'when you return home'],
    ['어서오세요', 'when family members return home'],
    ['안녕히 주무세요', 'before bed'],
    ['안녕히 주무셨어요?', 'when waking up']

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
  })

  $('#prev').click(prev);
  $('#next').click(next);
  $('.card').click(flip);
  $('#shuffle .button').click(shuffle);
  $('#rate').change(function() {
    rate = $(this).val()/10;
    $(this).blur();
  })

  // $('.card').on('swiperight', function(e) {
  //   e.preventDefault();
  //   prev();
  // });
  // $('.card').on('swipeleft', function(e) {
  //   e.preventDefault();
  //   next();
  // });

  // $('.card').tap(function(e) {
  //   e.preventDefault();
  //   flip();
  // });
  $('.card').touchwipe({
     wipeLeft: next,
     wipeRight: prev,
     wipeUp: function() { alert("up"); },
     wipeDown: function() { alert("down"); },
     min_move_x: 20,
     min_move_y: 20,
     preventDefaultEvents: true
  });

  function setCards() {
    console.log(i)
    $('#front p').text(vocab[i][0]);
    $('#back p').text(vocab[i][1]);

    if (vocab[i][0].length > 7) {
      $('#front p').addClass('small');
    } else {
      $('#front p').removeClass('small');
    }
    if (vocab[i][1].length > 10) {
      $('#back p').addClass('small');
    } else {
      $('#back p').removeClass('small');
    }


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