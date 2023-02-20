const PostSummaryItem = (post) =>
  `<a href="#"
  class="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
  <div class="d-flex flex-column">
      <div class="text-muted">${post.topic}</div>
      <div>
          <span class="fw-bold">${post.userName}</span>
          <i class="fa-solid fa-circle-check"></i>
          <span>~</span>
          <span>${post.time}</span>
      </div>
      <div class="fw-bold">
          ${post.title}
      </div>
  </div>
  <img class="suggested-icon rounded" src="${post.image}" alt="ReactJS" />
</a>
`;

export default PostSummaryItem;
