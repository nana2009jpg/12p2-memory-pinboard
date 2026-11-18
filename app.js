const members = [
  "Nguyễn Minh An", "Đỗ Đức Anh", "Nguyễn Minh Đức", "Phạm Minh Đức", "Nguyễn Hoàng Bắc Hải",
  "Bùi Trung Hưng", "Đồng Xuân Khoa", "Nguyễn Trung Kiên", "Nguyễn Tuấn Kiệt", "Nguyễn Bình Minh",
  "Nguyễn Đức Minh", "Phạm Đức Minh", "Nguyễn Hoàng Minh", "Trần Phú Minh", "Đỗ Quang Minh",
  "Lê Quang Minh", "Nguyễn Tiến Minh (A)", "Nguyễn Tiến Minh (B)", "Ngô Quốc Phong", "Nguyễn Vinh Phúc",
  "Nguyễn Minh Quang", "Phạm Minh Quân", "Ngô Hoàng Thái", "Nguyễn Thế Trung", "Phạm Minh Tuấn"
];

const memberData = {
  0: {
    question: "Bề dày lịch sử của võ thuật Trung Hoa thường được các nhân vật nhắc đến như một câu cửa miệng kinh điển trong phim Baki là bao nhiêu năm?",
    pin: "4000",
    wishes: [
      "Chúc b toi sớm ngày siết về 62kg, ngủ lúc 11r, mỗi ngày đọc 1 trang sách, mỗi hôm xem 2 tập phim, 120+ hsa và ngày nào cũng năng suất.",
      "Chúc man học tốt thi tốt, đạt được nhiều thành tích, 120+ hsa và share nhiều kiến thức cho ae nhé:)) nghe cũng hay đấy",
      "Chúc man man lên đại học kiếm đc ny hiểu mình và yêu dài lâu"
    ]
  },
  1: {
    question: "Chạy bao nhiêu mét thì tiêu được 100kcal?",
    pin: "1500",
    wishes: [
      "Chúc sớm siết căng đẹp trai 6 múi cực đô cực vâm nhé em zái.",
      "Chúc sớm không phải ăn ức gà, thẳng tiến tới NEUUU nhá",
      "Chúc Đức Anh sớm tập được body như mong muốn, đạt được nhiều thành tích tốt, đừng quên lời hứa về chàng trai m8 nhé:)))"
    ]
  },
  2: {
    question: "Ngọt ra mắt bài hát đầu tiên vào năm nào?",
    pin: "2014",
    wishes: [
      "Chúc bạn đạt được thành tích tốt trong học tập và rèn luyện:)) đỗ NV Bách Khoa và luôn giữ ngọn lửa với đam mê âm nhạc nhé, tôi ủng hộ band nhạc của bạn",
      "Chúc cậu Đức sớm nổi tiếng =)))))))",
      "Chúc Đức hát hay như Bình Trương Lùi, như Ngọt, như Ân Ngờ",
      "Ca sĩ của k77 lý 2"
    ]
  },
  3: {
    question: "Tựa đề tập mở đầu của AOT nhắc đến một khoảng thời gian bao nhiêu năm?",
    pin: "2000",
    wishes: [
      "Chúc bạn luôn mạnh khỏe, các đợt thi sắp tới thể hiện thật tốt để không nuối tiếc, đạt 9x tsa và sớm tìm được con đường mình mong muốn theo đuổi nhé.",
      "Bách khoa toán học của lớp, chúc pduc 90+ tsa, bài toán nào cũng chan được",
      "Chúc ông thi đâu đạt đó, 90+ TSA và đỗ NV1 Bách Khoa"
    ]
  },
  4: {
    question: "Nhóm \"Big 4\" ngân hàng thương mại nhà nước lớn nhất tại Việt Nam hiện nay bao gồm những ngân hàng nào trong danh sách dưới đây? (Chọn 4 đáp án và sắp xếp các số theo thứ tự từ bé đến lớn) (1) Techcombank, (2) Vietcombank, (3) VPBank, (4) BIDV, (5) MB Bank, (6) Vietinbank, (7) ACB, (8) Agribank, (9) Sacombank",
    pin: "2468",
    wishes: [
      "Chúc Hải thành công trên con đường xuất ngoại nhé=))))",
      "Chúc Hải hiểu hơn về chứng khoán, về tiền:)))"
    ]
  },
  5: {
    question: "Trong những bộ phim sau đây, diễn viên Bae Suzy đã đóng vai chính những bộ phim nào? Liệt kê lần lượt theo số thứ tự tăng dần.\n1. Doona!  2. Celebrity  3. Daily Dose of Sunshine  4. The Sound of a Flower  5. The Trunk  6. Uncontrollably Fond  7. The Glory  8. Vagabond",
    pin: "1468",
    wishes: [
      "Ông Hưng ông Hửng ông Hừng, xem phim ít thôi chạm cỏ đi k là k gặp được Bae Suzy của đời mình đâu ._.",
      "Phim Hàn ra đến đâu cày hết đến đây Hưng nhé",
      "Chúc bạn Hưng luôn giữ niềm đam mê với nền giải trí Hàn Quốc nhé"
    ]
  },
  6: {
    question: "Năm nào là năm của chúng ta?",
    pin: "2027",
    wishes: [
      "chúc khoa chan cầu thắng đc ldl, ndm, nmd và thầy phú:)))",
      "Khoa ơi Khoa ởi Khoa ời, chúc Khoa tất cả hẹn ngày tái ngộ tại...quán...bún....đậu...mắm...tôm.!",
      "chúc ông đạt được thành tích tốt trong đợt thi sắp tới, 9x tsa và sớm tìm được chân ái đời mình nhé",
      "chúc mày hay ăn chóng lớn, luôn luôn giữ mình để ko xướng tên mình vào top 3 nào đó..., chúc mày rửa tay gác kiếm với cái nghề xx-slayer!!~"
    ]
  },
  7: {
    question: "Trong một buổi tập gym, bạn dự định thực hiện 4 bài tập sau:\n1. Squat (gánh tạ)\n2. Plank (giữ tư thế chống đẩy)\n3. Chạy bộ trên máy\n4. Deadlift (nâng tạ từ mặt đất)\nHãy sắp xếp thứ tự thực hiện 4 bài tập trên sao cho phù hợp với nguyên tắc tổ chức một buổi tập gym khoa học, từ bước khởi động đến khi kết thúc buổi tập.",
    pin: "3142",
    wishes: [
      "Chúc ông luôn kiên trì trên con đường siết cơ của mình, ráng tập đô con về khoe ae, 9x tsa, bớt sảng hơn và sớm tìm ra đam mê của mình nhé",
      "Chúc Kiên siết thành công để t1 có 1 album kỉ yếu vạn người ngưỡng mộ, thủ khoa thpt, 10đ hóa, 10đ lý, 10đ toán, 90+ tsa.",
      "Tương lai được gặp J97 nha đóm chúa"
    ]
  },
  8: {
    question: "Trong chân không, ánh sáng truyền được quãng đường bao nhiêu kilômét trong 10 mili giây? Lấy tốc độ ánh sáng là 300,000 km/s.",
    pin: "0300",
    wishes: [
      "Chúc ông thi đâu thủ khoa đấy, nhất hsgqg, thi ipho quốc tế, rồi về lớp với ae",
      "Chúc Kiệt tiếp tục giữ vững phong độ trong các cuộc thi, giữ gìn sức khỏe để sớm ngày đoàn tụ ae đi music box với nhau nhé",
      "kiệt ơiiii chúc kiệt xuất sắc như bây giờ nhé i trust u"
    ]
  },
  9: {
    question: "Hãy nhập 1 số quen thuộc với bạn nhất",
    pin: "3103",
    wishes: [
      "Chúc Trưởng giữ cái đầu lạnh với lớp ><",
      "Chúc Trưởng mãi kiên trì với cái lớp siêu quậy này!!!",
      "Chúc bạn Trưởng thi đâu đạt aim chỗ đó, học tập thật tốt và tiếp tục chăm lo cho 32 đứa con này nhé:)) quý trưởng lắm hihi"
    ]
  },
  10: {
    question: "Tay vợt Kento Momota lần đầu vô địch thế giới tại Nam Kinh và chính thức vươn lên vị trí số 1 trên bảng xếp hạng BWF vào năm nào?",
    pin: "2018",
    wishes: [
      "Chúc ông đạt được nhiều thành tích tốt trong học tập, 9x tsa, đỗ NV HUST và luôn bền bỉ với môn thể thao của mình nhé",
      "Mãi dành niềm đam mê với cầu lông",
      "Chúc m đạt aim đỗ NV1 nhaaa"
    ]
  },
  11: {
    question: "Tính tới hiện tại, Cristiano Ronaldo đã ghi được tổng cộng bao nhiêu bàn thắng?",
    pin: "0985",
    wishes: [
      "chúc Phạm Đức Minh luôn luôn Phạm Đức Minh như bây giờ nhé hjhj 123",
      "Chúc ông đạt được nhiều thành tích tốt trong học tập, đỗ NV1 và đạt aim các kì thi sắp tới nhé, gud luck gud luck",
      "Chúc bạn học Phạm sớm đỗ đại học mơ ước nha"
    ]
  },
  12: {
    question: "Manchester United được thành lập vào năm nào?",
    pin: "1878",
    wishes: [
      "chúc meo đạt aim tsa, hsk, sat, luôn hạnh phúc bên người đồng hành của mình và thành công trên con đường mình đã chọn nhé.",
      "Chúc cậu mèo méo thành công trên con đường Trung tiến nhé hjhj //-//",
      "chúc meo meo sớm hsk6, nỗ lực vượt qua các kì thi, bọn t nể phục meo lắm hehe"
    ]
  },
  13: {
    question: "FOC thành lập năm nào?",
    pin: "2017",
    wishes: [
      "Chúc PM sớm đá chính ANTD, welcome FOC Trần Phú Minh",
      "Chúc Phú Minh mãi yêu FOC",
      "Chúc bạn Phú Minh đạt được nhiều thành tích tốt trong học tập, công sức được đền đáp xứng đáng và luôn nhiệt huyết với bóng đá nhé:)) ae luôn ở sau cổ vũ"
    ]
  },
  14: {
    question: "Bản hit \"Pickle Ball\" của bạn ra mắt vào năm nào?",
    pin: "2024",
    wishes: [
      "Chúc bạn Đỗ Quang Minh aka Đỗ Phú Qúy bớt ngại ngùng và đỏ mặt",
      "Chúc sớm đô hơn Đức Anh",
      "Chúc bạn ĐQM học tập tốt lao động tốt, luôn vui tươi tích cực như bây giờ và đạt aim trong các kì thi sắp tới nhé"
    ]
  },
  15: {
    question: "Sinh nhật Jang Wonyoung?",
    pin: "3108",
    wishes: [
      "chúc sớm ngày thành bác sĩ tương lai, ko làm bệnh nhân thất vọng",
      "Chúc lqm đi học đúng h",
      "sớm đầu quân cho vượng vin, ngày lê quang minh làm bác sĩ sẽ là ngày tôi đi tập gym!"
    ]
  },
  16: {
    question: "Trang bị \"Giáp hộ mệnh\" có giá bao nhiêu vàng?",
    pin: "2400",
    wishes: [
      "Game ít thôi Tôm lớn rồi lock in được rồi. Đạp đổ NV1 thành công chen chân vào nữ nhi quốc nhé chàng trai ngốc ngek",
      "Chúc Tôm Tôm retake read ielts lên ngay 7.0",
      "Chúc người em \"sinh đôi\" của tôi đạt aim ielts, đỗ NV1 và luôn nhiệt huyết với các môn thể thao nhé, cũng đa năng đấy"
    ]
  },
  17: {
    question: "Trong đầu trường chân lý, bể tướng 2 và 3 vàng lần lượt là?",
    pin: "2518",
    wishes: [
      "chúc cậu lúc nào cũng ngủ sớm và dậy lúc 4h cày toán:) chiều đừng ngủ đến 5h nữaaa",
      "chúc cậu sớm tìm được đại học mình yêu thích nha",
      "chúc bạn B học tập tốt, học tới đâu hiểu tới đó:)) chơi nhưng không quên học nhé không cô Huệ buồn"
    ]
  },
  18: {
    question: "Có khoảng bao nhiêu giống nho được sử dụng làm rượu vang trên thế giới (con số lớn nhất)?",
    pin: "6000",
    wishes: [
      "Chúc Phong 19/11 ăn Nho không bao giờ Chua:(",
      "Chúc Phong ăn no, ngủ kĩ, đi học sớm",
      "Chúc Phong thi đâu đạt aim tới đó nhé"
    ]
  },
  19: {
    question: "Phiên bản maimai đầu tiên chính thức ra mắt tại Nhật Bản vào năm nào?",
    pin: "2012",
    wishes: [
      "chéo thì có tất cả rồi nhỉ:) chúc chéo luôn vui vẻ như bây giờ nhó, có maimai, có timezone, có hero world, có molly, top 1 tft, và....🦭",
      "chúc chéo luôn vui vẻ, tràn đầy năng lượng để support cho các ae cốm, luôn hạnh phúc cùng người bên cạnh và đạt được nhiều thành tựu nhé, tôi ngưỡng mộ chéo lắm đấy",
      "Chéo ơi dạy t chơi maimai đi!! chúc chéo nhiều thành tựu nhé chàng trai 1550+ lessss go",
      "5/12 first take 1500+"
    ]
  },
  20: {
    question: "Vụ trộm lịch sử làm nên tên tuổi cho bức họa Mona Lisa xảy ra vào năm nào?",
    pin: "1911",
    wishes: [
      "chúc bạn kiến trúc sư tương lai tháng nào cũng hoàn thành mấy cái tượng tây, đỗ kiến trúc rồi mukbang hết nguyễn văn lộc nhó, rủ tui đi ăn với hehehe",
      "chúc bạn Quang đỗ NV1 kiến trúc, chan hết ae lớp vẽ khác và thành công theo đuổi ước mơ nhé, nhà tôi sau này nhờ bạn.",
      "Vẽ đủ 33 bản thiết kế nhà tặng lý 2 nhá",
      "chúc cậu Quang đỗ kiến trúc sau này vẽ nhà cho tớ với ><"
    ]
  },
  21: {
    question: "Năm gần nhất cầu thủ Nguyễn Hoàng Đức giành danh hiệu Qủa bóng vàng Việt Nam là năm nào?",
    pin: "2025",
    wishes: [
      "Chúc Quân đạt mọi aim trong kì thi, sớm đỗ NV1, cook mọi thứ nhé.",
      "Chúc Quân luôn đá bóng dcap",
      "chúc Quân học giỏi và cầu thủ mình thích tiếp tục farm quả bóng vàng nhé"
    ]
  },
  22: {
    question: "Em chè live vào 2 khung giờ lần lượt là?",
    pin: "1218",
    wishes: [
      "Chúc Thái tương lai thành công an, chúng tôi tin bạn:)",
      "Chúc Thái đạt được thành tích tốt trong học tập, đạt aim trong các kì thi sắp tới, có nhiều kỉ niệm bên bạn bè và đỡ bị stress bởi ovt nhé:)) cha yô",
      "xem it anime tinh cam hoc duong thui Thai oi cham co de tim kiem tinh yeu doi minh nha!",
      "chúc Thái men khỏe mạnh vạm vỡ học giỏi chăm ngoan, mùa sau là mùa của ..."
    ]
  },
  23: {
    question: "Số liên quan đến 1 người",
    pin: "1703",
    wishes: [
      "Chúc Trung mãi 1 tình yêu đẹp:)",
      "Last longggggggggggggggggggggggggggggg hoàn thành mọi mục tiêu nhé",
      "Chúc mày luôn thành công và sớm đỗ NV1 nhé!"
    ]
  },
  24: {
    question: "Một vệ tinh nhân tạo khối lượng m=500kg đang chuyển động tròn đều quanh Trái Đất ở độ cao h=3600km so với mặt đất. Lấy bán kính Trái Đất R=6400km và gia tốc rơi tự do ở sát mặt đất là g=10m/s^2. Tính tốc độ dài của vệ tinh trên quỹ đạo này (m/s)",
    pin: "6400",
    wishes: [
      "Chúc Tuấn học giỏi",
      "Chúc Tuấn đạt được nhiều ước mơ siêu siêu vĩ đại của m",
      "Chúc Tuấn thành công với những nghiên cứu của mình, sớm được đền đáp công sức m đã bỏ ra và kiên trì trên con đường mình đã chọn nhé, t rất cảm kích thông tin của m Tuấn ạ:))"
    ]
  }
};

const tilts = [-3.1, 1.8, -1.2, 3.4, -2.2, 2.6, -2.8, .9, 2.1, -1.5, 1.3, -3.5, 2.9, -.7, -2.4, 3.1, -1.8, 1.1, -3, 2.3, -.9, 3.5, -2.5, 1.6, -1.3];
const pins = ["#789bb8", "#d1a957", "#789bb8", "#b98973", "#d1a957"];
const connections = [[0,1],[1,6],[2,7],[3,8],[4,9],[5,6],[6,12],[7,8],[7,13],[8,14],[9,14],[10,11],[11,16],[12,17],[13,18],[14,19],[15,16],[16,22],[17,18],[18,24],[19,24],[20,21],[21,22],[22,23],[23,24],[0,12],[4,12],[12,20],[12,24]];

const intro = document.querySelector("#intro");
const boardPage = document.querySelector("#boardPage");
const introLine = document.querySelector("#introLine");
const dialog = document.querySelector("#capsuleDialog");
const wishSequence = document.querySelector("#wishSequence");
const wishRain = document.querySelector("#wishRain");
const wheelDialog = document.querySelector("#wheelDialog");
const giftWheel = document.querySelector("#giftWheel");
const introPhrases = ["guess what it is?", "12 Phys 2 Girls' Present"];
let typingTimer, revealTimer, phraseIndex = 0, isTyping = false, hasTyped = false;
let currentMemberIndex = -1;
let enteredPin = "";
let sequenceTimers = [];
let giftAssignments = loadGiftAssignments();
let availableGifts = deriveAvailableGifts();
let wheelRotation = 0;

function typeIntro() {
  clearInterval(typingTimer); clearTimeout(revealTimer);
  introLine.textContent = "";
  intro.classList.remove("is-revealing", "is-leaving");
  isTyping = true; hasTyped = false; phraseIndex = 0;
  introLine.classList.remove("is-title");
  const text = introPhrases[0];
  let cursor = 0;
  typingTimer = setInterval(() => {
    introLine.textContent = text.slice(0, ++cursor);
    if (cursor >= text.length) {
      clearInterval(typingTimer); isTyping = false; hasTyped = true;
      revealTimer = setTimeout(showTitle, 1250);
    }
  }, 88);
}

function finishTyping() {
  clearInterval(typingTimer); clearTimeout(revealTimer);
  introLine.textContent = introPhrases[phraseIndex];
  isTyping = false; hasTyped = true;
  revealTimer = setTimeout(phraseIndex === 0 ? showTitle : enterBoard, 1100);
}

function showTitle() {
  clearInterval(typingTimer); clearTimeout(revealTimer);
  phraseIndex = 1; isTyping = false; hasTyped = false;
  introLine.classList.add("is-switching");
  setTimeout(() => {
    introLine.textContent = "";
    introLine.classList.remove("is-switching");
    introLine.classList.add("is-title");
    isTyping = true;
    let cursor = 0;
    typingTimer = setInterval(() => {
      introLine.textContent = introPhrases[1].slice(0, ++cursor);
      if (cursor >= introPhrases[1].length) {
        clearInterval(typingTimer); isTyping = false; hasTyped = true;
        revealTimer = setTimeout(enterBoard, 2100);
      }
    }, 62);
  }, 480);
}

function enterBoard() {
  clearInterval(typingTimer); clearTimeout(revealTimer);
  intro.classList.add("is-revealing");
  boardPage.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => boardPage.classList.add("is-visible"));
  setTimeout(() => intro.classList.add("is-leaving"), 520);
  setTimeout(() => { intro.hidden = true; drawThreads(); }, 1400);
}

function replayIntro() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  intro.hidden = false;
  boardPage.classList.remove("is-visible");
  boardPage.setAttribute("aria-hidden", "true");
  typeIntro();
}

function photoMarkup() { return '<span class="photo-placeholder"><span>ADD PHOTO</span></span>'; }

function buildBoard() {
  document.querySelector("#memberGrid").innerHTML = members.map((name, index) => `
    <button class="polaroid" type="button" data-member="${index}" style="--tilt:${tilts[index]}deg;--pin:${pins[index % pins.length]}">
      ${photoMarkup()}<strong>${name}</strong><span class="gift-badge" hidden></span>
    </button>`).join("");
  renderGiftBadges();
}

function drawThreads() {
  const board = document.querySelector("#detectiveBoard");
  const svg = document.querySelector("#threads");
  const cards = [...document.querySelectorAll(".polaroid")];
  if (!cards.length) return;
  const boardRect = board.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  svg.innerHTML = connections.map(([from, to], index) => {
    const a = cards[from].getBoundingClientRect(), b = cards[to].getBoundingClientRect();
    const x1 = a.left - boardRect.left + a.width / 2, y1 = a.top - boardRect.top + 3;
    const x2 = b.left - boardRect.left + b.width / 2, y2 = b.top - boardRect.top + 3;
    const bend = (index % 2 ? 1 : -1) * Math.min(34, Math.abs(x2 - x1) * .12);
    return `<path class="${index % 4 === 0 ? "gold" : ""}" d="M ${x1} ${y1} Q ${(x1+x2)/2+bend} ${(y1+y2)/2-bend} ${x2} ${y2}" />`;
  }).join("");
}

function openMember(index) {
  currentMemberIndex = index;
  enteredPin = "";
  const profile = memberData[index];
  const isReady = Boolean(profile?.question && profile?.pin);
  document.querySelector("#dialogName").textContent = members[index];
  document.querySelector("#dialogAvatar").innerHTML = photoMarkup();
  document.querySelector("#dialogQuestion").textContent = isReady
    ? profile.question
    : "Câu hỏi và mật mã chưa được cập nhật trong sheet.";
  document.querySelector("#pinFeedback").textContent = isReady ? "" : "waiting for question & code";
  document.querySelector("#pinPreview").setAttribute("aria-label", isReady
    ? `Mã số gồm ${profile.pin.length} chữ số`
    : "Hồ sơ chưa có mật mã trong sheet");
  document.querySelector("#pinPreview").innerHTML = isReady
    ? Array.from({ length: profile.pin.length }, () => "<span>—</span>").join("")
    : "";
  document.querySelectorAll("#pinKeypad button").forEach(button => { button.disabled = !isReady; });
  renderPin();
  dialog.showModal();
}

function renderPin() {
  document.querySelectorAll("#pinPreview span").forEach((slot, index) => {
    slot.textContent = enteredPin[index] ? "●" : "—";
  });
}

function handlePinKey(key) {
  const profile = memberData[currentMemberIndex];
  if (!profile?.pin) return;
  const feedback = document.querySelector("#pinFeedback");
  feedback.textContent = "";
  if (key === "clear") enteredPin = enteredPin.slice(0, -1);
  else if (key === "enter") checkPin();
  else if (/^\d$/.test(key) && enteredPin.length < profile.pin.length) enteredPin += key;
  renderPin();
  if (enteredPin.length === profile.pin.length && key !== "enter") setTimeout(checkPin, 180);
}

function checkPin() {
  const profile = memberData[currentMemberIndex];
  if (!profile || enteredPin.length !== profile.pin.length) return;
  if (enteredPin === profile.pin) {
    document.querySelector("#pinFeedback").textContent = "unlocked";
    dialog.classList.add("is-unlocked");
    setTimeout(() => {
      dialog.close();
      dialog.classList.remove("is-unlocked");
      beginWishSequence();
    }, 620);
    return;
  }
  dialog.classList.add("is-wrong");
  document.querySelector("#pinFeedback").textContent = "not quite — try again";
  setTimeout(() => {
    enteredPin = "";
    renderPin();
    dialog.classList.remove("is-wrong");
  }, 680);
}

function clearSequenceTimers() {
  sequenceTimers.forEach(clearTimeout);
  sequenceTimers = [];
}

function buildWishRain() {
  const messages = memberData[currentMemberIndex]?.wishes || [];
  wishRain.innerHTML = Array.from({ length: 16 }, (_, index) => {
    const text = index % 3 === 0 ? messages[index % messages.length] : index % 5 === 0 ? messages[(index + 1) % messages.length] : "";
    const left = 3 + ((index * 17) % 92);
    const delay = (index % 8) * .34;
    const duration = 4.8 + (index % 5) * .38;
    const rotate = -18 + (index * 13) % 37;
    return `<i style="--left:${left}%;--delay:${delay}s;--duration:${duration}s;--rotate:${rotate}deg"><span>${escapeHtml(text)}</span></i>`;
  }).join("");
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function renderDossier() {
  const profile = memberData[currentMemberIndex];
  if (!profile) return;
  const count = profile.wishes.length;
  document.querySelector("#wishSequence").setAttribute("aria-label", `Lời chúc dành cho ${members[currentMemberIndex]}`);
  document.querySelector("#folderFileLabel").textContent = `FILE ${String(currentMemberIndex + 1).padStart(2, "0")} · ${members[currentMemberIndex].toUpperCase()}`;
  document.querySelector("#folderName").textContent = members[currentMemberIndex].toUpperCase();
  document.querySelector("#folderSummary").textContent = `${count} little messages kept for you`;
  const wishSheets = document.querySelector("#wishSheets");
  wishSheets.style.setProperty("--wish-count", count);
  wishSheets.innerHTML = profile.wishes.map((wish, index) => {
    const rotate = [-4, 2, -2, 4][index % 4];
    const shift = [7, 0, 3, 9][index % 4];
    const longClass = wish.length > 145 ? " is-long" : "";
    return `<article class="wish-sheet${longClass}" style="--sheet-rotate:${rotate}deg;--sheet-shift:${shift}px"><small>MESSAGE ${String(index + 1).padStart(2, "0")}</small><p>${escapeHtml(wish)}</p></article>`;
  }).join("");
}

function beginWishSequence() {
  clearSequenceTimers();
  renderDossier();
  buildWishRain();
  wishSequence.hidden = false;
  wishSequence.className = "wish-sequence";
  requestAnimationFrame(() => wishSequence.classList.add("is-raining"));
  sequenceTimers.push(setTimeout(() => wishSequence.classList.add("is-gathering"), 4300));
  sequenceTimers.push(setTimeout(showDossier, 5900));
}

function showDossier() {
  renderDossierGift();
  wishSequence.classList.add("show-dossier");
  document.querySelector("#skipWishRain").hidden = true;
}

function closeWishSequence() {
  clearSequenceTimers();
  wishSequence.hidden = true;
  wishSequence.className = "wish-sequence";
  document.querySelector("#skipWishRain").hidden = false;
}

function loadGiftAssignments() {
  try {
    const saved = JSON.parse(localStorage.getItem("12p2-gift-assignments-v1"));
    if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      const valid = Object.entries(saved).every(([memberIndex, number]) =>
        Number.isInteger(Number(memberIndex)) && Number.isInteger(number) && number >= 1 && number <= 25
      );
      if (valid && new Set(Object.values(saved)).size === Object.values(saved).length) return saved;
    }
  } catch (_) {}
  return {};
}

function deriveAvailableGifts() {
  const assigned = new Set(Object.values(giftAssignments));
  return Array.from({ length: 25 }, (_, index) => index + 1).filter(number => !assigned.has(number));
}

function saveGiftAssignments() {
  localStorage.setItem("12p2-gift-assignments-v1", JSON.stringify(giftAssignments));
}

function renderGiftBadges() {
  document.querySelectorAll(".polaroid").forEach((card, index) => {
    const badge = card.querySelector(".gift-badge");
    const assignedNumber = giftAssignments[index];
    badge.hidden = !assignedNumber;
    badge.textContent = assignedNumber ? `GIFT ${assignedNumber}` : "";
    card.classList.toggle("has-gift", Boolean(assignedNumber));
  });
}

function renderDossierGift() {
  const tag = document.querySelector("#dossierGiftTag");
  const assignedNumber = giftAssignments[currentMemberIndex];
  tag.hidden = !assignedNumber;
  tag.textContent = assignedNumber ? `GIFT NO. ${assignedNumber}` : "";
}

function wheelColors(count) {
  const colors = ["#7598b5", "#f6edda", "#d5ad60", "#b6cddd"];
  return Array.from({ length: count }, (_, index) => {
    const start = index * 360 / count;
    const end = (index + 1) * 360 / count;
    return `${colors[index % colors.length]} ${start}deg ${end}deg`;
  }).join(",");
}

function renderWheel() {
  availableGifts = deriveAvailableGifts();
  const count = availableGifts.length;
  const assignedNumber = giftAssignments[currentMemberIndex];
  giftWheel.style.transition = "none";
  giftWheel.style.transform = "rotate(0deg)";
  wheelRotation = 0;
  giftWheel.style.background = count ? `conic-gradient(${wheelColors(count)})` : "#ded7c9";
  giftWheel.innerHTML = availableGifts.map((number, index) => {
    const angle = (index + .5) * 360 / count;
    return `<span style="--angle:${angle}deg">${number}</span>`;
  }).join("");
  document.querySelector("#poolCount").textContent = assignedNumber
    ? `Số ${assignedNumber} đã được lưu cho ${members[currentMemberIndex]}`
    : count ? `${count} số quà còn lại` : "Tất cả phần quà đã được rút";
  const spinButton = document.querySelector("#spinWheel");
  spinButton.disabled = count === 0 || Boolean(assignedNumber);
  spinButton.textContent = assignedNumber ? "number already drawn" : count === 0 ? "the wheel is empty" : "spin the wheel";
  document.querySelector("#wheelResult").innerHTML = assignedNumber
    ? `<small>YOUR GIFT NUMBER</small><strong>${assignedNumber}</strong>`
    : "";
}

function secureRandomIndex(length) {
  const value = new Uint32Array(1);
  crypto.getRandomValues(value);
  return value[0] % length;
}

function spinGiftWheel() {
  if (giftAssignments[currentMemberIndex] || !availableGifts.length) return;
  renderWheel();
  const button = document.querySelector("#spinWheel");
  button.disabled = true;
  button.textContent = "spinning…";
  const selectedIndex = secureRandomIndex(availableGifts.length);
  const selectedNumber = availableGifts[selectedIndex];
  const segment = 360 / availableGifts.length;
  wheelRotation = 360 * 6 + (360 - (selectedIndex + .5) * segment);
  requestAnimationFrame(() => {
    giftWheel.style.transition = "transform 4.8s cubic-bezier(.12,.72,.08,1)";
    giftWheel.style.transform = `rotate(${wheelRotation}deg)`;
  });
  setTimeout(() => {
    giftAssignments[currentMemberIndex] = selectedNumber;
    availableGifts = deriveAvailableGifts();
    saveGiftAssignments();
    renderGiftBadges();
    renderDossierGift();
    document.querySelector("#wheelResult").innerHTML = `<small>YOUR GIFT NUMBER</small><strong>${selectedNumber}</strong>`;
    document.querySelector("#poolCount").textContent = `Số ${selectedNumber} đã được lưu cho ${members[currentMemberIndex]} · ${availableGifts.length} số còn lại`;
    button.disabled = true;
    button.textContent = "number saved";
  }, 4950);
}

document.querySelector("#memberGrid").addEventListener("click", e => {
  const card = e.target.closest(".polaroid"); if (card) openMember(Number(card.dataset.member));
});
document.querySelector("#skipIntro").addEventListener("click", e => { e.stopPropagation(); enterBoard(); });
document.querySelector("#replayIntro").addEventListener("click", replayIntro);
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
document.querySelector("#pinKeypad").addEventListener("click", event => {
  const key = event.target.closest("button")?.dataset.key;
  if (key) handlePinKey(key);
});
document.querySelector("#skipWishRain").addEventListener("click", showDossier);
document.querySelector("#closeWishSequence").addEventListener("click", closeWishSequence);
document.querySelector("#openGiftWheel").addEventListener("click", () => { renderWheel(); wheelDialog.showModal(); });
document.querySelector("#closeWheel").addEventListener("click", () => wheelDialog.close());
document.querySelector("#spinWheel").addEventListener("click", spinGiftWheel);
function advanceIntro() {
  if (isTyping) finishTyping();
  else if (phraseIndex === 0) showTitle();
  else enterBoard();
}

intro.addEventListener("click", e => { if (!e.target.closest("button")) advanceIntro(); });
document.addEventListener("keydown", e => {
  if (!intro.hidden && (e.code === "Space" || e.code === "Enter")) { e.preventDefault(); advanceIntro(); }
  if (e.code === "Escape" && dialog.open) dialog.close();
  if (dialog.open && /^\d$/.test(e.key)) handlePinKey(e.key);
  if (dialog.open && e.key === "Backspace") handlePinKey("clear");
  if (dialog.open && e.key === "Enter") handlePinKey("enter");
});
window.addEventListener("resize", () => requestAnimationFrame(drawThreads));

buildBoard();
typeIntro();
