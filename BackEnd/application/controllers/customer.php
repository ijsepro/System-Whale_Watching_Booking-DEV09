<?php
/**
 * Created by IntelliJ IDEA.
 * User: SL_WOLF
 * Date: 5/9/2018
 * Time: 8:50 PM
 */

class Customer extends CI_Controller{

//	for the debug stuff and see results
//	$this->output->enable_profiler(true);

	public function __construct()
	{
		parent::__construct();
		$this->load->model('customer_model');
	}
//
//	public function get(){
//		$data=$this->customer_model->get(1);
//		print_r($data);
//	}

//	public function insert(){
//		$result=$this->customer_model->insert([
//			'name' => 'dilshan' , 'nationality' => 'lanakan' , 'contact' => '076' , 'email' => 'dilshan@gmail.com'
//		]);
//		print_r($result);
//	}

//	public function update(){
//		//12 mp4  10.49
//	}
//
//	public function delete(){
//
//	}

	public function login(){

		$email=$this->input->post('email');
		$password=$this->input->post('password');

		$result = $this->customer_model->chek_login([
			'email' => $email,
			'password' => $password
		]);

		$this->output->set_content_type('application_json');

		if($result){
			$this->session->set_customerdata(['customer_id' => $result[0]['customer-id']]);
			$this->output->set_output(json_encode(['result' => 1 ]));
			return false;
		}

		$this->output->set_output(json_encode(['result' => 0 ]));

	}

	public function insert_customer(){
		print_r($_POST);
		// if($this->customer_model->insert($_POST)){
		// 	echo true;
		// 	die();
		// } else {
		// 	echo false;
		// 	die();
		// }
	}
//17.mp4 click event 3.59
	public function register(){

		//10.14
		//didnt encript the password

		$this->output->set_content_type('application_json');

		$name=$this->input->post('name');
		$nationality=$this->input->post('nationality');
		$contact=$this->input->post('contact');
		$email=$this->input->post('email');
		$password=$this->input->post('password');

		$result=$this->customer_model->insert(
			[
			'name' => $name,
			'nationality' => $nationality,
			'contact' => $contact,
			'email' => $email,
			'password' => $password
			]
		);

		if($result){
			$this->output->set_output(json_encode(['result' => 1 ]));
		}else{
			$this->output->set_output(json_encode(['result' => 0 ]));
		}

	}

}
