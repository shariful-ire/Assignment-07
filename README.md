# KeenKeeper - Keep Your Relationships Alive

KeenKeeper is a modern and responsive web application that helps users track, manage, and maintain personal relationships. It offers smart reminders, interaction tracking, and useful analytics so that no important connection is forgotten.

🔗 Live Demo: 
🔗 GitHub Repo:

🚀 Features

🧑‍🤝‍🧑 Friend Management
Provides a clear overview of your social circle using summary cards.

Smart Status Tracking allows each friend card to update automatically based on urgency, so you can quickly see who is On-track, Almost Due, or Overdue.

Visual status indicators:
🔴 Overdue
🟡 Almost Due
🟢 On Track

📊 Smart Relationship Tracking
Tracks how many days have passed since your last contact.
You can set a relationship goal (for example, contact every 14/15 days).

The system automatically calculates:

* Contact status
* Next due date

This helps maintain regular communication habits.

⚡ Quick Check-In System
Allows you to log interactions instantly with a single click:

📞 Call
💬 Text
🎥 Video

It automatically:

* Adds entries to the timeline
* Records the date and interaction type
* Shows real-time toast notifications

📜 Timeline History
Displays the complete history of interactions.

Each entry includes:
📅 Date
📌 Interaction type (Call/Text/Video)
📝 Description (e.g., "Call with John")

You can filter interactions by:

* Call
* Text
* Video

📈 Friendship Analytics
Uses a Pie Chart (Recharts) to visualize interaction data.

It shows the distribution of:

* Calls
* Texts
* Video calls

This helps users understand their communication patterns.

🎯 Friend Details Dashboard
Each friend has a dedicated page.

It includes:

* Profile overview
* Contact statistics
* Relationship goal tracking
* Quick action buttons

The layout is clean and organized for better usability.

🎨 Modern UI/UX
Built with a clean and user-friendly interface.

* Smooth navigation using React Router
* Icon-based navigation for better usability

Fully responsive design:
📱 Mobile
📲 Tablet
💻 Desktop

⚙️ Additional Functionalities
🔄 Loading animation while fetching data
🚫 Custom 404 page for invalid routes
🔔 Toast notifications for user actions
🔁 Page reload support without breaking routes
📌 Active route highlighting in Navbar

🛠️ Tech Stack

Frontend: React.js + Next.js
Routing: App Router
Styling: Tailwind CSS + DaisyUI
Charts: Recharts
Notification: React Toastify
Icons: React Icons
State Management: React Hooks
Deployment: Vercel

📦 Installation & Setup

1️⃣ Clone the repository
git clone

2️⃣ Navigate to the project folder
cd kinkeeper

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev

5️⃣ Open in browser
http://localhost:3000/

📂 Project Structure

.
├── src/
│   ├── app/
│   │   ├── [friendId]/
│   │   ├── contextAPI/
│   │   ├── data/
│   │   ├── stats/
│   │   ├── timeline/
│   │   ├── error.jsx
│   │   ├── favicon.ico
│   │   ├── global-not-found.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── loading.jsx
│   │   └── page.js
│   └── components/

🎦 Preview




👨‍💻 Developed by Md. Shariful Islam
