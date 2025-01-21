
// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.needs-validation");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevenir el envío por defecto del formulario

      // Capturar valores de los campos
      const name = form.querySelector("input[placeholder='Nombre']").value.trim();
      const email = form.querySelector("input[placeholder='Email']").value.trim();
      const messageContent = form.querySelector("textarea[placeholder='Mensaje']").value.trim();

      // Validar campos
      if (!name || !email || !messageContent) {
          alert("Por favor, completa todos los campos.");
          return;
      }

      // Crear objeto mensaje
      const message = {
          name,
          email,
          message: messageContent,
      };

      // Llamar a la función sendMessage
      sendMessage(message);

      // Opcional: Reiniciar el formulario después del envío
      form.reset();

      // Mostrar mensaje de éxito
      alert("Mensaje enviado con éxito.");
  });
});


const sendMessage = async (message) => {

    try {
      const data = message;//{ "joke": "This is a test joke" };
      const url = "/.netlify/functions/jokes";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;

    } catch (error) {
      console.error(error);
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    
    
    
};
