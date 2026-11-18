const token = document.querySelector('meta[name="editor-token"]').content;
const memberGrid = document.querySelector("#memberGrid");
const musicInput = document.querySelector("#musicInput");
const musicPreview = document.querySelector("#musicPreview");
const musicStatus = document.querySelector("#musicStatus");
const deployButton = document.querySelector("#deployButton");
const toast = document.querySelector("#toast");
let state;

function notify(message, isError = false) {
  toast.textContent = message;
  toast.className = `toast show${isError ? " error" : ""}`;
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => { toast.className = "toast"; }, 5000);
}

async function api(path, options = {}) {
  const response = await fetch(path, { ...options, headers: { "x-editor-token": token, ...(options.headers || {}) } });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Thao tác thất bại");
  return result;
}

function assetUrl(path) {
  return path ? `/preview/${path.replace(/^\.\//, "")}?v=${Date.now()}` : "";
}

function render() {
  memberGrid.innerHTML = state.members.map((name, index) => {
    const photo = state.config.memberPhotos[index];
    return `<article class="member-card" data-member="${index}">
      <div class="photo-preview">${photo ? `<img src="${assetUrl(photo)}" alt="Ảnh ${name}">` : ""}</div>
      <h3>${String(index + 1).padStart(2, "0")} · ${name}</h3>
      <label>Upload ảnh<input type="file" accept="image/jpeg,image/png,image/webp,image/gif"></label>
      <small>${photo ? "Đã có ảnh" : "Chưa có ảnh"}</small>
    </article>`;
  }).join("");
  if (state.config.music) {
    musicPreview.src = assetUrl(state.config.music);
    musicStatus.textContent = "Đã có nhạc nền";
  }
}

memberGrid.addEventListener("change", async event => {
  const input = event.target.closest('input[type="file"]');
  if (!input?.files?.[0]) return;
  const card = input.closest(".member-card");
  const member = Number(card.dataset.member);
  const file = input.files[0];
  const status = card.querySelector("small");
  status.textContent = "Đang tải ảnh…";
  try {
    const result = await api(`/api/upload/photo?member=${member}`, { method: "POST", headers: { "Content-Type": file.type }, body: file });
    state.config.memberPhotos[member] = result.path;
    const preview = card.querySelector(".photo-preview");
    preview.innerHTML = `<img src="${assetUrl(result.path)}" alt="Ảnh ${result.name}">`;
    status.textContent = "Đã lưu vào dự án";
    notify(`Đã cập nhật ảnh ${result.name}`);
  } catch (error) {
    status.textContent = "Upload thất bại";
    notify(error.message, true);
  } finally {
    input.value = "";
  }
});

musicInput.addEventListener("change", async () => {
  const file = musicInput.files?.[0];
  if (!file) return;
  musicStatus.textContent = "Đang tải nhạc…";
  try {
    const result = await api("/api/upload/music", { method: "POST", headers: { "Content-Type": file.type }, body: file });
    state.config.music = result.path;
    musicPreview.src = assetUrl(result.path);
    musicStatus.textContent = "Đã lưu vào dự án";
    notify("Đã cập nhật nhạc nền");
  } catch (error) {
    musicStatus.textContent = "Upload thất bại";
    notify(error.message, true);
  } finally {
    musicInput.value = "";
  }
});

deployButton.addEventListener("click", async () => {
  deployButton.disabled = true;
  deployButton.textContent = "Đang deploy…";
  notify("Đang build, commit và push lên GitHub…");
  try {
    const result = await api("/api/deploy", { method: "POST" });
    notify(`Đã deploy commit ${result.commit}. Vercel đang cập nhật website.`);
  } catch (error) {
    notify(error.message, true);
  } finally {
    deployButton.disabled = false;
    deployButton.textContent = "Deploy website";
  }
});

api("/api/state").then(result => { state = result; render(); }).catch(error => notify(error.message, true));
