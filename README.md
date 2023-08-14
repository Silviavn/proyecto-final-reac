import style.module.css
# Tienda Child care line

Este es un proyecto realizado a lo largo de la cursada de Coderhouse como evaluacion de la comision de react. Nuestra aplicacion permite ver una lista de productos de tienda, realizar compras, eliminar productos, resumen de productos, formulario de pago. Nuestros productos estan almacenados en una base de datos llamada Firebase

## Tecnologias aplicadas

- Vite
- React
- React Router
- Firebase

## Funcionalidades de nuestra tienda Child care line

- Ver nuestros productos disponibles con sus respectivas        fotografias, precio, detalle, stock 
- Agregar los productos a nuestro carrito de compras
- Visualizar lo que queremos comprar
- Realizar una orden de compra
- Un formulario de clientes para establecer un contacto mediante campos requeridos de nombre, apellido, telefono, email de contacto, comentario opcional en caso que haya algun detalle al realizar el despacho como describir el hogar o calles de mas fal acceso, horario de reparto etc

##  Configuracion e instalación de firebase

1._ Creamos una cuenta en Firebase y seleccionamos la opcion de crear nuevo proyecto https://firebase.google.com/docs/firestore?hl=es-41 

2._ En la seccion " Authentication " de Firebase, habilita el proveedor 

3._ Te pide ingresar una autenticacion verificando tu correo y contraseña

4._ En la seccion "Firestore" de firebase, crea una nueva base de datos y configura las reglas de seguridad para usuarios autenticados

5._ En la seccion "Project settings" de firenbase, haz click en "Add app" y sigue las intrucciones para agregar una nueva aplicacion web

6._ Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto

### IMPORTANTE 

Las llaves privadas que te da Firestore para vincular tu proyecto con tu lector de codigo son privadas por lo tanto si alguien mas autentica tu llave propia que se encuentra en config.js se te modificaran las cosas, por lo tanto no se debe compartir  