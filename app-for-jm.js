// Question Data with Mapping
const questionsData = [
    { q: 1, text: "何かを始める時の最大の動機は？", choices: { A: "完成物と安定性", B: "成果と影響力", C: "喜び・人の変化" }, mapping: { A: "B", B: "S", C: "H" } },
    { q: 2, text: "最高に満たされる瞬間は？", choices: { A: "何かを形にした時", B: "正解を見抜いた時", C: "誰かの感情が変わった時" }, mapping: { A: "B", B: "S", C: "C" } },
    { q: 3, text: "自分の力を最も使っている感覚は？", choices: { A: "決断", B: "共感", C: "実行" }, mapping: { A: "S", B: "H", C: "B" } },
    { q: 4, text: "他者から最も信頼される理由は？", choices: { A: "手を動かす", B: "判断力", C: "人を繋げる" }, mapping: { A: "B", B: "S", C: "C" } },
    { q: 5, text: "大切にしているのは？", choices: { A: "長期的影響", B: "構造の完成", C: "心の安全" }, mapping: { A: "S", B: "B", C: "H" } },
    { q: 6, text: "一番イライラするのは？", choices: { A: "計画の変更", B: "他者への冷たさ", C: "無駄な時間" }, mapping: { A: "B", B: "H", C: "S" } },
    { q: 7, text: "役割を選ぶなら？", choices: { A: "司令塔", B: "現場長", C: "語り部" }, mapping: { A: "S", B: "B", C: "C" } },
    { q: 8, text: "未来を見るとき…", choices: { A: "実現可能性を精査", B: "物語と意味を感じる", C: "望む未来を設計" }, mapping: { A: "B", B: "C", C: "S" } },
    { q: 9, text: "最もダメージが大きいのは？", choices: { A: "想いを軽視される", B: "作った物が壊される", C: "自分の判断が無視される" }, mapping: { A: "C", B: "B", C: "S" } },
    { q: 10, text: "褒められると嬉しい言葉は？", choices: { A: "「お前が判断して正解だった」", B: "「お前のおかげで完成した」", C: "「お前がいたから救われた」" }, mapping: { A: "S", B: "B", C: "H" } },
    { q: 11, text: "突発トラブル時の行動は？", choices: { A: "自分が動いて止血", B: "全体最適で指示出し", C: "人を落ち着かせ調整" }, mapping: { A: "B", B: "S", C: "H" } },
    { q: 12, text: "優先するのは？", choices: { A: "関係性", B: "作業", C: "結果" }, mapping: { A: "C", B: "B", C: "S" } },
    { q: 13, text: "集団に入ると自然に…", choices: { A: "リーダー役", B: "通訳役", C: "支える役" }, mapping: { A: "S", B: "C", C: "B" } },
    { q: 14, text: "学び方は？", choices: { A: "実地/手で覚える", B: "物語/会話/体験", C: "戦略/法則" }, mapping: { A: "B", B: "C", C: "S" } },
    { q: 15, text: "口癖は？", choices: { A: "「なぜそれを？」", B: "「どうやって？」", C: "「結論は？」" }, mapping: { A: "C", B: "B", C: "A" } },
    { q: 16, text: "仕事を選ぶ基準は？", choices: { A: "大きな影響", B: "技術と確度", C: "意味と物語性" }, mapping: { A: "S", B: "B", C: "C" } },
    { q: 17, text: "最低条件は？", choices: { A: "手触り", B: "共鳴", C: "誇り" }, mapping: { A: "B", B: "C", C: "A" } },
    { q: 18, text: "休む時は？", choices: { A: "人と語って整える", B: "戦略を遠くから見る", C: "手を動かしながら整理" }, mapping: { A: "C", B: "S", C: "B" } },
    { q: 19, text: "追い込まれると…", choices: { A: "感傷的に", B: "支配的に", C: "孤立して実務" }, mapping: { A: "H", B: "S", C: "B" } },
    { q: 20, text: "助けが必要な時は？", choices: { A: "権限", B: "人手", C: "信頼" }, mapping: { A: "S", B: "B", C: "C" } },
    { q: 21, text: "時間が足りない時…", choices: { A: "まず手を動かす", B: "まず心を支える", C: "まず優先順位" }, mapping: { A: "B", B: "H", C: "S" } },
    { q: 22, text: "最大の恐怖は？", choices: { A: "孤立", B: "無力感", C: "崩壊" }, mapping: { A: "C", B: "S", C: "B" } },
    { q: 23, text: "起きやすい失敗は？", choices: { A: "独裁化", B: "無意識の操作性", C: "一本鎖で崩れる" }, mapping: { A: "S", B: "C", C: "B" } },
    { q: 24, text: "他者に誤解される点は？", choices: { A: "固い・頑固", B: "感情的すぎる", C: "冷たく見える" }, mapping: { A: "B", B: "C", C: "S" } },
    { q: 25, text: "将来、何が残れば満足？", choices: { A: "魂の継承", B: "建造物・成果物", C: "システム・仕組み" }, mapping: { A: "A", B: "B", C: "S" } },
    { q: 26, text: "理想の仲間は？", choices: { A: "信じ合える家族", B: "自律した強者", C: "一緒に動ける技術者" }, mapping: { A: "H", B: "S", C: "B" } },
    { q: 27, text: "敵にすべき相手は？", choices: { A: "無知と腐敗", B: "崩壊を生む欠陥", C: "無関心と諦め" }, mapping: { A: "A", B: "B", C: "C" } },
    { q: 28, text: "戦う領域は？", choices: { A: "心と文化", B: "法と戦略", C: "土地と現場" }, mapping: { A: "C", B: "A", C: "B" } },
    { q: 29, text: "何世代先に届くものを作りたい？", choices: { A: "道（Strategy）", B: "歌（Narrative）", C: "場（Infrastructure）" }, mapping: { A: "S", B: "C", C: "B" } },
    { q: 30, text: "最後の一歩を決める基準は？", choices: { A: "愛", B: "責任", C: "実現性" }, mapping: { A: "H", B: "S", C: "B" } }
];

// Path Definitions for Japan Maker
const pathsData = {
    S: { name: "戦略家", description: "組織や社会の全体像を把握し、中長期の目標から最適な計画を立てて実行を導くタイプです。状況やリスクを整理し、現実的な判断でチームを前進させます。" },
    B: { name: "建築者", description: "構想を具体化し、スケジュール・品質・安全を管理して成果を形にするタイプです。現場の調整力と技術力で、計画を確実に実現します。" },
    C: { name: "伝達者", description: "情報をわかりやすく伝え、関係者をつないで合意形成を進めるタイプです。説明・調整・共有でプロジェクトを円滑に動かします。" },
    H: { name: "癒し手", description: "課題や不安を早く見つけ、支援や環境整備で安心して働ける状態をつくるタイプです。傾聴とサポートでチームのパフォーマンスを高めます。" },
    A: { name: "記録者", description: "事実や背景を整理・記録し、価値や学びをわかりやすく残すタイプです。ドキュメントやデータで再現性を高め、次の活動につなげます。" }
};


// Application State
let currentQuestion = 0;
let answersArray = [];
let userEmail = '';

// DOM Elements
const startPage = document.getElementById('start-page');
const questionPage = document.getElementById('question-page');
const emailPage = document.getElementById('email-page');
const loadingOverlay = document.getElementById('loading-overlay');

const startBtn = document.getElementById('start-btn');
const completeBtn = document.getElementById('complete-btn');
const emailForm = document.getElementById('email-form');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const completeAction = document.getElementById('complete-action');

// ===== イベントリスナー
startBtn.addEventListener('click', startDiagnosis);
completeBtn.addEventListener('click', showEmailPage);
emailForm.addEventListener('submit', submitDiagnosis);
restartBtn?.addEventListener('click', restartDiagnosis);
homeBtn?.addEventListener('click', goHome);

// ===== 質問表示/操作
function startDiagnosis() {
    currentQuestion = 0;
    answersArray = [];
    showPage(questionPage);
    renderQuestion();
}

function renderQuestion() {
    const question = questionsData[currentQuestion];
    const progress = ((currentQuestion + 1) / questionsData.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Q${currentQuestion + 1}/${questionsData.length}`;
    questionText.textContent = question.text;

    choicesContainer.innerHTML = '';
    Object.keys(question.choices).forEach(key => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = question.choices[key];
        button.addEventListener('click', () => selectAnswer(key));
        choicesContainer.appendChild(button);
    });
    completeAction.style.display = 'none';
}

function selectAnswer(answer) {
    const question = questionsData[currentQuestion];
    answersArray.push({
        q: question.q,
        answer: answer,
        category: question.mapping[answer]
    });
    // ビジュアルFB
    const buttons = choicesContainer.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        if (btn.textContent === question.choices[answer]) {
            btn.classList.add('selected');
        }
    });
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questionsData.length) renderQuestion();
        else showCompleteButton();
    }, 300);
}

function showCompleteButton() {
    choicesContainer.innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: var(--secondary-color); margin: 40px 0;">全ての質問に回答しました</p>';
    completeAction.style.display = 'block';
}

function showEmailPage() {
    showPage(emailPage);
}

// ==== 診断API送信・ジャンプ
function submitDiagnosis(e) {
    e.preventDefault();
    // ★ ここで即座にフォーム画面全体を非表示
    emailPage.style.display = 'none';
    
    userEmail = document.getElementById('email-input').value;
    if (!userEmail) {
        alert('メールアドレスを入力してください');
        return;
    }
    loadingOverlay.classList.add('active');
    const diagnosticData = {
        answers: answersArray,
        email: userEmail,
        timestamp: new Date().toISOString()
    };

    fetch('https://x-sennin.com/api/japanmaker_diagnosis/diagnose.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(diagnosticData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        loadingOverlay.classList.remove('active');
        if (data.status === 'success' && data.diagnosisId) {
            // **診断IDで完了ページへジャンプ**
            window.location.href = 'result.html?id=' + data.diagnosisId;
        } else {
            alert('診断エラー: ' + (data.message || '不明なエラー'));
        }
    })
    .catch(error => {
        loadingOverlay.classList.remove('active');
        alert('通信エラー: ' + error.message);
    });
}

// ==== 画面/ページ切り替え
function restartDiagnosis() {
    currentQuestion = 0;
    answersArray = [];
    userEmail = '';
    document.getElementById('email-input').value = '';
    showPage(startPage);
}

function goHome() {
    restartDiagnosis();
}

function showPage(page) {
    [startPage, questionPage, emailPage].forEach(p => {
        if (p) p.classList.remove('active');
    });
    setTimeout(() => {
        if (page) page.classList.add('active');
        window.scrollTo(0, 0);
    }, 50);
}

// ==== 初期化
window.addEventListener('load', () => {
    showPage(startPage);
});