const quiz = [
  {
    question: 'コンピューターの頭脳の役割を果たすパーツは何でしょう？',
  answers: ['CPU',
      'マザーボード',
      'マウス',
      'キーボード'],
    ans: 'CPU'
  }, {
    question: '動画を書き出す速度が早いPCパーツがあります何でしょう？',
  answers: ['CPU',
      'グラフィックボード',
      'カード',
      'キーボード'],
    ans: 'グラフィックボード'
  }, {
    question: 'Photoshopの推奨メモリは何でしょう？',
  answers: ['4GB',
      '8GB',
      '16GB',
      '32GB'],
    ans: '16GB'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {

  //indexhtmlのidjs-questionのidが振られているタグの中のテキストをconstの中身に書き換えている。つまり、定数の問題文
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    //ここに命令
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].ans === e.target.textContent
  ) {
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です!');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}