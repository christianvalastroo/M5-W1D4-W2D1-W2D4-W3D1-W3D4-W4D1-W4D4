import { render, screen } from "@testing-library/react"
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
})