<?php
    class ItemModel { 
        protected  $db;

        public function __construct(){
            require 'libs/SPDO.php';
            $this->db=SPDO::singleton();
        }//constructor
        public function listar(){
            $consulta=$this->db->prepare('call sp_listar()');
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            return $resultado;
        }// fin listar.

        public function obtain(){
            $id= $_POST['id'];
            echo $id;
        }

        public function arts_menor_precio(){
            $consulta=$this->db->prepare('call sp_articulos_price_asc()');
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            //echo $resultado[0];
            return $resultado;
        }

        public function registrar(){
            $descripcion=$_POST["descripcion"];
            $precio=$_POST["precio"];
            $codigo=$_POST["codigo"];
            $nombre=$_POST["name"];
            $cantidad=$_POST["cantidad"];
            //Recuperando datos de la imagen, para guardarla
            $nombre_imagen=$_FILES["urlImg"]['name'];//Recupero el nombre de la imagen
            $tipo_imagen=$_FILES['urlImg']['type'];//Recupero el tipo de la imagen
            $tam_img=$_FILES['urlImg']['size'];
            if($tam_img<=2000000 && ($tipo_imagen=="image/jpeg"||$tipo_imagen=="image/jpg"||$tipo_imagen=="image/gif"||$tipo_imagen=="image/png")){//Filtro, para que solo se puedan subir archivos tipo JPG,PNG,GIF
                $carp_destino=$_SERVER['DOCUMENT_ROOT'].'/proy2_lenguajes/public/img/';//Carpeta en la que quiero guardar el archivo
                move_uploaded_file($_FILES['urlImg']['tmp_name'],$carp_destino.$nombre_imagen);//muevo el archivo a la carpeta con su nombre
            //termino tramite de imagen
                $consulta=$this->db->prepare("call sp_ingresar_articulos("."'".$codigo."','".$nombre."','".$descripcion."','".$nombre_imagen."','".$precio."','".$cantidad."')");
                $consulta->execute();
                $consulta->closeCursor();
                
            }else
                echo("El tamaño es demasiado grande o formato incorrecto");   
        }//Metodo para ingresar productos listo...

        public function actualizar(){
            $codigo=$_POST["codigo"];
            $nombre=$_POST["nombre"];
            $descripcion=$_POST["descripcion"];
            $precio=$_POST["precio"];
            $consulta=$this->db->prepare("call sp_actualizar_articulos("."'".$codigo."','".$nombre."','".$descripcion."','".$precio."')");
            $consulta->execute();
            $consulta->closeCursor();

        }//Termino funcion actualizar...


        public function crear_combo(){
            //$codigo=$_POST["code"];
            $nombre=$_POST["name"];
            $consulta=$this->db->prepare("call sp_crear_combo("."'".$nombre."'".")");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            return $resultado;
        }

        public function ver_combos(){
            $consulta=$this->db->prepare('call sp_obtener_combos()');
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            return $resultado;
        }
        public function insert_art_combo(){
            $id_combo=$_POST['id_combo'];
            $id_art=$_POST['id_art'];
            
            $consulta=$this->db->prepare("call sp_add_prod_combo("."'".$id_combo."','".$id_art."')");
            $consulta->execute();   
            $resultado=$consulta->fetchAll();
            echo "resultado";
            //echo $resultado;
            $consulta->CloseCursor();
            //echo $resultado;
        }
        public function listar_arts(){
            
            $consulta=$this->db->prepare('call sp_listar()');
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
           
            return $resultado;

        }

        public function obtener_prod(){
            $is_art=$_POST['id'];
            $consulta=$this->db->prepare("call sp_get_prod_vals('".$is_art."')");
            $consulta->execute();   
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
           
            $datos=array(
				$resultado[0],
				$resultado[1],
				$resultado[2],
				$resultado[3]
				);
            return json_encode($datos);
        }


        public function comprar(){

            $id_cliente=$_POST['id_cliente'];
            $id_combo=$_POST['id_prod'];
            $precio=$_POST['precio'];
            $consulta=$this->db->prepare("call sp_restar_prod_art("."'".$id_cliente."','".$id_combo."','".$precio."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            echo "Pagó ".$precio;
           

        }
        public function agregarACarrito(){

            $id_carrito=$_POST['id_carrito'];
            $id_art=$_POST['id_art'];

            $consulta=$this->db->prepare("call sp_agregar_a_carrito("."'".$id_carrito."','".$id_art."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            echo "Se agregó con éxito al carrito ".$id_art;
        }
        public function updateProd(){
            $id_user=$_POST["id_user"];
            $id_prod=$_POST['id_prod'];
            $consulta=$this->db->prepare("call sp_obtener_prod("."'".$id_user."','".$id_prod."'".")");
            $consulta->execute();
            $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
           
            return $arreglo;
        }
        public function obtener_para_actualizar(){
            $id_prod=$_POST['id_prod'];
            $consulta=$this->db->prepare("call sp_obtener_prod_para_actualizar("."'".$id_prod."'".")");
            $consulta->execute();
            $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
            
            return $arreglo;
        }

        public function obten_prod_venta(){
            $id_prod=$_POST['id_prod'];
            $consulta=$this->db->prepare("call sp_obtener_prod_venta("."'".$id_prod."'".")");
            $consulta->execute();
            $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
           
            return $arreglo;
        }
        public function deleteProd(){
             $id_prod=$_POST["id_prod"];
            $consulta=$this->db->prepare("call sp_eliminar_prod("."'".$id_prod."'".")");
            $consulta->execute();
            $consulta->CloseCursor();
        }

        
    }//fin de clse

?>