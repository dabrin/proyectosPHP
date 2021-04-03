 <?php 
        
   class ComboModel {
       
        protected  $db;

        public function __construct(){
            require 'libs/SPDO.php';
            $this->db=SPDO::singleton();
        }//constructor
 
    public function ver_combos(){

        $consulta=$this->db->prepare('call sp_obtener_combos()');
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        return $resultado;
    }

    public function obtener_carrito_combo(){
        $id_user=$_POST['id_user'];
        $id_combo=$_POST['id_combo'];
        $consulta=$this->db->prepare("call sp_obtener_combo("."'".$id_user."','".$id_combo."')");
        $consulta->execute();
        $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->CloseCursor();
        return $arreglo;
    }

    public function agregarACarrito(){
        $id_carrito=$_POST['id_carrito'];
        $id_combo=$_POST['id_combo'];
        $consulta=$this->db->prepare("call sp_insertar_combo_carrito("."'".$id_carrito."','".$id_combo."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        echo "Se ingresó ".$id_combo;
        }      


    public function crearCombo(){
        $nombre=$_POST['nombre_combo'];
        $consulta=$this->db->prepare("call sp_crear_combo('".$nombre."')");
        $consulta->execute();
        $consulta->CloseCursor();

    }
       public function deleteCombo(){
        $id=$_POST['id_combo'];
        $consulta=$this->db->prepare("call sp_delete_combo('".$id."')");
        $consulta->execute();
        $consulta->CloseCursor();

    }
    public function addProdcombo(){
        $id_combo=$_POST['id_combo'];
        $id=$_POST['id_prod'];
        $consulta=$this->db->prepare("call sp_add_prod_combo('".$id_combo."','".$id."')");
        $consulta->execute();
        $consulta->CloseCursor();
    }

    public function comprar(){
        $id_cliente=$_POST['id_user'];
        $precio=$_POST['precio'];
        $consulta=$this->db->prepare("call sp_comprar_combo("."'".$id_cliente."','".$precio."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        echo 'Usted pagó'.$precio;
    }
}
     




   
?>