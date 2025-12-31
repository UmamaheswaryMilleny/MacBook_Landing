# MacBook Pro 3D Landing Page

A stunning and interactive landing page showcasing the MacBook Pro, featuring a 3D model viewer, smooth GSAP animations, and a responsive design. This project serves as a clone/showcase demonstrating modern web development techniques.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) (ScrollTrigger)
- **3D Graphics**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## ✨ Key Features

- **Interactive 3D Model Viewer**: View the MacBook Pro in 3D with options to change size (14" vs 16") and color (Space Gray vs Dark).
- **GSAP Animations**: Smooth scroll-triggered animations and transitions for a premium feel.
- **Responsive Design**: Optimized for various screen sizes, ensuring a consistent experience across desktop and mobile.
- **Video Showcases**: High-quality video highlights integrated seamlessly.

## 🛠️ Installation & Usage

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd macbook
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**

    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/components`: Contains all UI components (Navbar, Hero, ProductViewer, etc.).
  - `src/components/three`: Three.js specific components (StudioLights, ModelSwitcher).
- `src/store`: Zustand state management stores.
- `src/constants`: Application constants and data.
- `src/utils`: Utility functions (if any).
- `src/App.jsx`: Main application entry point setting up global GSAP plugins.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
