// scripts.js
const mockVideos = [
    {id:1, thumb:"https://picsum.photos/id/1015/300/500", user:"@billieeilish", caption:"WILDFLOWER 🌼", likes:1240000},
    {id:2, thumb:"https://picsum.photos/id/201/300/500", user:"@billieeilish", caption:"Birds of a Feather 🕊️", likes:890000},
    {id:3, thumb:"https://picsum.photos/id/237/300/500", user:"@billieeilish", caption:"What Was I Made For? 💔", likes:2450000},
    {id:4, thumb:"https://picsum.photos/id/29/300/500", user:"@billieeilish", caption:"bad guy dance challenge", likes:567000},
    {id:5, thumb:"https://picsum.photos/id/1016/300/500", user:"@billieeilish", caption:"HIT ME HARD AND SOFT tour moments", likes:1340000},
    {id:6, thumb:"https://picsum.photos/id/160/300/500", user:"@billieeilish", caption:"POV: you’re at my concert 😭", likes:3120000},
    {id:7, thumb:"https://picsum.photos/id/201/300/500", user:"@billieeilish", caption:"new hair who dis 💚", likes:980000},
    {id:8, thumb:"https://picsum.photos/id/251/300/500", user:"@billieeilish", caption:"lunch break vibes 🍜", likes:756000}
];

function populateVideos() {
    const grid = document.getElementById('videoGrid');
    mockVideos.forEach(v => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="video-card h-100">
                <div class="video-placeholder" style="background-image:url('${v.thumb}')">
                    <svg class="play-icon" width="64" height="64" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><polygon points="8 5 20 12 8 19"/></svg>
                </div>
                <div class="p-3">
                    <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle bg-secondary" style="width:32px;height:32px;"></div>
                        <div>
                            <strong>${v.user}</strong>
                            <div class="small text-muted">${v.caption}</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="heart btn btn-link p-0" onclick="toggleLike(this)">
                            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </button>
                        <span class="likes-count small text-muted">${(v.likes/1000000).toFixed(1)}M</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

function toggleLike(btn) {
    btn.classList.toggle('liked');
    const countEl = btn.parentElement.querySelector('.likes-count');
    let count = parseFloat(countEl.textContent);
    countEl.textContent = btn.classList.contains('liked') ? (count + 0.1).toFixed(1) + 'M' : (count - 0.1).toFixed(1) + 'M';
}

function toggleFollow(btn) {
    if (btn.textContent === "Follow") {
        btn.textContent = "Following";
        btn.classList.add("btn-success");
        btn.classList.remove("btn-light");
    } else {
        btn.textContent = "Follow";
        btn.classList.remove("btn-success");
        btn.classList.add("btn-light");
    }
}

function switchTab(el) {
    document.querySelectorAll('#profileTabs .nav-link').forEach(tab => tab.classList.remove('active'));
    el.classList.add('active');
    // In real replica only Videos tab works
}

function showLoginModal() {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

function showUploadModal() {
    alert("Upload feature coming soon! (Exact replica demo)");
}

// Fake infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        const grid = document.getElementById('videoGrid');
        for (let i = 0; i < 3; i++) {
            const fake = {...mockVideos[Math.floor(Math.random()*mockVideos.length)], id: Date.now()+i};
            const col = document.createElement('div');
            col.className = 'col';
            col.innerHTML = `
                <div class="video-card h-100">
                    <div class="video-placeholder" style="background-image:url('${fake.thumb}')">
                        <svg class="play-icon" width="64" height="64" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><polygon points="8 5 20 12 8 19"/></svg>
                    </div>
                    <div class="p-3">
                        <div class="d-flex align-items-center gap-2">
                            <div class="rounded-circle bg-secondary" style="width:32px;height:32px;"></div>
                            <div>
                                <strong>@billieeilish</strong>
                                <div class="small text-muted">${fake.caption}</div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <button class="heart btn btn-link p-0" onclick="toggleLike(this)">
                                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </button>
                            <span class="likes-count small text-muted">${(fake.likes/1000000).toFixed(1)}M</span>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    populateVideos();
});
