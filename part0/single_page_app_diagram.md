```mermaid
    sequenceDiagram
        participant browser
        participant server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: CSS file
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: JavaScript file
        deactivate server
        Note left of server: The browser starts executing the JavaScript code that fetches the JSON from the server.
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{"content": "recarga", "date":"2025-06"},...]
        Note right of browser: The browser executes the redrawNotes function.
```