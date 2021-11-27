class SolarSystem {
    generateSun() {
      const sun = document.createElement("a-sphere");
      
      sun.setAttribute("src", "#sun");
      sun.setAttribute("position", "-30 1 -10");
      sun.setAttribute("radius", "3");

      const aScene = document.querySelector("a-scene");
      aScene.appendChild(sun);
    }

    generatePlanets(planets) {
      let distance = -20;

      for (let planet of planets) {
        console.log(planet)
        const sphere = document.createElement("a-sphere");

        sphere.setAttribute("src", planet.src);
        sphere.setAttribute("position", `${distance} 1 -10`);
        sphere.setAttribute("radius", planet.radius);
        sphere.setAttribute("animation", planet.animation);
        const aScene = document.querySelector("a-scene");

        aScene.appendChild(sphere);
        
        distance += 5;
      }
    }

    generateLabels(planets) {
      const sunLabel = document.createElement("a-text");
      const aScene = document.querySelector("a-scene");
      sunLabel.setAttribute("value", "Sun");
      sunLabel.setAttribute("color", "#FFEE00");
      sunLabel.setAttribute("position", "-30 5 -10")
      sunLabel.setAttribute("scale", "3 3 3");
      aScene.appendChild(sunLabel)

      let distance = -20;

      for (let planet of planets) {
        const label = document.createElement("a-text");
        label.setAttribute("value", planet.name);
        label.setAttribute("color", "#FFEE00");
        label.setAttribute("position", `${distance} 2.5 -10`);
        label.setAttribute("scale", "3 3 3");
        distance += 5;
        aScene.appendChild(label);
      }
    }
}