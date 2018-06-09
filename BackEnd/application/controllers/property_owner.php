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
            $property_owner_id = $this->property_owner_model->insert($_POST);
			if($property_owner_id > 0)
                echo $this->create_Responce(true, ['property_owner_id' => $property_owner_id], '');
			else {
    			// delete profile_picture
                echo $this->create_Responce(false, 'Admin Registration faild', '');
            }
		} else 
            echo $this->create_Responce(false, 'Profile picture save error', '');
        die();
        // echo $this->property_owner_model->insert(['property_owner_id' => 0, 'property_owner_name' => 'property_owner_name1', 'address_postal_code' => 'address_postal_code1', 'address_street_and_num' => 'address_street_and_num1', 'address_city' => 'address_city1', 'address_country' => 'address_country1', 'email' => 'email1', 'registerd_date' => '2018.12.12', 'profile_picture' => 'profile_picture1', 'username' => 'username1', 'password' => 'password1']);
	}
    
    public function search_Property_Owner() {
        echo json_encode($this->property_owner_model->search($_GET));
        die();
    }

    public function update_Property_Owner() {
        // print_r($_POST);
        // echo $this->property_owner_model->update($_POST, ['property_owner_id' => $_POST['property_owner_id']]) > 0? true : false;        
        // echo $this->property_owner_model->update(['property_owner_name' => 'Malmi2', 'username' => 'Pani2', 'property_owner_id' => '45'], ['property_owner_id' => '45']) > 0? true : false;        
    }
    
    public function delete_Property_Owner() {
        // echo json_encode($this->property_owner_model->search($_GET));
        // echo $this->property_owner_model->delete(['property_owner_id' => 10]) > 0? true : false;
        // echo $this->property_owner_model->delete($_GET);
    }

    // public function check_Property_Owner_Username_Unique() {
    //     echo $this->property_owner_model->find_count($_GET)[0]['count(*)'] > 0 ? false : true;
    //     die();
    // }
    
    public function property_Owner_If_Exists(){
        echo $this->property_owner_model->find_what_and_where('count(*)', $_GET)[0]['count(*)'] > 0 ? true : false;
        die();
    }

    public function property_Owner_Login(){
        $result = $this->property_owner_model->find_what_and_where('property_owner_id, password', 'username = \''.$_GET['usernameOrEmail'].'\' OR email = \''.$_GET['usernameOrEmail'].'\'');
        echo sizeOf($result) > 0 ? $result[0]['password'] == $_GET['password'] ? $this->create_Responce(true, ['property_owner_id' => $result[0]['property_owner_id']], $this->create_JWT_Token(['property_owner_id' => $result[0]['property_owner_id'], 'type' => 'property_owner']))
            : $this->create_Responce(false, 'password invalid', '')
            : $this->create_Responce(false, 'username or email is dosn\'t Match. pleace check and re-enter', '');
        die();
    }

    private function create_Responce($status, $result, $token){
        return json_encode(array(
            'status' => $status,
            'result' => $result,
            'token'  => $token
        ));
    }

    private function create_JWT_Token($token){
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256'])));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($token)));
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true)));

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }




















    
    public function sendmail(){

       // Please specify your Mail Server - Example: mail.example.com.
        // ini_set("SMTP","http://localhost:4200");

        // // Please specify an SMTP Number 25 and 8889 are valid SMTP Ports.
        // ini_set("smtp_port","25");

        // // Please specify the return address to use
        // ini_set('sendmail_from', 'reshanpubudu4@gmail.com');

        ////////////////////////////////////////////////////////////
        $this->load->library('email');

        $this->email->from('reshanpubudu4@gmail.com', 'Reshan Pubudu');
        $this->email->to('reshanpubudu@gmail.com');
        // $this->email->cc('another@another-example.com');
        // $this->email->bcc('them@their-example.com');

        $this->email->subject('Email Test');
        $this->email->message('Testing the email class.');

        $this->email->send();

        /////////////////////////////////////////////
        // $config['protocol'] = 'sendmail';
        // $config['mailpath'] = '/usr/sbin/sendmail';
        // $config['charset'] = 'iso-8859-1';
        // $config['wordwrap'] = TRUE;

        // $this->email->initialize($config);
        //////////////////////////////////////////////

        // $link = 'http://localhost:4200/reset-password';

		// $body = "				Hello, 
		// 		 You have requested for your password recovery. " . $link . "
		// 		 Click here to reset your password. If you are unable to click the link then copy the below 
		// 		 link and paste in your browser to reset your password. " . $link . "
        //          Place use this security code to reset ur password token ";
                 
        // $to = 'reshanpubudu@gmail.com';

        mail('reshanpubudu@gmail.com', 'Confomation email', 'Hello Email...!');
        
    }

}