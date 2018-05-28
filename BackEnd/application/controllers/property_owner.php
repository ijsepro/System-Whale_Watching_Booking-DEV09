<?php

class Property_Owner extends CI_Controller {
        
    public function __construct() {
        parent::__construct();
		$this->load->model('property_owner_model');
		$this->load->model('manage_file_model');
    }
    
    public function get_Property_Owner() {
        echo json_encode($this->property_owner_model->get());
        die();
    } 
    
    public function insert_Property_Owner () {
		$responce = isset($_FILES['profile_picture']) ? $this->manage_file_model->saveFile($_FILES['profile_picture']) : null;
		if($responce == null || $responce['status']){
			$_POST['profile_picture'] = $responce == null ? null : $responce['file_path'];
			if($this->property_owner_model->insert($_POST)){
				echo true;
				die();
			}
			// delete profile_picture
			echo false;
			die();
		} 
		echo false;
		die();
	}
    
    public function search_Property_Owner() {
        echo json_encode($this->property_owner_model->search($_GET));
    }

    public function update_Property_Owner() {
        print_r($_POST);
        // echo $this->property_owner_model->update($_POST, ['property_owner_id' => $_POST['property_owner_id']]) > 0? true : false;        
        // echo $this->property_owner_model->update(['property_owner_name' => 'Malmi2', 'username' => 'Pani2', 'property_owner_id' => '45'], ['property_owner_id' => '45']) > 0? true : false;        
    }
    
    public function delete_Property_Owner() {
        // echo json_encode($this->property_owner_model->search($_GET));
        // echo $this->property_owner_model->delete(['property_owner_id' => 10]) > 0? true : false;
        echo $this->property_owner_model->delete($_GET);
        // print_r($_GET);
    }

    public function check_Property_Owner_Username_Unique() {
        echo $this->property_owner_model->find_count($_GET)[0]['count(*)'] > 0 ? false : true;
        die();
    }

    public function check_Property_Owner_Email_IfExists(){
        // echo $this->property_owner_model->find_count($_GET)[0]['count(*)'] > 0 ? false : true;
        echo $this->property_owner_model->search($_GET) != null ? true : false;        
        die();
    }

    public function check_Property_Owner_username_email(){
        // echo "test pass";
        // print_r($_GET);
        echo $this->property_owner_model->search($_GET) != null ? true : false;
        // echo $this->property_owner_model->search($_GET) ;
        die();
    }

}