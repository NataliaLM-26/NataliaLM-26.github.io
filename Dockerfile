# Usa una imagen base con Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo en el contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Construye la aplicación Angular
RUN npm run build --prod

# Expone el puerto 83 para acceder a la aplicación
EXPOSE 83

# Inicia la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]
