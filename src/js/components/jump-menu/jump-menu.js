/**
 * @file attaches jump menu visibility toggler.
 */
(function () {
  const toggleMenuMenuItemsVisibility = (
    isHidden,
    jumpMenuItems,
    jumpMenuToggle,
  ) => {
    if (isHidden) {
      jumpMenuItems.removeAttribute("aria-hidden");
      jumpMenuToggle.setAttribute("aria-expanded", "true");
    } else {
      jumpMenuItems.setAttribute("aria-hidden", "true");
      jumpMenuToggle.setAttribute("aria-expanded", "false");
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    const jumpMenuItems = document.querySelector(".js-jump-menu-items");
    const jumpMenuToggle = document.querySelector(".js-jump-menu-toggle");
    if (jumpMenuItems && jumpMenuToggle) {
      toggleMenuMenuItemsVisibility(false, jumpMenuItems, jumpMenuToggle);
      jumpMenuToggle.addEventListener("click", () => {
        const isHidden = jumpMenuItems.getAttribute("aria-hidden");
        toggleMenuMenuItemsVisibility(isHidden, jumpMenuItems, jumpMenuToggle);
      });
    }
  });
})();
