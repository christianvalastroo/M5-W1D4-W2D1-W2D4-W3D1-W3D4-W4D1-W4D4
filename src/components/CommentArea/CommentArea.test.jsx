import { render, screen } from "@testing-library/react"
import CommentArea from "./CommentArea"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

describe("CommentArea component", () => {

    it("should render comment area title", () => {

        render(
            <ThemeProvider>
                <CommentArea selected="123" />
            </ThemeProvider>
        )

        const title = screen.getByText(/recensioni del libro/i)

        expect(title).toBeInTheDocument()
    })

    it("should not render comments at startup", () => {

        render(
            <ThemeProvider>
                <CommentArea selected={null} />
            </ThemeProvider>
        )

        const comment = screen.queryByText(/commento/i)

        expect(comment).not.toBeInTheDocument()
    })
})
