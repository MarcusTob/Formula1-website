# DS3103 — Web Development (CRUD Project)

Dette prosjektet ble laget som del av faget *DS3103 - Web Development* ved Høyskolen Kristiania.

Målet med prosjektet var å utvikle en fullstendig CRUD-applikasjon med egen Web API og database. Frontend kommuniserer med API-et gjennom HTTP-requests (GET, POST, PUT, DELETE).

---

## Teknologier brukt
- Frontend: React, Tailwind
- Backend: .NET (C#) Web API
- Database: SQLite
- API: REST

---

## Funksjonalitet
API-et tilbyr CRUD-funksjonalitet på ulike ressurser i databasen.

### Web API-metoder:
- Hent alle elementer  
- Hent elementer etter ID  
- Hent elementer etter annen property (f.eks. navn)  
- Legg til nye elementer (inkludert bildeopplasting)  
- Oppdater eksisterende elementer  
- Slett elementer 

Frontend bruker disse metodene for å hente og manipulere data.

---

## Hvordan kjøre prosjektet

### 1. Start backend (API)
Åpne terminal og naviger til API-mappen:
```bash
cd f1_api
dotnet run
```

### 2. Start frontend
Åpne terminal og naviger til Frontend-mappen:
```bah
cd f1_frontend
npm install
npm start
```

### Database
Prosjektet kommer med en ferdig SQLite-database (FormulaOne.db) med eksempedata som brukes av API-et.

### Om prosjektet
Prosjektet demonstrerer hvordan man kan bygge en enkel fullstack applikasjon med CRUD-funksjonalitet, hvor frontend og backend kommuniserer via et REST API.

Løsningen ble utviklet som del av eksamen i faget DS3103, med mål om å vise forståelse for både backend-utvikling og frontend-integrasjon.

Resultatet av eksamen ble B
