# React Application: Directory App


This React application is designed to manage and retrieve person information with two primary functionalities:

1. **Add New Person**: Add and manage person details, including name, date of birth, Aadhaar number, mobile number, and automatically calculated age.
2. **Retrieve Information**: Search for a person's details using their Aadhaar number.

---

## Features

### 1. Add New Person
- Allows users to dynamically add rows to a table for entering person details.
- Automatically calculates age based on the date of birth.
- Validates inputs:
  - Aadhaar number must be 12 digits.
  - Mobile number must be 10 digits.
- Saves the information to `localStorage` for persistence.
- Provides options to save or delete a row.

### 2. Retrieve Information
- Allows users to search for a person's details using their Aadhaar number.
- Displays the person's details if a match is found.
- Shows a "No match found" message if the Aadhaar number is not present in `localStorage`.

---

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## Project Structure
```
├── src
│   ├── components
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── AddNewPerson.js # Add New Person page
│   │   ├── Retrieve.js     # Retrieve Information page
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point
├── public
│   ├── index.html          # HTML template
├── package.json            # Project configuration
```

---

## Usage

### Adding a New Person
1. Navigate to the **Add New Person** tab.
2. Click the "Add Row" button to create a new row.
3. Enter the details in the respective fields.
4. Click "Save" to save the information or "Delete" to remove the row.

### Retrieving Information
1. Navigate to the **Retrieve Information** tab.
2. Enter the Aadhaar number of the person.
3. Click "Search" to retrieve the person's details.

---

## Validation Rules
- **Aadhaar Number**: Must be exactly 12 digits.
- **Mobile Number**: Must be exactly 10 digits.
- All fields must be filled before saving a row.

---

## Technologies Used
- React
- React Router
- LocalStorage for data persistence

---

## License
This project is licensed under the MIT License.

---

## Acknowledgements
- Inspired by modern web-based data management systems.

