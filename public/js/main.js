document.getElementById('departamento').addEventListener('change', function () {
    const departamentoCode = this.value;

    fetch(`/municipios/${departamentoCode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener municipios');
            }
            return response.json();
        })
        .then(data => {
            const municipioSelect = document.getElementById('municipio');
            municipioSelect.innerHTML = '';

            if (data.length === 0) {
                municipioSelect.innerHTML = '<option value="">No hay municipios disponibles</option>';
                return;
            }

            data.forEach(muni => {
                const option = document.createElement('option');
                option.value = muni.name;
                option.textContent = muni.name;
                municipioSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
});

