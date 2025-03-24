import { useState } from "react";
import Header from "../components/Header";

const subjectsData = {
  "Comunes": [
    { name: "Lengua Catalana", image: "/images/catalan.png" },
    { name: "Lengua Castellana", image: "/images/spanish.png" },
    { name: "Inglés", image: "/images/english.png" }
  ],
  "Ciencia y tecnología": [
    { name: "Matemáticas", image: "/images/maths.png" },
    { name: "Física", image: "/images/physics.png" }
  ],
  "Ciencias Sociales": [
    { name: "Historia de España", image: "/images/history.png" },
    { name: "Filosofía", image: "/images/philosophy.png" }
  ],
  "Humanidades y arte": [
    { name: "Literatura Universal", image: "/images/literature.png" },
    { name: "Historia del Arte", image: "/images/art.png" }
  ],
  "Clásicas": [
    { name: "Latín", image: "/images/latin.png" },
    { name: "Griego", image: "/images/greek.png" }
  ]
};

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Comunes");

  return (
        <div className="bodyOthers">
            <Header />
        </div>
  );
}

export default Home;
