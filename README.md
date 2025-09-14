# Party Menu App

A responsive **Party Menu React app** that allows users to browse, filter, and select dishes for their party. Users can view dish details, ingredients, and add or remove dishes from their selection.

---

## **Features**

- **Dish Cards**
  - Display dish name, description, and Veg/Non-Veg icon (square with colored dot inside).  
  - Add / Remove buttons on the right side of the dish image.  
  - “Read more” expands the full description.  
  - Ingredient button opens a modal with details.

- **Dish List**
  - Displays all available dishes in a scrollable or grid layout.  
  - Filters and search dynamically update the displayed dishes.  
  - Works with `DishCard` component to handle selection and ingredient viewing.

- **Filters**
  - Category tabs: STARTER, MAIN COURSE, DESSERT, SIDES.  
  - Veg / Non-Veg pill buttons with consistent icons.  
  - Search bar with icon inside input.  
  - Responsive filters row: single line on mobile and desktop.

- **Footer**
  - Shows **Total Dish Selected** with count.  
  - Continue button.  
  - Fixed at the bottom of the page.  
  - Responsive layout: row on desktop, column on mobile.

- **Ingredient Modal**
  - Displays dish image, name, description, and ingredients list.  
  - Veg/Non-Veg icon next to dish name.  
  - Add / Remove buttons inside modal.  
  - Centered and responsive for mobile and desktop.  

- **Responsive Design**
  - Fully responsive components for desktop and mobile.  
  - Proper margins, padding, and spacing for neat layout.  
  - Hover effects on buttons and cards for better interactivity.

---

## **Tech Stack**

- **Frontend:** React.js  
- **Styling:** CSS (custom, responsive, no frameworks)  
- **Icons:** react-icons  
- **State Management:** React `useState` and `props`  

*(Backend can be added using Node.js + SQLite if dish data is dynamic.)*

---

## **Project Structure**

party-menu-app/
│
├─ src/
│ ├─ components/
│ │ ├─ DishCard.js
│ │ ├─ DishList.js
│ │ ├─ Filters.js
│ │ ├─ Footer.js
│ │ └─ IngredientModal.js
│ │
│ ├─ data/
│ │ └─ mockDishes.js
│ │
│ ├─ App.js
│ └─ index.css
│
├─ public/
│ └─ index.html
│
├─ package.json
└─ README.md


---

## **Installation**

1. Clone the repository:

```bash
git clone <repository-url>
cd party-menu-app

Install dependencies:
npm install
Start the development server:
npm start
Open the app in your browser at http://localhost:3000.