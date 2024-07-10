import { act, fireEvent, render, waitFor } from "@testing-library/react";

import useCachedApi from "../../../hooks/useCachedApi";
import { testData } from "./utils";
import { getSearchURL } from "../../../hooks/utils";
import page from "./page";
import renderSearchPage from "./setup";

jest.mock("../../../hooks/useCachedApi");

const mockedUseCachedApi = useCachedApi as jest.MockedFunction<
  typeof useCachedApi
>;

describe("<Search />", () => {
  let mockedGet: jest.Mock;
  beforeEach(() => {
    mockedGet = jest.fn().mockResolvedValue(testData);
    mockedUseCachedApi.mockReturnValue({
      get: mockedGet,
    });
  });

  describe("Initial State", () => {
    it("should show loading initially", async () => {
      renderSearchPage();
      expect((await page.getAllSkeleton()).length).toBe(3);
    });

    it("should show correct number of table rows", async () => {
      renderSearchPage();
      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      expect(page.getTableBody().children.length).toBe(5);
    });
  });

  describe("Pagination", () => {
    it("should call api with default search params", async () => {
      renderSearchPage();
      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      expect(mockedGet).toHaveBeenCalledWith(
        getSearchURL({ search: "", page: 1, itemsPerPage: 5 }),
        expect.any(Object),
        expect.any(Function)
      );
    });

    it("should call api with correct sort", async () => {
      renderSearchPage();
      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      await act(async () => {
        fireEvent.click(await page.getStarsHeaderCell());
      });

      expect(mockedGet).toHaveBeenCalledWith(
        getSearchURL({ search: "", page: 1, itemsPerPage: 5, sortBy: "stars" }),
        expect.any(Object),
        expect.any(Function)
      );
    });

    it("should call api with correct search query", async () => {
      renderSearchPage();
      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      await act(async () => {
        await page.updateTextField("test");
      });

      await waitFor(() => {
        expect(mockedGet).toHaveBeenCalledTimes(2);
      });

      expect(mockedGet).toHaveBeenLastCalledWith(
        getSearchURL({
          search: "test",
          page: 1,
          itemsPerPage: 5,
        }),
        expect.any(Object),
        expect.any(Function)
      );
    });
  });

  describe("Api Calls", () => {
    it("should test if the previous button is disable on first page", async () => {
      renderSearchPage();
      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      expect(page.getPreviousButton()).toBeDisabled();
    });

    it("should call the api with correct pagination params", async () => {
      renderSearchPage();

      await waitFor(() => {
        expect(page.getTableBody()).toBeInTheDocument();
      });

      await act(() => {
        fireEvent.click(page.getNextButton());
      });

      await waitFor(() => {
        expect(mockedGet).toHaveBeenCalledTimes(2);
      });

      expect(mockedGet).toHaveBeenLastCalledWith(
        getSearchURL({
          search: "",
          page: 2,
          itemsPerPage: 5,
        }),
        expect.any(Object),
        expect.any(Function)
      );

      await waitFor(() => {
        expect(page.getPreviousButton()).toBeEnabled();
      });

      await act(() => {
        page.clickPreviousButton();
      });

      expect(mockedGet).toHaveBeenLastCalledWith(
        getSearchURL({
          search: "",
          page: 1,
          itemsPerPage: 5,
        }),
        expect.any(Object),
        expect.any(Function)
      );
    });
  });
});
