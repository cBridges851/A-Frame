class SolarSystem {
    generateSun() {
      const sun = document.createElement("a-sphere");
      const label = document.createElement("a-text");
      
      sun.setAttribute("src", "#sun");
      sun.setAttribute("position", "-30 1 -10");
      sun.setAttribute("radius", "3");

      label.setAttribute("value", "Sun");
      label.setAttribute("color", "#FFEE00");
      label.setAttribute("position", "-30 5 -10")
      label.setAttribute("scale", "3 3 3");

      const aScene = document.querySelector("a-scene");
      aScene.appendChild(sun);
      aScene.appendChild(label);
    }

    generatePlanets(planets) {
      let distance = -20;
      for (let planet of planets) {
        console.log(planet)
        const sphere = document.createElement("a-sphere");
        const label = document.createElement("a-text");

        sphere.setAttribute("src", planet.src);
        sphere.setAttribute("position", `${distance} 1 -10`);
        sphere.setAttribute("radius", planet.radius);
        sphere.setAttribute("animation", planet.animation);

        label.setAttribute("value", planet.name);
        label.setAttribute("color", "#FFEE00");
        label.setAttribute("position", `${distance} 2.5 -10`);
        label.setAttribute("scale", "3 3 3");

        const aScene = document.querySelector("a-scene");

        aScene.appendChild(sphere);
        aScene.appendChild(label);
        distance += 5;
      }
    }
}