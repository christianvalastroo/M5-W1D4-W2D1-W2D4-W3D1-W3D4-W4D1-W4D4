import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import AllTheBooks from "./AllTheBooks"
import fantasy from "../../books/fantasy.json"

import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

describe("AllTheBooks component", () => {

    it("should render all the books", () => {

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <AllTheBooks search="" />
                </ThemeProvider>
            </BrowserRouter>
        )

        const buttons = screen.getAllByRole("button", {
            name: /dettaglio/i
        })

        expect(buttons).toHaveLength(fantasy.length)
    })

    it("should select only one book at a time", () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <AllTheBooks search="" />
                </ThemeProvider>
            </BrowserRouter>
        )

        const detailButtons = screen.getAllByRole("button", {
            name: /dettaglio/i,
        })

        const firstCard = detailButtons[0].closest(".book-card")
        const secondCard = detailButtons[1].closest(".book-card")

        fireEvent.click(firstCard)

        expect(firstCard).toHaveClass("selected")
        expect(secondCard).not.toHaveClass("selected")

        fireEvent.click(secondCard)

        expect(firstCard).not.toHaveClass("selected")
        expect(secondCard).toHaveClass("selected")
    })
})
