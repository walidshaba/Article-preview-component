const shareBtn = document.getElementById('share');
const profile = document.querySelector('.profile');
function showTooltip() {
  shareBtn.classList.toggle('active');
  profile.classList.toggle('active');
}
