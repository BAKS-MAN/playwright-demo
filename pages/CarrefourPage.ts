import { expect, type Locator, type Page } from "@playwright/test";

export class CarrefourPage {
  readonly page: Page;
  readonly cookiesDialog: Locator;
  readonly cookiesRejectButton: Locator;
  readonly menuButton: Locator;
  readonly menuList: Locator;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResultList: Locator;
  readonly searchResultItemTitle: Locator;
  readonly productCatalogFilterList: Locator;
  readonly productList: Locator;
  readonly productListItemTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesDialog = page.locator("div#onetrust-banner-sdk");
    this.cookiesRejectButton = page.locator(
      "button#onetrust-reject-all-handler",
    );
    this.menuButton = page.locator("nav.collage-menu button");
    this.menuList = page.locator("ul[class*='menu__list']");
    this.searchButton = page.locator("div.search-bar");
    this.searchInput = page.locator("input[type='search']");
    this.searchResultList = page.locator("section.ebx-empathy-x__body");
    this.searchResultItemTitle = page.locator("h1[class*='ebx-result__title']");
    this.productCatalogFilterList = page.locator("div.facets-lists");
    this.productList = page.locator("div.product-card-list");
    this.productListItemTitle = page.locator("h2.product-card__title");
  }

  async openHomePage() {
    await this.page.goto("https://www.carrefour.es/");
    if (await this.cookiesDialog.isVisible()) {
      await this.cookiesRejectButton.click();
      await expect(this.cookiesDialog).toBeHidden();
      await this.page.context().storageState({ path: "test-data/state.json" });
    }
  }

  async search(query: string) {
    await this.searchButton.click();
    await this.searchInput.fill(query);
  }
}
