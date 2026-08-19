document.addEventListener('DOMContentLoaded', () => {
  let likes = 0;
  const likeBtn = document.getElementById('like-btn');
  const likeCount = document.getElementById('like-count');

  if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
      likes++;
      likeCount.textContent = likes;
    });
  }
});
