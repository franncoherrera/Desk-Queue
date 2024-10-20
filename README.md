# 📋 Sistema de Gestión de Tickets en Tiempo Real

Esta aplicación es un sistema de gestión de tickets en tiempo real. Permite crear, asignar y atender tickets, mostrando en una pantalla las personas que están atendiendo los tickets y en qué escritorio. Utiliza **Node.js** y **WebSockets** para la comunicación en tiempo real entre los usuarios y el servidor.

![image](https://github.com/user-attachments/assets/78230c6f-35ed-475b-b24f-3eebb38adc79)

## Características

- 🎟️ **Creación de Tickets:** Los usuarios pueden generar nuevos tickets que se asignan en tiempo real a los diferentes escritorios disponibles.
- 🖥️ **Asignación de Tickets:** Los tickets pueden ser tomados por un escritorio para su atención.
- 🔄 **Actualización en Tiempo Real:** Todos los cambios (creación, asignación, atención de tickets) se reflejan en la pantalla principal de manera instantánea gracias al uso de WebSockets.
- 🖥️ **Monitorización:** En la pantalla principal se puede ver qué tickets están siendo atendidos y qué escritorios están disponibles.

## ⚙️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para construir la API del servidor.
- **Express**: Framework para manejar las rutas y peticiones HTTP.
- **WebSocket library**: Biblioteca para la comunicación en tiempo real entre el servidor y los clientes.
- **HTML/CSS/JavaScript**: Interfaz gráfica para interactuar con el sistema.
- **UUID**: Generación de identificadores únicos para los tickets.

## ⚙️ Requisitos Previos

Para ejecutar la aplicación, necesitas tener instalado:

- [Node.js](https://nodejs.org/) v14 o superior.
- [npm](https://www.npmjs.com/) (viene incluido con Node.js).

## 🛠️ Instalación

Sigue los siguientes pasos para clonar y ejecutar la aplicación en tu máquina local.

1. Clona el repositorio:
2. Ejecutar `npm install`
3. Ejectura `npm run start`

## 💻 Uso

1. Abre el navegador y navega a `http://localhost:3000`.
2. Desde la interfaz, los usuarios pueden:
   - Crear nuevos tickets.
   - Tomar tickets y asignarlos a un escritorio.
   - Ver en tiempo real qué tickets están siendo atendidos y en qué escritorio.

Cada vez que un ticket se crea o es tomado por un escritorio, la pantalla principal se actualizará automáticamente para reflejar los cambios en tiempo real.

## ⚡ WebSockets

La comunicación en tiempo real se maneja utilizando **WebSocket library**. Cada evento importante (como la creación de un ticket, la toma de un ticket, o la finalización de uno) emite un evento a través de WebSockets para actualizar a todos los clientes conectados en tiempo real.

### Eventos principales

- `crear-ticket`: Se emite cuando se crea un nuevo ticket.
- `atender-ticket`: Se emite cuando un escritorio toma un ticket. Cuando se presiona en atender siguente el ticket actual se termina y se pasa al siguiente.
- `terminar-ticket`: Se emite cada vez que se presiona en el botón de terminar para finalizar con el ticket tomado.
