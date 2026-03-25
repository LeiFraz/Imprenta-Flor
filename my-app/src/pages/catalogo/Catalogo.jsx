import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Catalogo.css';

// 1. LISTA DE PRODUCTOS (La base de datos de tus "gatos")
const productosInitial = [
  {
    id: 1,
    nombre: "Remera Minimalist White",
    coleccion: "Colección Básicos",
    precio: 12500,
    tipo: "stock",
    categoria: "remeras",
    imagen: "/imagenes/productos/producto1.png"
  },
  {
    id: 2,
    nombre: "Taza de Cerámica con Diseño",
    coleccion: "Diseño a elección",
    precio: 4800,
    tipo: "personalizado",
    categoria: "tazas",
    tiempo: "3-5 días hábiles",
    imagen: "/imagenes/productos/producto1.png"
  },
  {
    id: 3,
    nombre: "Mug de Cerámica Gato",
    coleccion: "Colección Decorativa",
    precio: 3500,
    tipo: "stock",
    categoria: "tazas",
    imagen: "/imagenes/productos/producto1.png"
  }
];

const Catalogo = () => {
  /**
   * ESTADOS:
   * busqueda: Almacena el String del input de la lupa.
   * categoriaActiva: Almacena el ID de la categoría seleccionada (default: 'todos').
   */
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

 /**
   * LÓGICA DE FILTRADO:
   * No guardamos los productos filtrados en un estado aparte para evitar 
   * problemas de sincronización. Calculamos la lista en cada renderizado.
   */
  const productosFiltrados = productosInitial.filter((prod) => {
   // Verificamos categoría: Si es 'todos', evitamos la comparación.
    const pasaCategoria = categoriaActiva === "todos" || prod.categoria === categoriaActiva;
    
    // Verificamos búsqueda: Cambiamos a minúsculas
    const pasaBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());

    return pasaCategoria && pasaBusqueda;
  });

  return (
    <div className="catalogo-container">
      
      {/* HEADER: Controles de usuario */}
      <div className="filter-bar">
        <div className="categories">
            {/* Renderizado dinámico de botones de categoría */}
          {['todos', 'remeras', 'tazas', 'accesorios'].map((cat) => (
            <button 
              key={cat}
              className={`category-btn ${categoriaActiva === cat ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-input">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="¿Qué estás buscando?" 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <h1 className="section-title">Nuestros Productos</h1>

      {/* GRID DE PRODUCTOS */}
      <div className="product-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="image-container">
                <span className={`badge ${prod.tipo}`}>
                  {prod.tipo.toUpperCase()}
                </span>
                <img src={prod.imagen} alt={prod.nombre} />
                {prod.tiempo && (
                   <span className="time-badge">⏳ {prod.tiempo}</span>
                )}
              </div>
              
              <div className="product-info">
                <h3>{prod.nombre}</h3>
                <p>{prod.coleccion}</p>
                <div className="product-footer">
                  <span className="price">${prod.precio.toLocaleString('es-AR')}</span>
                  {prod.tipo === 'stock' ? (
                    <button className="cart-btn"><FaShoppingCart /></button>
                  ) : (
                    <button className="customize-btn">Pedido personalizado</button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          /* MENSAJE CUANDO NO HAY RESULTADOS */
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;