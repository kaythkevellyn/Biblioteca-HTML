// Filtro do catálogo de livros
const searchInput = document.querySelector("#book-search");
const bookCards = document.querySelectorAll(
    "#book-list .book-card"
);
const searchFeedback = document.querySelector(
    "#search-feedback"
);

// Evento de pesquisa em tempo real
searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value
        .toLocaleLowerCase("pt-BR")
        .trim();

    let visibleBooks = 0;

    bookCards.forEach((card) => {

        const title = card.querySelector("h3")
            .textContent
            .toLocaleLowerCase("pt-BR");

        const matches = title.includes(searchTerm);

        card.hidden = !matches;

        if (matches) {
            visibleBooks++;
        }

    });

    // Mensagens da pesquisa
    if (searchTerm === "") {

        searchFeedback.textContent = "";

    } else if (visibleBooks === 0) {

        searchFeedback.textContent =
            "Nenhum livro encontrado. Tente outro título.";

    } else {

        searchFeedback.textContent =
            `${visibleBooks} livro(s) encontrado(s).`;

    }

});


// Validação do formulário
const suggestionForm = document.querySelector(
    "#suggestion-form"
);

const readerNameInput = document.querySelector(
    "#reader-name"
);

const bookTitleInput = document.querySelector(
    "#book-title"
);

const formMessage = document.querySelector(
    "#form-message"
);

// Evento de envio do formulário
suggestionForm.addEventListener("submit", (event) => {

    // Impede o envio real do formulário
    event.preventDefault();

    const readerName = readerNameInput.value.trim();

    const bookTitle = bookTitleInput.value.trim();

    // Limpa mensagem anterior
    formMessage.textContent = "";

    // Verifica o nome do leitor
    if (readerName.length === 0) {

        formMessage.textContent =
            "Por favor, informe o nome do leitor.";

        formMessage.style.color = "red";

        readerNameInput.focus();

        return;
    }

    // Verifica se o título possui pelo menos 3 caracteres
    if (bookTitle.length < 3) {

        formMessage.textContent =
            "O título do livro deve ter pelo menos 3 caracteres.";

        formMessage.style.color = "red";

        bookTitleInput.focus();

        return;
    }

    // Mensagem de sucesso
    formMessage.textContent =
        `Obrigado, ${readerName}! Sua sugestão "${bookTitle}" foi registrada com sucesso!`;

    formMessage.style.color = "green";

    // Limpa os campos após o envio
    suggestionForm.reset();

});