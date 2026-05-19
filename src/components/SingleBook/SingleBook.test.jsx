import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SingleBook from "./SingleBook"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

import userEvent from "@testing-library/user-event"

describe("SingleBook component", () => {
    it("should render book data correctly", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected={null}
                        setSelected={() => { }}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        const title = screen.getByText("Libro test")
        const price = screen.getByText(/20/)
        const button = screen.getByRole("button", { name: /dettaglio/i })

        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it("should call setSelected when clicking the card", async () => {
        const mockSetSelected = vi.fn()

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected={null}
                        setSelected={mockSetSelected}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        const title = screen.getByText("Libro test")

        await userEvent.click(title)

        expect(mockSetSelected).toHaveBeenCalled()
    })

    it("should have the correct link to the detail page", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected={null}
                        setSelected={() => { }}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        const button = screen.getByRole("button", { name: /dettaglio/i })

        expect(button).toHaveAttribute("href", "/book/123")
    })

    it("should add selected class when book is selected", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected="123"
                        setSelected={() => { }}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        const title = screen.getByText("Libro test")

        const card = title.closest(".book-card")

        expect(card).toHaveClass("selected")
    })

    it("should add selected class when clicked", async () => {

        const mockSetSelected = vi.fn()

        const { rerender } = render(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected={null}
                        setSelected={mockSetSelected}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        const title = screen.getByText("Libro test")

        const card = title.closest(".book-card")

        expect(card).not.toHaveClass("selected")

        await userEvent.click(card)

        rerender(
            <BrowserRouter>
                <ThemeProvider>
                    <SingleBook
                        title="Libro test"
                        img="https://picsum.photos/200/300"
                        price={20}
                        asin="123"
                        selected="123"
                        setSelected={mockSetSelected}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(card).toHaveClass("selected")
    })
})
