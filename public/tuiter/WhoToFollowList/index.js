import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () =>
  `
    <div class="list-group">
            <div class="list-group-item fw-bold">Who to follow</div>
            ${who.map((profile) => WhoToFollowListItem(profile)).join("")}
    </div>
    `;

export default WhoToFollowList;