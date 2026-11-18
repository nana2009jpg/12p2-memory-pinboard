const members = [
  "Nguyễn Minh An", "Đỗ Đức Anh", "Nguyễn Minh Đức", "Phạm Minh Đức", "Nguyễn Hoàng Bắc Hải",
  "Bùi Trung Hưng", "Đồng Xuân Khoa", "Nguyễn Trung Kiên", "Nguyễn Tuấn Kiệt", "Nguyễn Bình Minh",
  "Nguyễn Đức Minh", "Phạm Đức Minh", "Nguyễn Hoàng Minh", "Trần Phú Minh", "Đỗ Quang Minh",
  "Lê Quang Minh", "Nguyễn Tiến Minh (A)", "Nguyễn Tiến Minh (B)", "Ngô Quốc Phong", "Nguyễn Vinh Phúc",
  "Nguyễn Minh Quang", "Phạm Minh Quân", "Ngô Hoàng Thái", "Nguyễn Thế Trung", "Phạm Minh Tuấn"
];

const tilts = [-3.1, 1.8, -1.2, 3.4, -2.2, 2.6, -2.8, .9, 2.1, -1.5, 1.3, -3.5, 2.9, -.7, -2.4, 3.1, -1.8, 1.1, -3, 2.3, -.9, 3.5, -2.5, 1.6, -1.3];
const pins = ["#789bb8", "#d1a957", "#789bb8", "#b98973", "#d1a957"];
const lqmWishes = [
  "chúc sớm ngày thành bác sĩ tương lai, ko làm bệnh nhân thất vọng",
  "Chúc lqm đi học đúng h",
  "sớm đầu quân cho vượng vin, ngày lê quang minh làm bác sĩ sẽ là ngày tôi đi tập gym!"
];
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
  document.querySelector("#dialogName").textContent = members[index];
  document.querySelector("#dialogAvatar").innerHTML = photoMarkup();
  document.querySelector("#dialogQuestion").textContent = index === 15
    ? "Sinh nhật Jang Wonyoung?"
    : "Hồ sơ này chưa có câu hỏi trong bản preview.";
  document.querySelector("#pinFeedback").textContent = index === 15 ? "" : "Demo tương tác hiện được mở cho Lê Quang Minh.";
  document.querySelectorAll("#pinKeypad button").forEach(button => { button.disabled = index !== 15; });
  renderPin();
  dialog.showModal();
}

function renderPin() {
  document.querySelectorAll("#pinPreview span").forEach((slot, index) => {
    slot.textContent = enteredPin[index] ? "●" : "—";
  });
}

function handlePinKey(key) {
  if (currentMemberIndex !== 15) return;
  const feedback = document.querySelector("#pinFeedback");
  feedback.textContent = "";
  if (key === "clear") enteredPin = enteredPin.slice(0, -1);
  else if (key === "enter") checkPin();
  else if (/^\d$/.test(key) && enteredPin.length < 4) enteredPin += key;
  renderPin();
  if (enteredPin.length === 4 && key !== "enter") setTimeout(checkPin, 180);
}

function checkPin() {
  if (enteredPin.length !== 4) return;
  if (enteredPin === "3108") {
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
  const messages = lqmWishes;
  wishRain.innerHTML = Array.from({ length: 16 }, (_, index) => {
    const text = messages[index % messages.length];
    const left = 3 + ((index * 17) % 92);
    const delay = (index % 8) * .34;
    const duration = 4.8 + (index % 5) * .38;
    const rotate = -18 + (index * 13) % 37;
    return `<i style="--left:${left}%;--delay:${delay}s;--duration:${duration}s;--rotate:${rotate}deg"><span>${text}</span></i>`;
  }).join("");
}

function beginWishSequence() {
  clearSequenceTimers();
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
