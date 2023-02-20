const WhoToFollowListItem = (who) => {
  return `
    <div class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex flex-row align-items-center gap-1">
        <img src=${who.avatarIcon} alt=${who.userName} class="rounded-circle follow-icon" />
        <div>
            <div class="fw-bold text-wrap">
            ${who.userName}
                <i class="fa-solid fa-circle-check"></i>
            </div>
            @${who.handle}
        </div>
    </div>
    <button class="btn btn-primary btn-md rounded-pill">
        Follow
    </button>
</div>
      `;
};

export default WhoToFollowListItem;
