# 📚 EpiBooks

Piccola applicazione realizzata con **React + Vite** per mostrare un catalogo di libri. Il progetto usa componenti riutilizzabili, dati caricati da file JSON e uno stile basato su **Bootstrap** e **React-Bootstrap**.

## ✨ Cosa ho realizzato

- Una **navbar** con il nome del progetto e i link principali
- Un componente **Welcome** con messaggio di benvenuto
- Un componente **AllTheBooks** che mostra i libri in una griglia responsive
- Una barra di ricerca per filtrare i libri per titolo
- Un messaggio di avviso quando la ricerca non trova risultati
- Un componente **SingleBook** per visualizzare ogni libro come card
- Card selezionabili con click sulla copertina
- Un'area commenti collegata al libro selezionato
- Recupero delle recensioni tramite API esterna
- Aggiunta di nuove recensioni con testo e valutazione
- Eliminazione delle recensioni esistenti
- Un **footer** che rimane in basso quando la pagina ha poco contenuto
- L'integrazione dei dati dei libri da file **JSON**

## 🧩 Struttura del progetto

```text
src/
├── books/
│   ├── fantasy.json
│   ├── history.json
│   ├── horror.json
│   ├── romance.json
│   └── scifi.json
├── components/
│   ├── AddComment/
│   ├── AllTheBooks/
│   ├── CommentArea/
│   ├── CommentList/
│   ├── MyFooter.jsx/
│   ├── MyNav.jsx/
│   ├── SingleBook/
│   ├── SingleComment/
│   └── Welcome/
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🛠️ Tecnologie usate

- **React**
- **Vite**
- **Bootstrap**
- **React-Bootstrap**
- **JavaScript**
- **JSON**
- **Strive School Books API**

## 📖 Componenti principali

### `MyNav`
Gestisce la barra di navigazione superiore con brand e link.

### `Welcome`
Mostra un alert di benvenuto all'utente.

### `AllTheBooks`
Importa i libri dal file `fantasy.json`, li filtra in base al testo cercato e li renderizza in una griglia responsive.

### `SingleBook`
Riceve un libro tramite `props` e mostra:

- copertina
- titolo
- prezzo

La card può essere selezionata cliccando sulla copertina. Quando un libro viene selezionato, mostra il componente `CommentArea` collegato all'`asin` del libro.

### `CommentArea`
Gestisce lo stato delle recensioni del libro selezionato. Recupera i commenti dall'API usando l'`asin` ricevuto da `SingleBook` e passa i dati a `CommentList` e `AddComment`.

### `CommentList`
Riceve l'array dei commenti e renderizza un componente `SingleComment` per ogni recensione.

### `SingleComment`
Mostra il testo della recensione, il voto e il pulsante per eliminare il commento. Dopo l'eliminazione richiama la funzione di refresh per aggiornare la lista.

### `AddComment`
Contiene il form per inserire una nuova recensione. Permette di scrivere il commento, scegliere un voto da 1 a 5 stelle e inviare i dati all'API.

### `MyFooter`
Mostra il footer finale della pagina. Il layout principale fa in modo che resti in basso quando il contenuto è poco.

## 🌐 API commenti

L'app usa le API di Strive School per leggere, creare ed eliminare commenti:

- `GET /api/books/:asin/comments/` per recuperare le recensioni di un libro
- `POST /api/comments` per aggiungere una nuova recensione
- `DELETE /api/comments/:commentId` per eliminare una recensione

Le richieste usano l'header `Authorization` con token `Bearer`.

## 🚀 Come avviare il progetto

```bash
npm install
npm run dev
```

Poi apri il progetto nel browser all'indirizzo mostrato da Vite.

## 📦 Comandi utili

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## 🎯 Obiettivo del progetto

L'obiettivo è costruire una piccola interfaccia React suddivisa in componenti, imparando a:

- organizzare il codice in modo modulare
- passare dati tramite `props`
- gestire lo stato con `useState`
- usare file JSON come sorgente dati
- creare layout responsive con React-Bootstrap
- filtrare una lista in base all'input dell'utente
- usare `useEffect` per caricare dati quando cambia il libro selezionato
- collegare l'app a un'API esterna con `fetch`
- gestire operazioni `GET`, `POST` e `DELETE`

## 🔍 Stato attuale

Al momento l'app:

- mostra la navbar
- visualizza il messaggio di benvenuto
- stampa i libri fantasy in una griglia
- permette di cercare un libro per titolo
- mostra un alert se non ci sono risultati
- permette di selezionare una card
- mostra le recensioni del libro selezionato
- permette di aggiungere una recensione
- permette di eliminare una recensione
- mostra il footer in fondo alla pagina
