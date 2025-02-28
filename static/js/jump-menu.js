/**
 * @file attaches jump menu visibility toggler.
 */
(function () {
  const jumpMenuItems = document.querySelector(".js-jump-menu-items");
  const jumpMenuToggle = document.querySelector(".js-jump-menu-toggle");
  const toggleMenuMenuItemsVisibility = (isHidden) => {
    if (isHidden) {
      jumpMenuItems.removeAttribute("aria-hidden");
      jumpMenuToggle.setAttribute("aria-expanded", "true");
    }
    else {
      jumpMenuItems.setAttribute("aria-hidden", "true");
      jumpMenuToggle.setAttribute("aria-expanded", "false");
    }
  }
  if (jumpMenuItems && jumpMenuToggle) {
    toggleMenuMenuItemsVisibility(false);
    jumpMenuToggle.addEventListener("click", () => {
      const isHidden = jumpMenuItems.getAttribute("aria-hidden");
      toggleMenuMenuItemsVisibility(isHidden);
    });
  }
})();
