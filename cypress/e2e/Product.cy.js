describe('Product Management', () => {
  
  // Verifica que el acceso a la página de productos funcione correctamente
  it('should navigate to the Products page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Products').click(); // Verifica que el enlace 'Products' sea visible y funcione
    cy.url().should('include', '/products'); // Verifica que la URL esté correcta
  });

  // 1. Verifica que los productos se carguen correctamente
  it('should get the name and price of the first product', () => {
    cy.visit('http://localhost:3000');  // Visita la página de productos

    // Espera a que la lista de productos esté disponible
    cy.get('ul').should('exist');  // Verifica que el contenedor de productos exista

    // Espera a que al menos un producto esté visible
    cy.get('ul li').should('have.length.greaterThan', 0);  // Verifica que haya al menos un producto

    // Accede al primer producto de la lista y verifica su nombre y precio
    cy.get('ul li').first().within(() => {
      cy.contains('product name').should('be.visible');  // Verifica que el nombre del producto sea visible
      cy.contains('$').should('be.visible');  // Verifica que el precio sea visible
    });
  });

  // 2. Crear un nuevo producto
  it('should create a new product', () => {
    cy.visit('http://localhost:3000');  
    cy.contains('Products').click();  

    
    cy.contains('Add Product').click(); 

    // Creando el producto
    cy.get('input[name="product.name"]').type('New Product');  
    cy.get('input[name="product.price"]').type('300'); 
    cy.get('button').contains('Save').click();  

    // Verifica que el nuevo producto aparezca en la lista
    cy.get('ul li').last().within(() => {  // Accede al último producto de la lista
      cy.contains('New Product').should('be.visible');  // Verifica que el nombre del producto aparezca
      cy.contains('$300').should('be.visible');  // Verifica que el precio del producto sea correcto
    });
  });

  // 3. Actualizar un producto
  it('should update an existing product', () => {
    cy.visit('http://localhost:3000');  // Visita la página de productos

    // Encuentra el primer producto y haz clic en el botón de editar
    cy.get('ul li').first().within(() => {
      cy.contains('Edit').click();  // Asegúrate de que exista un botón de 'Edit' en cada producto
    });

    // Modifica el nombre y el precio del producto
    cy.get('input[name="name"]').clear().type('Test');  
    cy.get('input[name="price"]').clear().type('1');  
    cy.get('button').contains('Save').click();  // Guardar los cambios

    // Verifica que el producto haya sido actualizado
    cy.get('ul li').first().within(() => {
      cy.contains('Updated Product').should('be.visible');  // Verifica el nombre actualizado
      cy.contains('$300').should('be.visible');  // Verifica el precio actualizado
    });
  });

  // 4. Eliminar un producto
  it('should delete a product', () => {
    cy.visit('http://localhost:3000');  // Visita la página de productos

    // Encuentra el primer producto y haz clic en el botón de eliminar
    cy.get('ul li').first().within(() => {
      cy.contains('Delete').click();  // Asegúrate de que exista un botón de 'Delete' en cada producto
    });

    // Verifica que el producto ya no esté en la lista
    cy.get('ul li').should('have.length.lessThan', 1);  // Verifica que la lista ahora tenga menos productos
  });

  // 5. Buscar un producto por nombre
  it('should find a specific product by name', () => {
    cy.visit('http://localhost:3000');  // Visita la página

    // Verifica que la lista de productos esté visible
    cy.get('ul').should('exist');

    // Busca un producto específico por su nombre
    cy.get('ul li').contains('Test Product').should('be.visible');  // Reemplaza 'Test Product' con un nombre válido de producto
  });

});
