```mermaid
    sequenceDiagram
        participant browser
        participant server
        Note right of browser: Browser adds new note to notes array and redraws notes list.
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: return {"message":"note created"}
        deactivate server
```