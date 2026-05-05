/* ============================================================
   TARJETA DIGITAL EXPRESS — script.js
   Step Up Business Solutions
   ============================================================
   El diseño funciona completamente sin JavaScript.
   Este archivo existe para carga opcional de datos demo
   y utilidades de exportación.
   ============================================================ */

/**
 * loadDemoData
 * Carga el archivo cliente-demo.json y reemplaza en el DOM
 * los placeholders que hayan quedado sin reemplazar por Python.
 * Solo útil en desarrollo / vista previa en navegador.
 */
async function loadDemoData() {
  try {
    const res  = await fetch('./data/cliente-demo.json');
    if (!res.ok) return; // Sin datos → no hacer nada

    const data = await res.json();
    const body = document.body.innerHTML;

    // Reemplazar cada placeholder {{CLAVE}} con el valor del JSON
    const updated = body.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] !== undefined ? data[key] : match;
    });

    document.body.innerHTML = updated;
  } catch (err) {
    // Modo silencioso — la tarjeta sigue mostrando los placeholders
    console.info('Datos demo no cargados:', err.message);
  }
}

// Ejecutar solo si quedan placeholders en el HTML
// (es decir, Python aún no ha hecho el reemplazo)
if (document.body.innerHTML.includes('{{')) {
  loadDemoData();
}
