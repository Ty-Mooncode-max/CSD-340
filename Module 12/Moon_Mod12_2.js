document.addEventListener("DOMContentLoaded", function () {
    const books = [
        "A Feast for Crows",
        "Star Wars: Heir to the Empire",
        "Bleach: Can't Fear Your Own World",
        "For Whom the Bell Tolls",
        "How we learn",
        "Nineteen Eighty Four",
        "2001: A Space Odyssey",
        "Brave New World",
        "Lord of the Flies",
        "The Green Mile"
    ];

    const bookList = document.querySelector(".left ol");
    const topBottomButton = document.getElementById("top_bottom");
    const bottomTopButton = document.getElementById("bottom_top");

    function updateList(order) {
        bookList.innerHTML = ""; // Clear existing list

        // Reverse the original array
        const sortedBooks = order === "asc" ? books : [...books].reverse();

        sortedBooks.forEach(book => {
            const li = document.createElement("li");
            li.textContent = book;
            bookList.appendChild(li);
        });
    }

    topBottomButton.addEventListener("click", () => updateList("asc"));
    bottomTopButton.addEventListener("click", () => updateList("desc"));
});