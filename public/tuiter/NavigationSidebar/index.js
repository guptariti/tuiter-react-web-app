import navItems from "./navItems.js";

const NavigationSidebar = (active) => {
  return `
            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-brands fa-twitter"></i></span>
            </a>
            ${navItems
              .map(
                (item) => `
                <a href=${
                  item.link
                } class=${`"list-group-item list-group-item-action ${
                  item.title === active ? "active" : ""
                }"`}>
                  <span ${item.icons.length > 1 ? `class = "fa-stack"` : ""}>
                  ${item.icons
                    .map((icon) => `<i class="${icon}"}></i>`)
                    .join("")}
                  </span>
                  <span class="d-none d-xl-inline">${item.title}</span>
                </a>
            `
              )
              .join(``)}
            <a href="#" class=${`"list-group-item list-group-item-action ${
              "More" === active ? "active" : ""
            }"`}>
              <span class="fa-stack"
                ><i class="fa-solid fa-stack-1x fa-inverse fa-circle"></i>
                <i class="fa-solid fa-stack-1x fa-ellipsis"></i
              ></span>
              <span class="d-none d-xl-inline">More</span>
            </a>
          </div>
          <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
          </div>
    `;
};
export default NavigationSidebar;