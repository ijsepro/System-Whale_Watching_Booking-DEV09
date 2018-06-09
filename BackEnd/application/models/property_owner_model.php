<?php

class Property_Owner_Model extends CI_Model{

    public function get() {
        return $this->db->get('Property_Owner')->result_array();  
    } 
    
    public function insert ($data) {
        $this->db->insert('Property_Owner', $data);
        return $this->db->insert_id();
    }
    
    public function search($where) {
        return $this->db->get_where('Property_Owner', $where)->result_array();
    }

    public function update($data, $where) {
        $this->db->where($where)->update('Property_Owner', $data);
        return $this->db->affected_rows();
    }
    
    public function delete($where) {
        $this->db->delete('Property_Owner', $where);
        return $this->db->affected_rows();
    }

    public function find_what_and_where($what, $where){
        return $this->db->select($what)->get_where('Property_Owner', $where)->result_array();
    }

}