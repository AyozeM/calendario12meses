# Guía de estilos
## Colores

* Primarios

|Nombre|Hexadecimal|RGB|muestra|
|------|-----------|---|---|
|Azulito|#01678f|R:1 G:103 B:143|<div style="width:50px;height:50px;background-color:#01678f"></div>|
|Naranjado|#dd6d10|R:221 G:109 B:16|<div style="width:50px;height:50px;background-color:#dd6d10"></div>|
|Azulon|#123645|R:18 G:54 B:69|<div style="width:50px;height:50px;background-color:#123645"></div>|
|Gris|#78797c|R:120 G:121 B:124|<div style="width:50px;height:50px;background-color:#78797c"></div>|

* Secundarios

|Nombre|Hexadecimal|RGB|muestra|
|------|-----------|---|---|
|Mediogris|#b0aeae|R:176 G:174 B:174|<div style="width:50px;height:50px;background-color:#b0aeae"></div>|
|BlancoRoto|#e8e5e0|R:232 G:229 B:224|<div style="width:50px;height:50px;background-color:#e8e5e0"></div>|
|Blanconieve|#f5f3f1|R:245 G:243 B:241|<div style="width:50px;height:50px;background-color:#f5f3f1"></div>|

## Tipografía

La fuente principal será:
- **Arial** o sanSerif, con un tamaño minimo de **0.6em**

La fuente secundaria sera usada solamente para destacar el mes y el dia actual:
- **Helvetica Neue** tambien con un tamaño minimo de **0.6em**

* * * 
# Estructura
En el archivo **_colores.scss** se definiran variables con los colores antes expuestos.

Crearemos un mixin(o funcion) en el archivo **_estilos.scss** .

Ambos archivos se uniran en main.scss, el cual se compilara para obtener el resultado final.