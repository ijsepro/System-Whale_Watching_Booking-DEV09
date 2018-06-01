<?php
/**
 * Created by IntelliJ IDEA.
 * User: SL_WOLF
 * Date: 5/9/2018
 * Time: 8:49 PM
 */


class Customer_model extends CI_Model{



//	public function get($customer_id = null){
//
//		if($customer_id===null){
//			$query = $this->db->get('customer');
//		}else{
//			$query = $this->db->get_where('customer',['customer_id' => $customer_id]);
//		}
//
//		return $query->result_array();
//
//	}

	public function check_login($customer_id = null){

		if(is_array($customer_id)){
			$query = $this->db->get_where('customer', $customer_id);
		}

		return $query->result_array();

	}

//	public function insert($data){
//
//		$result=$this->db->insert('customer',$data);
//		//return $this->db->insert_id();
//		return $result;
//
//	}
//
//	public function update(){
//		//12 mp4  12.31
//	}
//
//	public function delete(){
//
//	}


	public function insert ($data) {
		return $this->db->insert('Customer', $data);
	}

}
