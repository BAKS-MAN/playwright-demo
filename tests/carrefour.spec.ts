import { expect, test } from "@playwright/test";
import { CarrefourPage } from "../pages/CarrefourPage";

test.use({ headless: false, storageState: "test-data/state.json" });

const SEARCH_PRODUCT: string = "Pizza";

test.describe("Carrefour tests", () => {
  let carrefourPage: CarrefourPage;

  test.beforeAll(async ({ browser }) => {
    carrefourPage = new CarrefourPage(await browser.newPage());
  });

  test.beforeEach(async () => {
    await carrefourPage.openHomePage();
  });

  test("Main page title check", async () => {
    await expect(carrefourPage.page).toHaveTitle(/Carrefour/);
  });

  test("Product search check", async () => {
    await carrefourPage.search(SEARCH_PRODUCT);
    await expect(carrefourPage.searchResultList).toBeVisible();
    await expect(
      carrefourPage.searchResultItemTitle,
      "All found products has the search value in the product title",
    ).toContainText([SEARCH_PRODUCT]);
  });

  test("Product list filtering", async () => {
    await carrefourPage.menuButton.click();
    await expect(
      carrefourPage.menuList,
      "Catalog menu items are displayed",
    ).toBeVisible();
    await carrefourPage.menuList.getByText("Supermercado").click();
    await carrefourPage.menuList.getByText("La Despensa").click();
    await carrefourPage.menuList
      .getByText("Conservas, Sopas y Precocinados")
      .click();
    await expect(
      carrefourPage.productCatalogFilterList,
      "The filter side bar is displayed",
    ).toBeVisible();
    await carrefourPage.productCatalogFilterList
      .getByText(SEARCH_PRODUCT)
      .check();
    await expect(
      carrefourPage.productCatalogFilterList.getByText(SEARCH_PRODUCT),
    ).toBeChecked();
    await expect(
      carrefourPage.productList,
      "The product list is displayed after the filter is applied",
    ).toBeVisible();
    expect(
      await carrefourPage.productListItemTitle.count(),
      "The list of products is not empty",
    ).toBeGreaterThan(1);
    await expect(
      carrefourPage.productListItemTitle,
      "All displayed products has the filter value in the product title",
    ).toContainText([SEARCH_PRODUCT]);
  });
});
