let distance = -20;
      let planets = [
        {
          name: "Sun",
          src: "#sun",
          radius: "3",
        },
        
      ];

      

      for (let planet of planets) {
        const sphere = document.createElement("a-sphere");
        const label = document.createElement("a-text");

        sphere.setAttribute("src", planet.src);
        sphere.setAttribute("position", `${distance} 1 -10`);
        sphere.setAttribute("radius", planet.radius);
        sphere.setAttribute("rotation", planet.rotation);
        sphere.setAttribute("animation", planet.animation);
        sphere.addEventListener("click", () => console.log("Hello"));

        label.setAttribute("value", planet.name);
        label.setAttribute("color", "#FFEE00");
        if (planet.name == "Sun") {
          label.setAttribute("position", `${distance} 5 -10`);
        } else {
          label.setAttribute("position", `${distance} 2.5 -10`);
        }

        label.setAttribute("scale", "3 3 3");

        const aScene = document.querySelector("a-scene");

        aScene.appendChild(sphere);
        aScene.appendChild(label);
        distance += 5;
      }

class SolarSystem {
    constructor() {
        this.hello = "hello";
    }
    generatePlanets() {
        console.log(this.hello)
    }
}