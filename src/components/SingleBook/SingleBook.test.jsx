import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SingleBook from "./SingleBook"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

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
})