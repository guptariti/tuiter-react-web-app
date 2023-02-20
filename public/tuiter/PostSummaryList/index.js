import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () =>
  ` <div class="list-group">
        ${posts.map((post) => PostSummaryItem(post)).join("")}
    </div>
    `;

export default PostSummaryList;