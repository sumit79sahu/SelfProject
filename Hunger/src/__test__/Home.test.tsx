import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import FoodChoice from "../layouts/FoodChoice";
import TopRestaurants from "../layouts/TopRestaurants";
import TitleWithScrollBox from "../components/TitleWithScrollBox";
import { mockData } from "../utils/mockData";
import configureStore from "redux-mock-store";
import { Food_Image } from "../utils/constants";

const mockStore = configureStore();
const store = mockStore(mockData);

describe("Home Page Test cases", () => {
  describe("TitleWithScrollBox Component Test Cases", () => {
    test("Should load two buttons", () => {
      render(<TitleWithScrollBox title={"What's on your mind?"} slider={{}} />);

      const heading = screen.getByText("What's on your mind?");
      expect(heading).toBeInTheDocument();

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  });
  describe("FoodChoice Layout Test Cases", () => {
    it("should have link", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FoodChoice />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(8);

      links.forEach((link, index) => {
        const url = new URL(mockData.HomeData.Food_Choice[index].action.link);
        const expectedLink = `/collection/${url.searchParams.get(
          "collection_id"
        )}?collection_id=${url.searchParams.get(
          "collection_id"
        )}&tags=${url.searchParams.get("tags")}&type=${url.searchParams.get(
          "type"
        )}`;
        expect(link).toHaveAttribute("href", expectedLink);
      });
    });

    it("should have images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FoodChoice />
          </Provider>
        </BrowserRouter>
      );

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(8);
      images.forEach((img, index) => {
        const expectedSrc =
          Food_Image + mockData.HomeData.Food_Choice[index].imageId;
        expect(img).toHaveAttribute("src", expectedSrc);
      });
    });
  });

  describe("TopRestauants Layout Test Case", () => {
    it("should have links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TopRestaurants />
          </Provider>
        </BrowserRouter>
      );
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(2);

      links.forEach((link,index)=>{
        const expectedHref=`/restaurant/${mockData.HomeData.Top_Restaurants[index].name+"__"+mockData.HomeData.Top_Restaurants[index].id}`
        expect(link).toHaveAttribute("href",expectedHref)
      })
    });

    describe("RestaurantCard Component Test Cases",()=>{
      it("should load")
    })
  });
});
