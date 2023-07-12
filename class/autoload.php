<?php

/* 
Autor Jonathan Sansó Alumno de Teclab*/


class Autocarga{

    static public function cargar_clase($clase){
        $arrayClase = array();
        $base = __DIR__.DIRECTORY_SEPARATOR;
        $arrayClase['base_datos'] = $base.'data_base.php';
        $arrayClase['Categorias'] = $base.'categorias.php';
        $arrayClase['Productos'] = $base.'productos.php';

        if (isset($arrayClase[$clase])){
            if (file_exists($arrayClase[$clase])){
                include $arrayClase[$clase];
            } else{
                throw new Exception("No se encontró el Archivo de clase [{$arrayClase[$clase]}]");
            }
        }
    }
}

spl_autoload_register('Autocarga::cargar_clase');