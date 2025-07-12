# 🚀 Bitespeed ReactFlow Workflow Builder

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![ReactFlow](https://img.shields.io/badge/ReactFlow-11.11.3-orange?style=for-the-badge)

**A powerful, interactive workflow builder built with React, TypeScript, and ReactFlow** 🎯

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎮 Demo](#-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Components Overview](#-components-overview)
<!-- - [📱 Responsive Design](#-responsive-design) -->
- [🔧 Configuration](#-configuration)
- [📦 Available Scripts](#-available-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 Core Functionality
- **🔄 Drag & Drop Workflow Builder** - Intuitive drag-and-drop interface for creating workflows
- **📝 Custom Node Types** - WhatsApp-style message nodes with custom styling
- **🔗 Smart Connections** - Automatic edge connections with arrow markers
- **💾 Flow Validation** - Ensures all nodes are properly connected before saving
- **📸 Export to PNG** - Download your workflow as a high-quality image

### 🎨 User Experience
<!-- - **📱 Fully Responsive** - Works seamlessly on mobile, tablet, and desktop -->
- **🎨 Modern UI** - Clean, professional interface with Tailwind CSS
- **⚡ Real-time Updates** - Instant visual feedback for all interactions
- **🔍 Node Selection** - Click nodes to edit their content
- **💬 Interactive Messages** - Edit message content with real-time preview

### 🛡️ Technical Excellence
- **🔒 Type Safety** - Full TypeScript implementation
- **⚡ Performance Optimized** - Built with Vite for lightning-fast development
- **🎯 Accessibility** - Keyboard navigation and screen reader support
- **📦 Modular Architecture** - Clean, maintainable component structure

---

## 🎮 Demo

### 🎯 How It Works

1. **🎨 Create Nodes**: Drag message nodes from the sidebar to the canvas
2. **🔗 Connect Flows**: Connect nodes by dragging from source to target handles
3. **✏️ Edit Content**: Click any node to edit its message content
4. **💾 Save Workflow**: Click "Save Work" to validate and save your flow
5. **📸 Export**: Download your workflow as a PNG image

### 🎨 Visual Features

```
┌─────────────────────────────────────────────────────────────┐
│ 🎯 Workflow Canvas                                          │
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ 💬 Message  │───▶│ 💬 Message  │───▶│ 💬 Message  │     │
│  │   Node 1    │    │   Node 2    │    │   Node 3    │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### 🎯 Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Lightning-fast build tool

### 🎨 Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Icons 5.2.1** - Beautiful icon library
<!-- - **Custom CSS** - Responsive design with mobile-first approach -->

### 🔄 Workflow Engine
- **ReactFlow 11.11.3** - Powerful workflow builder library
- **HTML-to-Image 1.11.11** - PNG export functionality

### 🛠️ Development Tools
- **ESLint 9.30.1** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### 🔧 Installation

1. **📥 Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bitespeed-reactflow.git
   cd bitespeed-reactflow
   ```

2. **📦 Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **🚀 Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **🌐 Open your browser**
   ```
   http://localhost:5173
   ```

### 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

---

## 📁 Project Structure

```
bitespeed-reactflow/
├── 📁 src/
│   ├── 🎨 components/
│   │   ├── ActualNode.tsx          # Custom message node component
│   │   ├── DownloadBtn.tsx         # PNG export functionality
│   │   ├── NavBar.tsx              # Save workflow button
│   │   ├── PopUp.tsx               # Success/error notifications
│   │   ├── ReactFlowCanvas.tsx     # Main canvas wrapper
│   │   ├── RightBar.tsx            # Sidebar with node editor
│   │   ├── SideBar.tsx             # Draggable node sidebar
│   │   └── UpdateNode.tsx          # Node content editor
│   ├── 🎯 types/
│   │   ├── actualNode.ts           # Node type definitions
│   │   ├── navBar.ts               # NavBar props interface
│   │   ├── popUp.ts                # PopUp props interface
│   │   ├── reactFlowCanvas.ts      # Canvas props interface
│   │   ├── rightBar.ts             # RightBar props interface
│   │   └── updateNode.ts           # UpdateNode props interface
│   ├── 🎨 assets/
│   │   └── whatsapp.svg            # WhatsApp icon
│   ├── App.tsx                     # Main application component
│   ├── App.css                     # Global styles and responsive design
│   └── main.tsx                    # Application entry point
├── 📁 public/
├── 📄 package.json                 # Dependencies and scripts
├── ⚙️ vite.config.ts              # Vite configuration
├── 🔧 tsconfig.json               # TypeScript configuration
└── 📖 README.md                   # This file
```

---

## 🎨 Components Overview

### 🎯 Core Components

| Component | 🎯 Purpose | 🚀 Features |
|-----------|------------|-------------|
| **ActualNode** | Custom message node | WhatsApp-style design, draggable handles |
| **ReactFlowCanvas** | Main workflow canvas | Drag & drop, connections, controls |
| **SideBar** | Node library | Draggable message nodes |
| **RightBar** | Node editor | Content editing, save functionality |
| **DownloadBtn** | Export feature | PNG export with custom sizing |

### 🎨 UI Components

| Component | 🎯 Purpose | 🚀 Features |
|-----------|------------|-------------|
| **NavBar** | Save workflow | Validation, success/error messages |
| **UpdateNode** | Node editor | Real-time content editing |
| **PopUp** | Notifications | Success/error message display |

---

<!-- ## 📱 Responsive Design

### 🎯 Breakpoints

| Device | 📱 Screen Size | 🎨 Layout |
|--------|----------------|-----------|
| **Mobile** | < 768px | Vertical stacking |
| **Tablet** | 768px - 1023px | Horizontal layout |
| **Desktop** | 1024px - 1439px | Enhanced layout |
| **Large Desktop** | 1440px+ | Maximum optimization | -->

### 🎨 Features

- **📱 Mobile-First Design** - Optimized for touch interactions
- **🔄 Adaptive Layout** - Automatic layout switching
- **👆 Touch-Friendly** - Larger touch targets on mobile
<!-- - **📐 Flexible Sizing** - Responsive node and control sizes -->

---

## 🔧 Configuration

### 🎯 Environment Variables

Create a `.env` file in the root directory:

```env
# Development
VITE_APP_TITLE=Bitespeed ReactFlow
VITE_APP_VERSION=1.0.0

# Production
VITE_API_URL=https://api.yourdomain.com
```

### 🎨 Customization

#### 🎯 Node Styling
Edit `src/components/ActualNode.tsx` to customize node appearance:

```typescript
// Customize node colors
const nodeStyle = {
  backgroundColor: '#b2f0e3',
  borderColor: '#FFAD5E',
  textColor: '#000000'
};
```

#### 🎨 Theme Colors
Modify `src/App.css` for custom color schemes:

```css
:root {
  --primary-color: #FFAD5E;
  --secondary-color: #A8AF8B;
  --background-color: #ffffff;
}
```

---

## 📦 Available Scripts

| Script | 🎯 Command | 📝 Description |
|--------|------------|----------------|
| **🚀 Development** | `npm run dev` | Start development server |
| **🏗️ Build** | `npm run build` | Build for production |
| **🔍 Lint** | `npm run lint` | Check code quality |
| **👀 Preview** | `npm run preview` | Preview production build |

### 🎯 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🎯 How to Contribute

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💾 Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **📤 Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔀 Open a Pull Request**

### 🎯 Development Guidelines

- **📝 Write clean, readable code**
- **🧪 Add tests for new features**
- **📖 Update documentation**
- **🎨 Follow the existing code style**
- **🔍 Test on multiple devices**

### 🐛 Bug Reports

Please use the [GitHub issue tracker](https://github.com/yourusername/bitespeed-reactflow/issues) to report bugs.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ReactFlow Team** - For the amazing workflow library
- **Tailwind CSS** - For the utility-first CSS framework
- **React Icons** - For the beautiful icon collection
- **Vite Team** - For the lightning-fast build tool

---

<div align="center">

**Made with ❤️ by [Your Name]**

[⭐ Star this repo](#) • [🐛 Report an issue](#) • [💡 Request a feature](#)

</div>
